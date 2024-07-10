<template>
  <a :href="link" target="_blank" download>
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    asset: {
      type: Object,
      default: null,
    },
  },
  computed: {
    link() {
      const asset = this.asset || this?.$vnode?.data?.props?.file?.asset
      if (asset) {
        const ref = asset._ref
        return this.$store.getters['references/getLinkFromReference'](ref)
      }
      return ''
    },
  },
}
</script>
