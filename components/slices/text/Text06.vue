<template>
  <div
    class="slice text-6 flex flex-col md:flex-row relative justify-start mx-auto w-r24/24"
  >
    <div class="md:w-r6/24 md:mr-r2/24 title mb-medium md:mb-0">
      <h2 v-if="title" v-kata-html="title" class="heading-3 fade-up" />
    </div>
    <div class="md:w-r16/24 body">
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
