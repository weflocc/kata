import Vue from 'vue'

if (!Vue.__globalMixin__ || Vue.__globalMixin__ == undefined) {
  Vue.__globalMixin__ = true
  Vue.mixin({
    methods: {
      getLink(ref) {
        const link = this.$store.getters['references/getLinkFromReference'](ref)
        return link ? link.path : '/'
      },
      getSingleLink(obj) {
        if (obj && obj != undefined) {
          if (obj.linkType == 'internal' || obj.linkType == 'file') {
            let ref =
              obj.linkType == 'file'
                ? obj?.file?.asset?._ref
                : obj?.internalLink?._ref

            const link = this.$store.getters['references/getLinkFromReference'](
              ref
            )
            let path = '/'
            if (link && obj.linkType == 'internal') {
              path = link.path
            } else if (link) {
              path = link
            }
            return path
          } else if (obj.linkType == 'external') {
            return obj.url
          } else {
            return null
          }
        }
        return null
      },
      getLinkComponent(obj) {
        if (obj && obj != undefined) {
          if (obj && obj.linkType == 'internal' && obj.internalLink) {
            return 'n-link'
          } else if (
            (obj.linkType == 'external' && obj.url) ||
            (obj.linkType == 'file' && obj.file)
          ) {
            return 'a'
          }
        }
        return 'div'
      },
      scrollToAnchor(anchor) {
        if (process.client) {
          console.log('scroll to anchor', anchor)
          if (anchor.includes('#')) anchor = anchor.replace('#', '')
          let el = document.getElementById(anchor)
          let header = document.getElementById('header')
          if (el && header) {
            let pos = el.getBoundingClientRect()
            window.scrollTo({
              top: pos.top - header.offsetHeight,
              behavior: 'smooth',
            })
          }
        }
      },
    },
  })
}

Vue.directive('kata-html', {
  bind: (el, binding) => {
    let value = binding.value
    let elem = value ? value.replace(/\u2028/g, '') : ''
    el.innerHTML = elem
  },
  update: (el, binding) => {
    let value = binding.value
    let elem = value ? value.replace(/\u2028/g, '') : ''
    el.innerHTML = elem
  },
})

Vue.filter('formatDate', (value) => {
  const date = new Date(value)
  return date.toLocaleString(['en-GB'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
})

Vue.filter('formatDateTime', (value) => {
  const date = new Date(value)
  return date.toLocaleString(['en-GB'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
})
