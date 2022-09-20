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

  const pathQuery = path ? `&& slug.current == '${path}'` : ''

  let projection = ``

  if (globals && globals.length) {
    globals.forEach((element) => {
      let globalElement = camelCase(element)
      projection += `${globalElement}->,`
    })
  }

  if (customProjections && customProjections.length) {
    customProjections.forEach((element) => {
      projection += `${element},`
    })
  }

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
  } else if (feedSelectors2 && feedSelectors2.length) {
    feedSelectors2.forEach((element) => {
      let sort = element.sort ? element.sort : '| order(_createdAt desc)'

      console.log(element.articleTypes)

      let types = '['
      element.articleTypes.forEach((e) => {
        types += `"${e}",`
      })
      types += ']'

      let max = element.max ? `[0...${element.max}]` : ''

      projection += `${element.name} {...,categories[]->,"feed": select(`
      projection += `defined(selected) && length(selected) > 0 => selected[]->,`
      projection += `defined(categories) && length(categories) > 0 => *[_type in ${types} && references(^.categories[]._ref) && !(_id in path('drafts.**'))]${sort}${max},`

      if (element.customProjection) {
        projection += element.customProjection
      } else {
        projection += `*[_type in ${types} && !(_id in path('drafts.**'))]${sort}${max}`
      }

      projection += `)},`
    })
  }

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
    articlesObject.articleInstance = articleInstance
    articlesObject.articleSort = articleSort

    // under SSR, the preview mode bool in vuex store is not yet defined, hence check the query string.
    let filterDrafts = ` && !(_id in path('drafts.**'))`
    if (query.preview || (store.state.preview && store.state.preview.active)) {
      console.log('preview mode')
      filterDrafts = ''
    }

    let articleTypesString = ``
    articlesObject.articleTypes = articleTypes
    articleTypes.forEach((type) => {
      articleTypesString += `'${type}', `
    })

    articlesQuery += `"articles": *[_type in [${articleTypesString}] ${filterDrafts}] ${articleSort},`

    let categoryType = null
    if (instance.hasOwnProperty('filters')) {
      categoryType = Object.keys(instance.filters)[0]
    }
    if (categoryType) {
      articlesQuery += `"categories":  *[_type == '${categoryType}'],`
      articlesObject.categoryType = categoryType
    }

    const showFeatured = instance.hasOwnProperty('featured')
    articlesObject.showFeatured = showFeatured
    if (showFeatured) {
      articlesQuery += `"featured": *[ _type == '${articleInstance}Featured' ${filterDrafts}]{"featured": featured[]->}| order(_updatedAt desc)[0].featured`
    }

    articlesObject.showSearch = instance.hasOwnProperty('searchTerm')
    articlesObject.showFilters = instance.hasOwnProperty('filters')
  }

  let groqQuery = groq`{"c": *[_type == '${type}' ${pathQuery}]{
    ...,
    ${projection}
  } | order(_updatedAt desc)[0], ${articlesQuery}}`

  console.log('page groq query', groqQuery)

  let data
  if (client) {
    data = await $sanity[client].fetch(groqQuery)
  } else {
    data = await $sanity.fetch(groqQuery)
  }

  if (instance && articlesObject) {
    // merge the data and articlesObject objects
    data = Object.assign(data, articlesObject)
  }

  if (!Object.keys(data).length) {
    // return c to prevent it not being on the page at all
    data = { c: null }
  }

  return data
}

export { getData }
