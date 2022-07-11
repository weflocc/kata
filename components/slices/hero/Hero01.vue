<template>
  <div
    class="hero-1 slice flex-wrap landscape:flex-nowrap landscape:justify-between flex min-h-screen"
    :class="{
      'landscape:items-center': (media && media.mediaType == 'embed') || noCrop,
    }"
  >
    <div
      class="landscape:py-slice-half landscape:w-r14/24 px-container-margin landscape:pr-r2/24 landscape:flex landscape:flex-col landscape:justify-center order-2 landscape:order-1 content mb-large landscape:mb-0"
    >
      <h1
        v-if="superHeading"
        class="super-heading mb-medium"
        v-html="superHeading"
      />
      <h1 v-else-if="title" class="heading-1 mb-medium" v-html="title" />
      <h2
        v-if="title && superHeading"
        class="heading-1 mb-medium"
        v-html="title"
      />
      <SanityEmbedContent v-if="textBody" :blocks="textBody" />
      <KataLinks v-if="links" :links="links" class="mt-medium" />
    </div>

    <div
      class="media-wrap mb-large w-full landscape:mb-0 landscape:w-r12/24+container-margin relative order-1 landscape:order-2"
    >
      <KataMedia
        v-if="media"
        :media="media"
        :ratio="1"
        :max-width="2000"
        class="h-full w-full"
        :no-crop="noCrop"
        :show-loader="showLoader"
      />
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
.hero-1 {
  .media-dots {
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

  .media-wrap {
    img,
    video {
      @apply object-cover h-full w-full;
    }
  }
}
@include md-down {
  .hero-1 .media-wrap {
    height: 35vh;
  }
}
</style>
