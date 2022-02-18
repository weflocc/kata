<template>
  <div class="slice feature-8" :class="{ 'w-r24/24 mx-auto': isContained }">
    <div
      class="sm:flex mb-large feature-8-inner"
      :class="{ 'w-r24/24 mx-auto': !isContained }"
    >
      <div :class="{ 'sm:w-r12/24 mr-large': title && textBody }">
        <h2 v-kata-html="title" class="heading-2 fade-up" />
      </div>
      <div v-if="textBody" :class="{ 'sm:w-r8/24': title && textBody }">
        <SanityEmbedContent :blocks="textBody" class="fade-up" />
      </div>
    </div>
    <KataMedia
      v-if="media"
      :media="media"
      :ratio="ratio"
      :no-crop="ratio ? false : true"
      :max-width="3000"
      class="w-full h-auto"
    />
  </div>
</template>

<script>
import { title, textBody, media } from '../shared'

export default {
  mixins: [title, textBody, media],
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
