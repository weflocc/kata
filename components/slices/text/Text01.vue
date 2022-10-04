<template>
  <div class="slice text-1 md:flex mx-auto w-r24/24">
    <div class="mb-large md:mb-0 md:w-1/2 md:pr-r2/24 title">
      <h2 v-if="title" v-kata-html="title" class="heading-2 fade-up" />
      <KataLinks
        v-if="links"
        :links="links"
        class="mt-large fade-up hidden md:block"
      />
    </div>
    <div class="md:w-1/2 body">
      <SanityEmbedContent v-if="textBody" :blocks="textBody" class="fade-up" />
      <KataLinks
        v-if="links"
        :links="links"
        class="mt-large fade-up block md:hidden"
      />
    </div>
  </div>
</template>

<script>
import { title, textBody, links } from '../shared'
export default {
  mixins: [title, textBody, links],
}
</script>
