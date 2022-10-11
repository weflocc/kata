<template>
  <div class="single-layout">
    <div
      v-if="indexPath && backText && !noTopBack"
      class="back-btn mt-small mb-large mx-container-margin w-r24/24"
    >
      <nuxt-link :to="indexPath">{{ backText }}</nuxt-link>
    </div>
    <div class="simple-hero mb-large">
      <div
        v-if="c.title"
        class="md:w-r16/24 md:mx-r2/12 w-r24/24 mx-auto mb-large"
      >
        <h1 class="text-center" v-text="c.title" />
        <slot name="belowTitle"></slot>
      </div>
      <div
        class="hero-image sm:w-r24/24 sm:mx-auto px-container-margin sm:px-0 w-full"
      >
        <div class="image-wrapper overflow-hidden">
          <KataMedia
            v-if="c.media"
            :media="c.media"
            :ratio="2 / 1"
            :max-width="2000"
            :show-loader="true"
            :no-crop="noCrop"
          />
          <KataImage
            v-else-if="c.image && !noCrop"
            :image="c.image"
            :ratio="2 / 1"
            :max-width="2000"
            :show-loader="true"
          />
          <KataImage02
            v-else-if="c.image && noCrop"
            :image="c.image"
            :max-width="2000"
            :show-loader="true"
            class="max-w-full mx-auto"
          />
        </div>
      </div>
    </div>

    <div class="main-content mb-large md:w-r18/24 lg:w-r14/24 w-r24/24 mx-auto">
      <slot name="postInfo">
        <div
          v-if="c.date || c.location || c.startDate || c.author"
          class="sm:flex justify-between sm:flex-wrap mb-large article-info"
        >
          <p v-if="c.startDate" class="font-bold sm:mr-small">
            {{ c.startDate | formatDate }}
            <template v-if="c.endDate">- {{ c.endDate | formatDate }}</template>
          </p>
          <p v-if="c.date" class="font-bold sm:mr-small sm:mt-0">
            {{ c.date | formatDate }}
          </p>
          <p v-if="c.author" class="w-full sm:mt-0">
            By
            <strong>{{ c.author }}</strong>
          </p>
          <p v-if="c.location" class="font-bold sm:mt-0">
            Location: {{ c.location }}
          </p>
        </div>
      </slot>
    </div>

    <div class="single-layout-content">
      <!-- For basic blogs -->
      <SanityEmbedContent v-if="c.textBody" :blocks="c.textBody" />
      <!-- Complex pages should be page builder -->
      <ContentBlocks v-if="c.contentBlocks" :blocks="c.contentBlocks" />
    </div>
    <slot name="postContent"></slot>
    <div
      v-if="indexPath && backText && !noBottomBack"
      class="text-center px-container-margin my-slice-half"
    >
      <div class="back-btn">
        <nuxt-link :to="indexPath">{{ backText }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    c: {
      type: Object,
      required: true,
    },
    indexPath: {
      type: String,
      default: '',
    },
    backText: {
      type: String,
      default: 'Back',
    },
    noCrop: {
      type: Boolean,
      default: false,
    },
    noBottomBack: {
      type: Boolean,
      default: false,
    },
    noTopBack: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.single-layout-content {
  > .embed-content-wrap {
    > h2,
    > h3,
    > p,
    > ul,
    > ol,
    > .kata-block-links,
    > .media,
    > .kata-table,
    > .kata-accordions,
    > .testimonials-4-serializer,
    > .standout-text {
      @apply md:w-r18/24 lg:w-r14/24 w-r24/24 mx-auto;
    }
    > .feature-1-serializer,
    > .cta-7-serializer {
      @apply w-r24/24 mx-auto;
    }
  }
  .content-blocks .block:not(.textAndImage):not(.logos) {
    @apply md:w-r18/24 lg:w-r14/24 w-r24/24 mx-auto;
  }
}
</style>

<style lang="scss" scoped>
.back-btn a {
  padding-left: 20px;
  display: inline-block;
  position: relative;

  &:before {
    content: '';
    @apply inline-block absolute inset-y-0 left-0 my-auto;
    border-color: currentColor;
    border-style: solid;
    border-width: 2px 2px 0 0;
    height: 10px;
    width: 10px;
    transform: rotate(-135deg);
    vertical-align: top;
    transition: 0.5s ease;
  }

  &:hover {
    &:before {
      left: -5px;
    }
  }
}
</style>
