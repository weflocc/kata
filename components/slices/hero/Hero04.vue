<template>
  <div class="slice hero-4">
    <div
      class="w-r24/24 mx-auto md:w-r12/24 flex flex-col justify-center text-center z-1 mb-large"
    >
      <h1 class="heading-1" v-html="title" />
    </div>

    <div class="w-r24/24 mx-auto text-center z-1">
      <KataMedia
        :media="media"
        :no-crop="noCrop"
        :ratio="ratio"
        :max-width="3000"
        class="w-full"
        :show-loader="showLoader"
        :lazy="false"
      />
    </div>
  </div>
</template>

<script>
import { title, media, noCrop, showLoader } from '../shared'

export default {
  mixins: [title, media, noCrop, showLoader],
  props: {
    ratio: {
      type: Number,
      default: 3 / 1,
    },
  },
}
</script>
