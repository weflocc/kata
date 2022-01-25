<template>
  <div
    class="slice cta-1 call-to-action-1 w-r10/12 mx-r1/12 md:w-r7/12 md:mx-auto text-center"
  >
    <h2 v-if="title" v-kata-html="title" class="heading-2 fade-up mb-medium" />
    <p
      v-if="text"
      v-kata-html="text"
      class="fade-up mb-medium sm:px-r1/12 xl:px-r2/12 whitespace-pre-line"
    />
    <KataLinks v-if="links" :links="links" class="fade-up" />
  </div>
</template>

<script>
import { links, title, text } from '../shared'
export default {
  mixins: [links, title, text],
}
</script>
