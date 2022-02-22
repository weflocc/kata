<template>
  <div>
    <div
      v-if="indexPath && backText"
      class="back-btn mt-small mb-large mx-container-margin"
    >
      <nuxt-link :to="indexPath">{{ backText }}</nuxt-link>
    </div>
    <div class="simple-hero mb-large">
      <div class="md:w-r16/24 md:mx-r2/12 w-r24/24 mx-auto mb-large">
        <h1 v-kata-html="c.title" class="text-center" />
      </div>
      <div class="sm:w-r24/24 sm:mx-auto px-container-margin sm:px-0 w-full">
        <KataMedia
          v-if="c.media"
          :media="c.media"
          :ratio="2 / 1"
          :max-width="2000"
          :loader="true"
          :no-crop="noCrop"
        />
        <KataImage
          v-else-if="c.image && !noCrop"
          :image="c.image"
          :ratio="2 / 1"
          :max-width="2000"
          :loader="true"
        />
        <KataImage02
          v-else-if="c.image && noCrop"
          :image="c.image"
          :max-width="2000"
          class="max-w-full mx-auto"
        />
      </div>
    </div>

    <div class="main-content mb-slice md:w-r12/24 md:mx-r6/24 w-r24/24 mx-auto">
      <div
        v-if="c.date || c.location || c.startDate"
        class="sm:flex justify-between sm:flex-wrap mb-large"
      >
        <p v-if="c.startDate" class="font-bold sm:mr-small">
          {{ c.startDate | formatDate }}
          <template v-if="c.endDate">- {{ c.endDate | formatDate }}</template>
        </p>
        <p v-if="c.date" class="font-bold sm:mr-small">
          {{ c.date | formatDate }}
        </p>
        <p v-if="c.location" class="font-bold">Location: {{ c.location }}</p>
      </div>
      <SanityEmbedContent v-if="c.textBody" :blocks="c.textBody" />
      <!-- allowing for older versions -->
      <SanityEmbedContent v-else-if="c.body" :blocks="c.body" />
    </div>

    <div
      v-if="indexPath && backText"
      class="text-center px-container-margin mb-slice-half"
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
  },
}
</script>

<style lang="scss" scoped>
.back-btn a {
  padding-left: 20px;
  display: inline-block;
  position: relative;

  &:before {
    content: '';
    border-color: currentColor;
    border-style: solid;
    border-width: 2px 2px 0 0;
    display: inline-block;
    height: 10px;
    width: 10px;
    transform: rotate(-135deg);
    vertical-align: top;
    position: absolute;
    top: 0;
    bottom: 1px;
    margin: auto;
    left: 0;
    transition: 0.5s ease;
  }

  &:hover {
    &:before {
      left: -5px;
    }
  }
}
</style>
