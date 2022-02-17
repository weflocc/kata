import { removeBothSlashes } from '../utils/functions'

export default {
  validate({ route, store, query }) {
    if (query.preview) return true
    const path = route.params
      ? route.params.slug || route.params.pathMatch
      : route.path
    return store.getters['references/isPathPublished'](removeBothSlashes(path))
  },
}
