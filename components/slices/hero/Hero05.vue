<template>
  <div class="slice hero-5 stack-children">
    <KataMedia
      :media="media"
      :ratio="ratio"
      :mobile-ratio="mobileRatio"
      :no-crop="noCrop"
      :max-width="2500"
      :show-loader="showLoader"
      class="h-screen w-full object-cover"
      :lazy="false"
    />
    <div
      class="w-r24/24 mx-auto md:w-r12/24 h-screen flex flex-col justify-center text-center z-1 text text-white"
    >
      <slot name="title">
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
      </slot>
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
import {
  title,
  superHeading,
  textBody,
  links,
  media,
  noCrop,
  showLoader,
} from '../shared'

export default {
  mixins: [title, superHeading, textBody, links, media, noCrop, showLoader],
  props: {
    ratio: {
      type: Number,
      default: 16 / 9,
    },
    mobileRatio: {
      type: Number,
      default: 3 / 4,
    },
  },
}
</script>

<style lang="scss">
.hero-5 {
  position: relative;
  background: black;

  img,
  video {
    opacity: 0.75 !important;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .slider {
    // css slider so text can be visible
    opacity: 0.7;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 20%;
    left: 1px;
    top: 0px;
    background: linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0) 100%);
    z-index: 1;
  }
}
</style>
