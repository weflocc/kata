<template>
  <div class="slice feature-1 w-r10/12 mx-r1/12 flex flex-col sm:flex-row sm:gap-x-large">
    <div class="sm:w-1/2 order-2 sm:order-1 py-medium">
      <h2 v-if="title" class="mb-large fade-up" v-html="title" />
      <p v-if="text" class="mb-large fade-up" v-html="text" />
      <KataLinks :links="links" class="fade-up" />
    </div>
    <div class="sm:w-1/2 order-1 sm:order-2 mb-large sm:mb-0">
      <KataImage
        v-if="image"
        :image="image"
        :ratio="685 / 514"
        :max-width="1500"
        class="h-full w-full object-cover"
        sizes="(max-width:699px) 90vw, (max-width:1439px) 50vw, 50vw"
      />
    </div>
  </div>
</template>

<script>
import { title, text, links, image } from '../shared'

export default {
  mixins: [title, text, links, image],
}
</script>
