<template>
  <a :href="'#' + anchor" @click.prevent="scrollToAnchor(anchor)">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    anchor: { type: String, default: '' },
  },
}
</script>
