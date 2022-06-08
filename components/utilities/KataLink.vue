<template>
  <nuxt-link
    v-if="
      linkType == 'internal' && (!isOnSamePage(link.path) || !anchor) && path
    "
    v-kata-html="linkText"
    :to="path"
    class="btn-internal"
    :class="linkStyle"
  />

  <button
    v-else-if="linkType == 'internal' && isOnSamePage(link.path) && anchor"
    v-kata-html="linkText"
    :class="linkStyle"
    class="btn-anchor"
    @click="scrollToAnchor(anchor)"
  />

  <a
    v-else-if="linkType == 'file' && file"
    v-kata-html="linkText"
    :href="link"
    :class="linkStyle"
    class="btn-file"
    target="_blank"
    download
  />

  <a
    v-else-if="linkType == 'external' && link"
    v-kata-html="linkText"
    :href="url"
    target="_blank"
    class="btn-external"
    :class="linkStyle"
  />

  <nuxt-link
    v-else-if="linkType == 'lightbox' && query"
    v-kata-html="linkText"
    :to="{ query: { lightbox: query } }"
    :class="linkStyle"
    class="btn-lightbox"
  />
</template>

<script>
export default {
  props: {
    linkText: {
      type: String,
      default: null,
    },
    linkStyle: {
      type: String,
      default: null,
    },
    linkType: {
      type: String,
      default: null,
    },
    internalLink: {
      type: Object,
      default: null,
    },
    anchor: {
      type: String,
      default: null,
    },
    file: {
      type: Object,
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
    query: {
      type: String,
      default: null,
    },
  },
  computed: {
    link() {
      let ref = ''
      if (this.internalLink?._ref) {
        ref = this.internalLink._ref
      } else if (this.file && this.file?.asset?._ref) {
        ref = this.file.asset._ref
      }
      return ref
        ? this.$store.getters['references/getLinkFromReference'](ref)
        : '/'
    },
    // isOnSamePage() {
    //   if (this.link?.path) {
    //     return this.link.path === this.$route.fullPath ? true : false
    //   }
    //   return false
    // },
    path() {
      let path = this.link ? this.link.path : this.$route.fullPath
      if (this.anchor) {
        path += this.anchor
      }
      return path
    },
  },
  // methods: {
  //   scrollToAnchor(anchor) {
  //     if (process.client) {
  //       if (anchor.includes('#')) anchor = anchor.replace('#', '')
  //       let el = document.getElementById(anchor)
  //       let header = document.getElementById('header')
  //       if (el && header) {
  //         window.scrollTo({
  //           top: el.offsetTop - header.offsetHeight,
  //           behavior: 'smooth',
  //         })
  //       }
  //     }
  //   },
  // },
}
</script>
