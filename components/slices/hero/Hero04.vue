<template>
  <div class="slice hero-4">
    <div
      class="w-r24/24 mx-auto md:w-r12/24 flex flex-col justify-center text-center z-1"
    >
      <h1 class="heading-1 mb-slice-half" v-html="title" />
    </div>

    <div class="w-r24/24 mx-auto text-center z-1 mb-slice">
      <KataMedia
        :media="media"
        :no-crop="noCrop"
        :ratio="3 / 1"
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
}
</script>
