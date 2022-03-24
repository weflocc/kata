<template>
  <div v-if="text || cite" class="standout-text slice my-large">
    <p v-if="text" v-kata-html="text" class="label-1" />
    <p v-if="cite" v-kata-html="cite" class="para-2 mt-small" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    cite: {
      type: String,
      default: '',
    },
  },
}
</script>
