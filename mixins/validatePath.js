import {
  removeBothSlashes,
  removeLeadingSlash,
  removeTrailingSlash,
} from '../utils/functions'
import { groq } from '@nuxtjs/sanity'

export default {
  async validate({ route, store, query, $sanity }) {
    if (query.preview) return true
    const path = route.params
      ? route.params.slug || route.params.pathMatch
      : route.path
    let clearPath = removeBothSlashes(path)
    let res = store.getters['references/isPathPublished'](clearPath)
    clearPath = removeLeadingSlash(clearPath)
    clearPath = removeTrailingSlash(clearPath)

    let result = store.state.references.index.some((x) => x.slug == clearPath)

    if (res || result) {
      return true
    } else {
      let qroqQuery = groq`*[slug.current == '${clearPath}' && !(_id in path("drafts.**"))]`
      if ($sanity) {
        const result = await $sanity.fetch(qroqQuery)
        return result.length ? true : false
      } else {
        console.warn('Validate path: no sanity instance found')
        return false
      }
    }
  },
}
