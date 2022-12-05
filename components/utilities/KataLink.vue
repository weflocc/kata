<template>
  <nuxt-link
    v-if="
      linkType == 'internal' && (!isOnSamePage(link.path) || !anchor) && path
    "
    :to="path"
    class="btn-internal"
    :class="linkStyle"
    v-text="linkText"
  />

  <button
    v-else-if="linkType == 'internal' && isOnSamePage(link.path) && anchor"
    :class="linkStyle"
    class="btn-anchor"
    @click="scrollToAnchor(anchor)"
    v-text="linkText"
  />

  <a
    v-else-if="linkType == 'file' && file"
    :href="link"
    :class="linkStyle"
    class="btn-file"
    target="_blank"
    download
    v-text="linkText"
  />

  <a
    v-else-if="linkType == 'external' && link"
    :href="url"
    target="_blank"
    class="btn-external"
    :class="linkStyle"
    v-text="linkText"
  />

  <nuxt-link
    v-else-if="linkType == 'lightbox' && query"
    :to="{ query: { lightbox: query } }"
    :class="linkStyle"
    class="btn-lightbox"
    v-text="linkText"
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
    path() {
      let path = this.link ? this.link.path : this.$route.fullPath
      if (this.anchor) {
        path += this.anchor
      }
      return path
    },
  },
}
</script>
