<template>
  <div v-if="links" class="space-x-small kata-block-links">
    <KataLink
      v-for="item in links"
      v-bind="item"
      :key="item._key"
      class="inline-block mb-small"
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
