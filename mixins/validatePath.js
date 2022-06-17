import {
  removeBothSlashes,
  removeLeadingSlash,
  removeTrailingSlash,
} from '../utils/functions'
import { groq } from '@nuxtjs/sanity'

export default {
  async validate({ route, store, query, $sanity }) {
    if (query.preview) {
      console.log('validate preview true')
      return true
    } else {
      const path = route.params
        ? route.params.slug || route.params.pathMatch
        : route.path
      let clearPath = removeBothSlashes(path)
      let res = store.getters['references/isPathPublished'](clearPath)
      clearPath = removeLeadingSlash(clearPath)
      clearPath = removeTrailingSlash(clearPath)

      // result = store?.state?.references?.index?.some((x) => x.slug == clearPath)
      console.log('res', res)
      // if (store.state && store.state.references) {
      // }

      if (res) {
        console.log('validate 1 true')
        return true
      } else {
        let qroqQuery = groq`*[slug.current == '${clearPath}' && !(_id in path("drafts.**"))]`
        if ($sanity) {
          const result = await $sanity.fetch(qroqQuery)

          console.log('validate 2', result.length ? true : false)
          return result.length ? true : false
        } else {
          console.warn('Validate path: no sanity instance found')
          return false
        }
      }
    }
  },
}
