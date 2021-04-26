export default function ({ query, enablePreview, store }) {
  if (query.preview) {
    enablePreview()
    store.commit('preview/enablePreviewMode')

    // rerun the index. for some reason the one on nuxtServerInit doesn't use credentials
    // do doesn't include drafts
    store.dispatch('references/initIndex')
  }
}
