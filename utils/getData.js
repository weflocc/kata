import { groq } from '@nuxtjs/sanity'
import { removeBothSlashes } from './functions'
const camelCase = require('lodash.camelcase')

const getData = async ($sanity, query, store, route, vars = {}) => {
  let path = ''
  let globals = []
  let customProjections = []
  let feedSelectors = []
  let feedSelectors2 = []
  let client = null
  let type = ''

  if (vars) {
    path = vars.path
    globals = vars.globals
    customProjections = vars.customProjections
    feedSelectors = vars.feedSelectors
    feedSelectors2 = vars.feedSelectors2
    client = vars.client
    type = vars.type
  }

  // ----- Set path -----
  if (route) {
    if (path == '' || !path) {
      path = route.params
        ? route.params.slug || route.params.pathMatch
        : route.path
    }
    if (type == '' || !type) {
      type = store.getters['references/getTypeFromFullPath'](route.fullPath)
    }
  }

  path = removeBothSlashes(path)

  // create path query in groq
  const pathQuery = path ? `&& slug.current == '${path}'` : ''

  let projection = ``

  // ----- Setup global slices -----
  if (globals && globals.length) {
    globals.forEach((element) => {
      let globalElement = camelCase(element)
      projection += `${globalElement}->,`
    })
  }

  // ----- Set custom projections -----
  if (customProjections && customProjections.length) {
    customProjections.forEach((element) => {
      projection += `${element},`
    })
  }

  // ----- Setup feed selectors (v1) -----
  if (feedSelectors && feedSelectors.length) {
    feedSelectors.forEach((element) => {
      let sort = element.sort ? element.sort : '| order(_createdAt desc)'

      projection += `${element.field} {...,"feed": select(`
      projection += `defined(selected) && length(selected) > 0 => selected[]->,`
      projection += `defined(categories) && length(categories) > 0 => *[_type == "${element.articleType}" && references(^.categories[]._ref) && !(_id in path('drafts.**'))]${sort},`

      if (element.customProjection) {
        projection += element.customProjection
      } else {
        projection += `*[_type == "${element.articleType}" && !(_id in path('drafts.**'))]${sort}`
      }

      if (element.max) {
        projection += `[0...${element.max}]`
      }
      projection += `)},`
    })
    // ----- Setup feed selectors (v2) -----
  } else if (feedSelectors2 && feedSelectors2.length) {
    feedSelectors2.forEach((element) => {
      let sort = element.sort ? element.sort : '| order(_createdAt desc)'
      let customFilter = element.customFilter ? element.customFilter : ''

      console.log(element.articleTypes)

      let types = '['
      element.articleTypes.forEach((e) => {
        types += `"${e}",`
      })
      types += ']'

      let max = element.max ? `[0...${element.max}]` : ''

      if (customFilter) {
        projection += `${element.name} {...,categories[]->,"feed": select(`
        projection += `defined(selected) && length(selected) > 0 => (selected[]->)[${customFilter}],`
        projection += `defined(categories) && length(categories) > 0 => *[_type in ${types} && references(^.categories[]._ref) && !(_id in path('drafts.**')) && _id != ^.^._id && ${customFilter}]${sort}${max},`
      } else {
        projection += `${element.name} {...,categories[]->,"feed": select(`
        projection += `defined(selected) && length(selected) > 0 => selected[]->,`
        projection += `defined(categories) && length(categories) > 0 => *[_type in ${types} && references(^.categories[]._ref) && !(_id in path('drafts.**')) && _id != ^.^._id ]${sort}${max},`
      }

      if (element.customProjection) {
        projection += element.customProjection
      } else {
        // ^.^._id => up 2 levels to the main page id
        projection += `*[_type in ${types} && !(_id in path('drafts.**')) && _id != ^.^._id ${
          customFilter ? `&& ${customFilter}` : ''
        }]${sort}${max}`
      }

      projection += `)},`
    })
  }

  // ----- Detect preview mode -----
  // in production mode, hide drafts from being shown or generated. In sanity preview or locally, show drafts
  // under SSR, the preview mode bool in vuex store is not yet defined, hence check the query string
  let filterDrafts = " && !(_id in path('drafts.**'))"

  if (query.preview || (store.state.preview && store.state.preview.active)) {
    console.log('Running in preview mode - show drafts')
    filterDrafts = ''
  }

  // ----- Setup articles -----
  // if there is an article instance, get the articles
  // if this is a single article, we need the name of the template, minus the -slug
  let articlesQuery = ``
  let articlesObject = {}
  let name = route.name
  if (name.includes('slug')) {
    name = name.replace('-slug', '')
  }
  const articleInstance = vars.articleInstance || name

  const instance = store.state.articles[articleInstance]
  if (instance) {
    const articleTypes = vars.articleTypes || instance.types
    const articleSort = vars.articleSort || instance.sort || ''
    const customArticlesFilter = vars.customArticlesFilter
      ? `&& ${vars.customArticlesFilter}`
      : ''
    articlesObject.articleInstance = articleInstance
    articlesObject.articleSort = articleSort

    // TODO: different pagination method (test on v1 used on UA)
    // auto pagination to reduce page load
    // let hasPagination = vars.hasPagination || true
    // let paginationPerPage = vars.paginationPerPage || 12
    // let min = 0
    // let max = paginationPerPage

    let articleTypesString = ``
    articlesObject.articleTypes = articleTypes
    articleTypes.forEach((type) => {
      articleTypesString += `'${type}', `
    })

    // ----- Setup featured articles -----
    // hide featured from the returned list of articles (no need for computed property now)
    let separateFeatured = vars.separateFeatured === false ? false : true
    const showFeatured = instance.hasOwnProperty('featured')
    let separateFeaturedString = ``
    // separateFeatured removes featured articles them from the returned articles array. Default is true, pass in false to disable.
    if (separateFeatured && showFeatured) {
      separateFeaturedString = ` && !(_id in *[_type == '${articleInstance}Featured'][0].featured[]._ref)`
    }

    articlesQuery += `"articles": *[_type in [${articleTypesString}] ${filterDrafts}${separateFeaturedString}${customArticlesFilter}] ${articleSort},`

    // ---- Get categories for article type -----
    // will get the categories if set in kata.config.js
    let categoryType = null
    if (instance.hasOwnProperty('filters')) {
      categoryType = Object.keys(instance.filters)[0]
    }
    if (categoryType) {
      articlesQuery += `"categories":  *[_type == '${categoryType}'],`
      articlesObject.categoryType = categoryType
    }

    // ---- Get the featured articles ----
    articlesObject.showFeatured = showFeatured
    if (showFeatured) {
      articlesQuery += `"featured": *[ _type == '${articleInstance}Featured' ${filterDrafts}]{"featured": featured[]->}| order(_updatedAt desc)[0].featured`
    }

    // add booleans to the templates so we know whether to render the components
    articlesObject.showSearch = instance.hasOwnProperty('searchTerm')
    articlesObject.showFilters = instance.hasOwnProperty('filters')
    articlesObject.separateFeatured = separateFeatured
  }

  // ---- Create the groq query ----
  // put all these elements together to create the main groq query
  let groqQuery = groq`{"c": *[_type == '${type}' ${pathQuery}]{
    ...,
    ${projection}
  } | order(_updatedAt desc)[0], ${articlesQuery}}`

  // console log so you can copy and paste into sanity vision to fix any bugs/test/etc
  console.log('page groq query', groqQuery)

  // if multiple sanity clients, use the one set here
  let data
  if (client) {
    data = await $sanity[client].fetch(groqQuery)
  } else {
    data = await $sanity.fetch(groqQuery)
  }

  // add the extra articles fields into data to pass back to the template
  if (instance && articlesObject) {
    // merge the data and articlesObject objects
    data = Object.assign(data, articlesObject)
  }

  // error prevention
  if (!Object.keys(data).length) {
    // return c to prevent it not being on the page at all
    data = { c: null }
  }

  // send the data back to the template
  return data
}

export { getData }
