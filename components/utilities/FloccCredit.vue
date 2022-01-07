<template>
  <a v-if="credit && credit.url" href="https://flocc.co" target="_blank">
    {{ credit.linkText }}
  </a>
</template>

<script>
export default {
  computed: {
    credit() {
      return this.$store.state.globalContent.floccCredit
    },
  },
}
</script>
