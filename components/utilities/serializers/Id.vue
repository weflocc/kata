<template>
  <span :id="id">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
  },
}
</script>
