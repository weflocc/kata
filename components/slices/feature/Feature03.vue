<template>
  <div class="slice feature-3 stack-children">
    <KataMedia
      :media="media"
      :ratio="ratio"
      :max-width="3000"
      :no-crop="noCrop"
      class="h-screen w-full object-cover"
    />
    <div
      class="w-r24/24 md:w-r16/24 lg:w-r12/24 h-screen flex flex-col justify-end items-start z-1 p-r2/24 md:pr-0 content"
    >
      <h2 v-kata-html="title" class="heading-2 text-white mb-medium fade-up" />
      <SanityEmbedContent
        v-if="textBody"
        :blocks="textBody"
        class="text-white mb-medium fade-up"
      />
      <KataLinks v-if="links" :links="links" class="fade-up" />
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
.feature-3 {
  position: relative;
  background: black;

  img.kata-image.lazyLoad.isLoaded {
    opacity: 0.75;
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
