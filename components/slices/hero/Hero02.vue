<template>
  <div
    class="hero-2 slice flex-wrap landscape:flex-nowrap landscape:justify-between flex min-h-screen"
    :class="{
      'landscape:items-center': (media && media.mediaType == 'embed') || noCrop,
    }"
  >
    <div
      class="media-wrap mb-large landscape:mb-0 landscape:w-r10/24 w-full relative"
    >
      <KataMedia
        :media="media"
        :no-crop="noCrop"
        :ratio="1"
        :max-width="2000"
        :show-loader="showLoader"
        class="h-full w-full object-cover"
      />
    </div>
    <div
      class="content landscape:py-slice-half landscape:w-r14/24 px-r2/24 landscape:pl-large landscape:flex landscape:flex-col landscape:justify-center"
    >
      <h1 v-if="superHeading" class="super-heading" v-html="superHeading" />
      <h1 v-else-if="title" class="heading-1" v-html="title" />
      <h2
        v-if="title && superHeading"
        class="heading-1 mb-medium"
        v-html="title"
      />
      <SanityEmbedContent v-if="textBody" :blocks="textBody" />
      <KataLinks v-if="links" :links="links" class="links mt-medium" />
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
