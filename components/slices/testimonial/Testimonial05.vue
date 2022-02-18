<template>
  <div
    class="slice testimonials-5 w-r24/24 mx-auto lg:w-r16/24 lg:mx-r2/12 text-center"
  >
    <p v-if="quote" v-kata-html="quote" class="heading-3 mb-large fade-up" />
    <p v-if="cite" v-kata-html="cite" class="label-1 fade-up" />
    <KataLinks v-if="links" :links="links" class="mt-large fade-up" />
  </div>
</template>

<script>
import { links } from '../shared'

export default {
  mixins: [links],
  props: {
    quote: {
      type: String,
      default: '',
    },
    cite: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
