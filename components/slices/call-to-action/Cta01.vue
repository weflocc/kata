<template>
  <div class="slice cta-1 w-r24/24 mx-auto lg:w-r16/24 md:mx-auto text-center">
    <h2
      v-if="title"
      v-kata-html="title"
      class="heading-2 fade-up mb-medium xl:px-r2/24"
    />
    <SanityEmbedContent
      v-if="textBody"
      :blocks="textBody"
      class="fade-up mb-medium sm:px-r2/24 xl:px-r2/24"
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
