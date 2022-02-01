<template>
  <div class="slice cta-1 w-r10/12 mx-r1/12 md:w-r7/12 md:mx-auto text-center">
    <h2
      v-if="title"
      v-kata-html="title"
      class="heading-2 fade-up mb-medium xl:px-r1/12"
    />
    <SanityEmbedContent
      v-if="textBody"
      :blocks="textBody"
      class="fade-up mb-medium sm:px-r1/12 xl:px-r2/12"
    />
    <KataLinks v-if="links" :links="links" class="fade-up" />
  </div>
</template>

<script>
import { links, title, textBody } from '../shared'
export default {
  mixins: [links, title, textBody],
}
</script>
