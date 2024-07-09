export default {
  isOnSamePage(path) {
    if (path === this.$route.path) return true
    return false
  },
  getLink(ref) {
    const link = this.$store.getters['references/getLinkFromReference'](ref)
    return link ? link.path : '/'
  },
  getSingleLink(obj) {
    if (obj && obj != undefined) {
      if (obj.linkType == 'internal' || obj.linkType == 'file') {
        let ref = obj.linkType == 'file' ? obj?.file?.asset?._ref : obj?.internalLink?._ref

        const link = this.$store.getters['references/getLinkFromReference'](ref)
        let path = '/'
        if (link && obj.linkType == 'internal') {
          path = link.path
        } else if (link) {
          path = link
        }
        if (obj.anchor) {
          // add hash if missing
          if (/^#/.test(obj.anchor)) {
            path += obj.anchor
          } else {
            path += '#' + obj.anchor
          }
        }
        return path
      } else if (obj.linkType == 'external') {
        return obj.url
      } else if (obj.linkType == 'lightbox') {
        return {query: {lightbox: obj.query}}
      } else {
        return null
      }
    }
    return null
  },
  getLinkComponent(obj) {
    if (obj && obj != undefined) {
      if (
        (obj.linkType == 'internal' && obj.internalLink) ||
        (obj.linkType == 'lightbox' && obj.query)
      ) {
        if (
          obj.linkType == 'internal' &&
          obj.anchor &&
          this.isOnSamePage(this.getLink(obj.internalLink._ref))
        ) {
          return 'button'
        }
        return 'n-link'
      } else if ((obj.linkType == 'external' && obj.url) || (obj.linkType == 'file' && obj.file)) {
        return 'a'
      } else if (obj.anchor) {
        return 'button'
      }
    }
    return 'div'
  },
  getGlobal(global) {
    if (global.slices && global.slices.length == 1) {
      return global.slices[0]
    }
    // @todo - write the get target slice stuff here? migrate from store.
  },
  scrollToAnchor(anchor) {
    if (process.client) {
      console.log('scroll to anchor', anchor)
      if (anchor.includes('#')) {
        anchor = anchor.replace('#', '')
      }
      let el = document.getElementById(anchor)
      let header = document.getElementById('header')
      if (el && header) {
        let top = el.getBoundingClientRect().top + document.documentElement.scrollTop
        window.scrollTo({
          top: top - header.offsetHeight,
          behavior: 'smooth',
        })
      }
    }
  },
}
