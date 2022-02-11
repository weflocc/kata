<template>
  <div class="slice text-8 mx-r1/12 w-r10/12 lg:w-r8/12 lg:mx-r2/12">
    <h2 v-if="title" v-kata-html="title" class="mb-medium fade-up heading-3" />
    <SanityEmbedContent
      v-if="textBody"
      :blocks="textBody"
      class="fade-up para-large"
    />
    <KataLinks v-if="links" :links="links" class="mt-medium" />
  </div>
</template>

<script>
import { title, textBody, links } from '../shared'
export default {
  mixins: [title, textBody, links],
}
</script>

<style scoped lang="scss">
.text-8 {
}
</style>
