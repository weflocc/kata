<template>
  <div
    class="hero-2 slice flex-wrap md:flex-nowrap md:justify-between flex min-h-screen"
  >
    <div class="media-wrap mb-large md:mb-0 md:w-r5/12 w-full relative">
      <KataMedia
        :media="media"
        :no-crop="noCrop"
        :ratio="1"
        :max-width="2000"
        class="h-full w-full object-cover"
      />
    </div>
    <div
      class="body md:py-slice-half md:w-r7/12 px-r1/12 md:pl-large md:flex md:flex-col md:justify-center"
    >
      <h1
        v-if="superHeading"
        v-kata-html="superHeading"
        class="super-heading"
      />
      <h1 v-else-if="title" v-kata-html="title" class="heading-1" />
      <h2
        v-if="title && superHeading"
        v-kata-html="title"
        class="heading-1 mt-medium"
      />
      <SanityEmbedContent
        v-if="textBody"
        :blocks="textBody"
        class="mt-medium"
      />
      <KataLinks v-if="links" :links="links" class="links mt-medium" />
    </div>
  </div>
</template>

<script>
import { superHeading, title, textBody, links, media, noCrop } from '../shared'

export default {
  mixins: [superHeading, title, textBody, links, media, noCrop],
}
</script>

<style lang="scss">
.hero-2 .media-dots {
  bottom: var(--spacing-small);
  left: -25px;
  width: auto;

  li {
    display: block;

    button {
      &::before {
        color: $primary !important;
        font-size: 10px;
      }
    }
  }

  @include md-down {
    left: 0;
  }
}
@include md-down {
  .hero-2 .media-wrap {
    height: 35vh;
  }
}
</style>
