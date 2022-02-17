<template>
  <div class="slice text-2 w-r10/12 mx-auto md:px-r2/12">
    <h2 v-if="title" v-kata-html="title" class="label-1 fade-up mb-small" />
    <SanityEmbedContent v-if="textBody" :blocks="textBody" class="fade-up" />
  </div>
</template>

<script>
import { title, textBody } from '../shared'
export default {
  mixins: [title, textBody],
}
</script>

<style scoped lang="scss">
.text-2 {
}
</style>
