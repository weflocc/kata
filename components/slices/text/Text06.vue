<template>
  <div
    class="slice text-6 flex flex-col md:flex-row relative justify-start mx-auto w-r10/12"
  >
    <div class="md:w-r3/12 md:mr-r1/12 title mb-medium md:mb-0">
      <h2 v-if="title" v-kata-html="title" class="heading-3 fade-up" />
    </div>
    <div class="md:w-r8/12 body">
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
