<template>
  <div v-if="!l">
    <slot></slot>
  </div>

  <NuxtLink v-else-if="type == 'internalLink'" :to="getLink(l._ref)">
    <slot></slot>
  </NuxtLink>

  <a
    v-else-if="type == 'fileLink'"
    :href="l.link"
    target="_blank"
    download
  >
  <slot></slot>
  </a>

  <a v-else-if="type == 'externalLink'" :href="l.url" :target="l.openInNewTab ? '_blank' : '_self'">
      <slot></slot>
  </a>


</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    l() {
      if (this.link.to && this.link.to.length) {
        return  this.link.to[0]
      } else {
        return false
      }
    },
    type() { 
      if (this.link?.to && this.link.to[0]) {
        return this.link.to[0]._type
      }
     }
  },
  methods: {
    getLink(ref) {
      const link = this.$store.getters['references/getLinkFromReference'](ref)
      return link ? link.path : '/'
    },
  }
}
</script>
