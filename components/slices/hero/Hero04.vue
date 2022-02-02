<template>
  <div class="slice hero-4">
    <div
      class="w-r10/12 mx-r1/12 md:w-r6/12 md:mx-r3/12 flex flex-col justify-center text-center z-1"
    >
      <h1 v-kata-html="title" class="heading-1 mb-slice-half" />
    </div>

    <div class="w-r10/12 mx-r1/12 text-center z-1 mb-slice">
      <KataMedia
        :media="media"
        :no-crop="noCrop"
        :ratio="3 / 1"
        :max-width="3000"
        class="w-full"
      />
    </div>
  </div>
</template>

<script>
import { title, media, noCrop } from '../shared'

export default {
  mixins: [title, media, noCrop],
}
</script>
