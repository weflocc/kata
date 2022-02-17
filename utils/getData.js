import { groq } from '@nuxtjs/sanity'
import { removeBothSlashes } from '~/utils/functions'
const camelCase = require('lodash.camelcase')

const getData = async ($sanity, query, store, route, vars = {}) => {
  let path =
    vars?.path || route.params?.slug || route.params?.pathMatch || route.path
  path = removeBothSlashes(path)

  const globals = vars?.globals || []
  const customProjections = vars?.customProjections || []
  const feedSelectors = vars?.feedSelectors || []
  const client = vars?.client || null

  const type =
    vars?.type ||
    store.getters['references/getTypeFromFullPath'](route.fullPath)

  const pathQuery = path ? `&& slug.current == '${path}'` : ''

  let projection = ``

  if (globals.length) {
    globals.forEach((element) => {
      let globalElement = camelCase(element)
      projection += `${globalElement}->,`
    })
  }

  if (customProjections.length) {
    customProjections.forEach((element) => {
      projection += `${element},`
    })
  }

  if (feedSelectors.length) {
    feedSelectors.forEach((element) => {
      let sort = element.sort ? element.sort : '| order(_createdAt desc)'

      projection += `${element.field} {...,"feed": select(`
      projection += `defined(selected) && length(selected) > 0 => selected[]->,`
      projection += `defined(categories) && length(categories) > 0 => *[_type == "${element.articleType}" && references(^.categories[]._ref)]${sort},`

      if (element.customProjection) {
        projection += element.customProjection
      } else {
        projection += `*[_type == "${element.articleType}"]${sort}`
      }

      if (element.max) {
        projection += `[0...${element.max}]`
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
    if (query.preview || store.state.preview?.active) {
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

  let data
  if (client) {
    data = await $sanity[client].fetch(groqQuery)
  } else {
    data = await $sanity.fetch(groqQuery)
  }

  console.log('page data', groqQuery)

  if (instance && articlesObject) {
    // merge the data and articlesObject objects
    data = Object.assign(data, articlesObject)
  }

  return data
}

export { getData }
