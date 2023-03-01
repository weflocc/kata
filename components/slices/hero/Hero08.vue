<template>
  <div class="slice hero-8 stack-children">
    <div class="w-r24/24 mx-auto md:w-r12/24 text-center py-slice z-1 text">
      <h1
        v-if="superHeading && title"
        class="super-heading mb-medium"
        v-html="superHeading"
      />
      <h1 v-else-if="title" class="heading-1 mb-medium" v-html="title" />
      <h2
        v-if="superHeading && title"
        class="heading-1 mb-medium"
        v-html="title"
      />
      <SanityEmbedContent
        v-if="textBody"
        :blocks="textBody"
        class="text-center mb-medium"
      />
      <p v-else-if="text" class="text-center mb-medium" v-html="text" />
      <KataLinks v-if="links" :links="links" class="text-center" />
    </div>
  </div>
</template>

<script>
import { title, superHeading, textBody, text, links } from '../shared'

export default {
  mixins: [title, superHeading, textBody, text, links],
}
</script>

<style lang="scss" scoped>
.hero-8 {
}
</style>
