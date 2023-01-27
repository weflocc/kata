<template>
  <component
    :is="getLinkComponent(item)"
    :to="getSingleLink(item)"
    :href="getSingleLink(item)"
    :target="getLinkComponent(item) == 'a' ? '_blank' : '_self'"
    class="transition-default"
    @click="
      getLinkComponent(item) === 'button' ? scrollToAnchor(item.anchor) : null
    "
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
}
</script>
