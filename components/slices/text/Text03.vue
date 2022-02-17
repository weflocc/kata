<template>
  <div class="slice text-1 md:flex mx-auto w-r10/12">
    <div class="mb-large md:mb-0 md:w-r4/12 md:pr-r1/12 title">
      <h2 v-if="title" v-kata-html="title" class="heading-3 fade-up" />
    </div>
    <div class="md:w-r6/12 columns-2 body">
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
