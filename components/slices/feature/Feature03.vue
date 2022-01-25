<template>
  <div class="slice feature-3 stack-children">
    <KataImage
      :image="image"
      :ratio="ratio"
      :max-width="3000"
      class="h-screen w-full object-cover"
    />
    <div
      class="w-r10/12 md:w-r8/12 lg:w-r6/12 h-screen flex flex-col justify-end items-start z-1 p-r1/12 md:pr-0 content"
    >
      <h2 v-kata-html="title" class="heading-2 text-white mb-medium fade-up" />
      <p v-if="text" v-kata-html="text" class="text-white mb-medium fade-up" />
      <KataLinks v-if="links" :links="links" class="fade-up" />
    </div>
  </div>
</template>

<script>
import { title, text, links, image } from '../shared'

export default {
  mixins: [title, text, links, image],
  data() {
    return {
      ratio: 16 / 9,
    }
  },
  mounted() {
    if (
      process.client &&
      window.matchMedia('(orientation: portrait)').matches
    ) {
      this.ratio = 3 / 4
    }
  },
}
</script>

<style lang="scss" scoped>
.feature-3 {
  position: relative;
  background: black;

  img.kata-image.lazyLoad.isLoaded {
    opacity: 0.75;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 20%;
    left: 1px;
    top: 0px;
    background: linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0) 100%);
  }
}
</style>
