<template>
  <div class="slice text-4 md:flex w-full md:items-center">
    <div class="w-full md:w-1/3 mb-large sm:mb-0 image">
      <KataImage
        :image="image"
        :ratio="ratio"
        :max-width="900"
        class="h-full w-full object-cover"
      />
    </div>
    <div
      class="mx-r1/12 w-r10/12 md:w-2/3 md:ml-large py-medium md:mr-0 md:pr-r1/12 body"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { superHeading, title, image } from '../shared'
export default {
  mixins: [superHeading, title, image],
  props: {
    list: {
      type: Array,
      default: null,
    },
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
