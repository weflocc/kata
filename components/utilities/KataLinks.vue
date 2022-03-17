<template>
  <div v-if="links && links.length" class="kata-links">
    <KataLink
      v-for="link in links"
      v-bind="link"
      :key="link._key"
      class="inline-block mb-small fade-up kata-link mr-small"
    />
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.kata-link:first-child:last-child {
  margin-right: 0;
}
</style>
