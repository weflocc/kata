<template>
  <div v-if="buttons.length" class="-mx-2">
    <KataButton
      v-for="button in buttons"
      v-bind="button"
      :key="button._key"
      class="mx-2 inline-block"
    />
  </div>
</template>

<script>
export default {
  props: {
    buttons: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
