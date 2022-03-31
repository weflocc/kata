<template>
  <div
    class="slice text-4 md:flex items-stretch md:mr-container-margin"
    :class="{ 'md:items-center': noCrop }"
  >
    <div class="w-full md:w-r8/24 md:min-w-r8/24 mb-large sm:mb-0 image">
      <KataImage
        :image="image"
        :ratio="ratio"
        :max-width="900"
        :no-crop="noCrop"
        class="h-full w-full object-cover"
      />
    </div>
    <div
      class="mx-auto w-r24/24 md:w-r16/24 md:ml-r2/24 xl:w-r18/24 py-medium md:mr-0 body"
    >
      <div v-if="superHeading" class="heading-wrap">
        <template v-if="isH1">
          <h1 v-kata-html="superHeading" class="mb-medium label-1 fade-up" />
          <h2
            v-if="title"
            v-kata-html="title"
            class="mb-large heading-3 fade-up"
          />
        </template>
        <template v-else>
          <h2 v-kata-html="superHeading" class="mb-medium label-1 fade-up" />
          <h3
            v-if="title"
            v-kata-html="title"
            class="mb-large heading-3 fade-up"
          />
        </template>
      </div>
      <h1
        v-else-if="title && isH1"
        v-kata-html="title"
        class="mb-large heading-3 fade-up"
      />
      <h2
        v-else-if="title && !isH1"
        v-kata-html="title"
        class="mb-large heading-3 fade-up"
      />

      <div class="sm:flex sm:flex-wrap sm:-mx-small sm:-mb-medium list">
        <div
          v-for="item in list"
          :key="item._key"
          class="sm:w-1/2 sm:px-small pb-medium fade-up item"
        >
          <p v-if="item.title" v-kata-html="item.title" class="label-1" />
          <p v-if="item.text" v-kata-html="item.text" class="para-2" />
          <SanityContent
            v-if="item.textBody"
            :blocks="item.textBody"
            class="para-2 mt-small"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { superHeading, title, image, list, noCrop } from '../shared'
export default {
  mixins: [superHeading, title, image, list, noCrop],
  props: {
    isH1: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ratio() {
      if (process.client && window.matchMedia('(max-width:699px)').matches) {
        return 16 / 9
      }
      return 510 / 716
    },
  },
}
</script>
