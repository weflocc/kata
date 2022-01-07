<template>
  <a :href="href" :target="target ? '_blank' : '_self'">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: { type: String, default: null },
    target: { type: Boolean, default: true },
  },
}
</script>
