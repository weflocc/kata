<template>
  <div class="slice text-1 md:flex mx-auto w-r24/24">
    <div class="mb-large md:mb-0 md:w-r8/24 md:pr-r2/24 title">
      <h2 v-if="title" v-kata-html="title" class="heading-3 fade-up" />
    </div>
    <div class="md:w-r12/24 columns-2 body">
      <SanityEmbedContent v-if="textBody" :blocks="textBody" class="fade-up" />
    </div>
  </div>
</template>

<script>
import { title, textBody } from '../shared'
export default {
  mixins: [title, textBody],
}
</script>
