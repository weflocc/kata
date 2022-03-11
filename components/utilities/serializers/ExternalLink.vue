<template>
  <a :href="href" :target="blank ? '_blank' : '_self'">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: { type: String, default: null },
    blank: { type: Boolean, default: true },
  },
}
</script>
