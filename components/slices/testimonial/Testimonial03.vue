<template>
  <div class="slice testimonial-3 w-r10/12 mx-r1/12">
    <h2
      v-if="title"
      v-kata-html="title"
      class="heading-2 fade-up mb-medium text-center"
    />
    <div v-if="testimonials" class="flex justify-center items-start flex-wrap">
      <div
        v-for="item in testimonials"
        :key="item._key"
        class="w-full md:w-1/2 md:px-6 md:py-3 pb-large"
      >
        <p v-if="item.quote" v-kata-html="item.quote" />
        <p v-if="item.name" v-kata-html="item.name" class="label-1 mb-0" />
        <p v-if="item.job" v-kata-html="item.job" class="para-4 mt-2" />
      </div>
    </div>
  </div>
</template>

<script>
import { links, title, text } from '../shared'
export default {
  mixins: [links, title, text],
  props: {
    testimonials: {
      type: Array,
      required: true,
    },
  },
}
</script>
