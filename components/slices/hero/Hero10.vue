<template>
  <div class="slice hero-10">
    <div
      class="w-r24/24 md:w-r18/24 lg:w-r14/24 mx-container-margin relative z-1 content-wrap z-2"
    >
      <div
        class="flex-col flex items-start justify-end w-full h-full min-h-screen py-slice-half content"
      >
        <template v-if="superHeading">
          <h1
            v-kata-html="superHeading"
            class="super-heading text-white mb-medium"
          />
          <h2 v-if="title" v-kata-html="title" class="heading-1 text-white" />
        </template>
        <h1 v-else v-kata-html="title" class="heading-1 text-white" />
        <SanityEmbedContent
          v-if="textBody"
          :blocks="textBody"
          class="text-white mt-medium"
        />
        <KataLinks v-if="links" :links="links" class="mt-medium w-full" />
      </div>
    </div>
    <div
      class="bg-black w-full h-full overflow-hidden image absolute top-0 left-0 z-1"
    >
      <KataMedia
        :media="media"
        :ratio="ratio"
        :max-width="3000"
        :no-crop="noCrop"
        class="w-full h-full"
      />
    </div>
  </div>
</template>

<script>
import { title, superHeading, textBody, links, media, noCrop } from '../shared'

export default {
  mixins: [title, superHeading, textBody, links, media, noCrop],
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

<style lang="scss">
.hero-10 {
  position: relative;
  background: black;

  img {
    opacity: 0.75 !important;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .slider {
    // css slider so text can be visible
    opacity: 0.7;
  }
}
</style>
