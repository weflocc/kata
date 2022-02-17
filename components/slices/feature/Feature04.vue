<template>
  <div class="slice feature-4 w-r10/12 mx-auto sm:flex">
    <div class="sm:w-1/2 sm:mr-large">
      <h2 v-if="title" v-kata-html="title" class="mb-large fade-up" />
    </div>
    <div class="sm:w-1/2 mb-large sm:mb-0 fade-up">
      <SanityEmbedContent v-if="textBody" :blocks="textBody" class="fade-up" />
      <KataLinks v-if="links" :links="links" class="mt-medium fade-up" />
    </div>
  </div>
</template>

<script>
import { title, textBody, links } from '../shared'
export default {
  mixins: [title, textBody, links],
}
</script>
