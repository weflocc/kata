<template>
  <div class="slice hero-5 stack-children">
    <KataMedia
      :media="media"
      :ratio="ratio"
      :no-crop="noCrop"
      :max-width="2500"
      class="h-screen w-full object-cover"
    />
    <div
      class="w-r24/24 mx-auto md:w-r12/24 md:mx-r6/24 h-screen flex flex-col justify-center text-center z-1 text"
    >
      <h1 v-kata-html="title" class="heading-1 text-white mb-medium" />
      <SanityEmbedContent
        v-if="textBody"
        :blocks="textBody"
        class="text-center text-white mb-medium"
      />
      <KataLinks v-if="links" :links="links" class="text-center" />
    </div>
  </div>
</template>

<script>
import { title, textBody, links, media, noCrop } from '../shared'

export default {
  mixins: [title, textBody, links, media, noCrop],
  data() {
    return {
      ratio: 16 / 9,
    }
  },
  mounted() {
    if (
      process.client &&
      window.matchMedia('(orientation: portrait)').matches
    ) {
      this.ratio = 3 / 4
    }
  },
}
</script>

<style lang="scss" scoped>
.hero-5 {
  position: relative;
  background: black;

  img {
    opacity: 0.75 !important;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 20%;
    left: 1px;
    top: 0px;
    background: linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0) 100%);
  }
}
</style>
