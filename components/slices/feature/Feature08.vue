<template>
  <div class="slice feature-8" :class="{ 'w-r10/12 mx-r1/12': isContained }">
    <div
      class="sm:flex mb-large"
      :class="{ 'w-r10/12 mx-r1/12': !isContained }"
    >
      <div class="sm:w-r6/12 mr-large">
        <h2 v-kata-html="title" class="heading-2 fade-up" />
      </div>
      <div class="sm:w-r4/12">
        <SanityEmbedContent
          v-if="textBody"
          :blocks="textBody"
          class="fade-up"
        />
      </div>
    </div>
    <KataImage
      v-if="ratio && image"
      :ratio="ratio"
      :image="image"
      :max-width="3000"
      class="w-full h-auto"
    />
    <KataImage02
      v-else-if="image"
      :image="image"
      :max-width="3000"
      class="h-auto w-full"
    />
  </div>
</template>

<script>
import { title, textBody, image } from '../shared'

export default {
  mixins: [title, textBody, image],
  props: {
    isContained: {
      type: Boolean,
      default: false,
    },
    ratio: {
      type: Number,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.feature-8 {
}
</style>
