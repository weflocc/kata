<template>
  <div class="hero-6 slice">
    <KataMedia
      :media="media"
      :ratio="ratio"
      :mobile-ratio="mobileRatio"
      :no-crop="noCrop"
      :max-width="2500"
      :show-loader="showLoader"
      class="hero-animation border-animate"
      :lazy="false"
    />

    <div
      v-if="title || superHeading || textBody"
      class="mt-large mx-auto w-r24/24 md:flex md:justify-between text"
    >
      <div class="md:w-1/2 md:pr-large">
        <h1 v-if="superHeading" class="super-heading" v-html="superHeading" />
        <h1 v-else-if="title" class="heading-1" v-html="title" />
        <h2
          v-if="superHeading && title"
          class="heading-1 mt-small"
          v-html="title"
        />
      </div>
      <div class="md:w-1/2">
        <SanityEmbedContent
          v-if="textBody"
          :blocks="textBody"
          class="mb-medium"
        />
        <KataLinks v-if="links" :links="links" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  superHeading,
  title,
  textBody,
  links,
  media,
  noCrop,
  showLoader,
} from '../shared'
export default {
  mixins: [superHeading, title, textBody, links, media, noCrop, showLoader],
  props: {
    ratio: {
      type: Number,
      default: 16 / 9,
    },
    mobileRatio: {
      type: Number,
      default: 16 / 9,
    },
  },
}
</script>

<style lang="scss">
.hero-6 {
  img {
    object-fit: cover;
    max-height: 60vh;
    width: 100%;
  }
}
</style>
