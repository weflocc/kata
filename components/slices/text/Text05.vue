<template>
  <div
    class="slice text-5 flex flex-col relative justify-start"
    :class="{
      'reversed md:flex-row-reverse': reversed,
      'not-reversed md:flex-row': !reversed,
    }"
  >
    <div
      class="w-r24/24 mx-auto md:w-r12/24 md:ml-r2/24 md:mr-large order-2 md:order-1 md:py-slice body"
    >
      <h2 v-if="title" v-kata-html="title" class="mb-large heading-2 fade-up" />
      <SanityEmbedContent v-if="textBody" :blocks="textBody" class="fade-up" />
    </div>
    <div
      class="md:w-r10/24 order-1 md:order-2 mb-large md:mb-0 md:relative image"
    >
      <KataImage
        :image="image"
        :ratio="ratio"
        :max-width="1500"
        sizes="md:90vw lg:50vw"
        class="md:h-full md:w-full md:absolute md:top-0 md:left-0 md:object-cover md:bottom-0 md:m-auto"
      />
    </div>
  </div>
</template>

<script>
import { title, textBody, image } from '../shared'
export default {
  mixins: [title, textBody, image],
  props: {
    reversed: {
      type: Boolean,
      default: false,
    },
    ratio: {
      type: Number,
      default: 510 / 714,
    },
  },
}
</script>
