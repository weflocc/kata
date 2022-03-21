<template>
  <component
    :is="getLinkComponent(item)"
    v-if="item"
    :to="getSingleLink(item)"
    :href="getSingleLink(item)"
    :target="getLinkComponent(item) == 'a' ? '_blank' : '_self'"
    class="transition-default"
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
