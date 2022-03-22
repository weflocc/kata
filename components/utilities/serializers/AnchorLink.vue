<template>
  <a @click.prevent="scrollToAnchor(anchor)">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    anchor: { type: String, default: '' },
  },
  methods: {
    scrollToAnchor(anchor) {
      if (process.client) {
        if (anchor.includes('#')) anchor = anchor.replace('#', '')
        let el = document.getElementById(anchor)
        let header = document.getElementById('header')
        if (el && header) {
          window.scrollTo({
            top: el.offsetTop - header.offsetHeight,
            behavior: 'smooth',
          })
        }
      }
    },
  },
}
</script>
