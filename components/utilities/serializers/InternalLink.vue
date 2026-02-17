<template>
  <n-link :to="link" :target="blank ? '_blank' : '_self'">
    <slot></slot>
  </n-link>
</template>

<script>
export default {
  props: {
    reference: { type: Object, default: null },
    blank: { type: Boolean, default: true },
  },
  computed: {
    link() {
      console.log(this.reference)
      if (this.reference) {
        const ref = this.reference._ref
        let link = this.$store.getters['references/getLinkFromReference'](ref)
        console.log(link)
        return link ? link : ''
      }
      return ''
    },
  },
}
</script>
