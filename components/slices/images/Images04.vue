<template>
  <div class="slice images-4">
    <VueSlickCarousel v-bind="settings" ref="images-4-slider" class="w-full">
      <template #prevArrow="arrowOption">
        <button
          class="carousel-nav prev focus:outline-none mb-medium"
          title="Previous Slide"
        >
          <span></span>
        </button>
      </template>
      <div
        v-for="(item, index) in list"
        :key="item._key"
        class="image-thumbnail w-full relative"
      >
        <p v-if="item.title" class="p-large label-1 absolute top-0 left-0">
          <span v-if="showCount">{{ index + 1 }} / {{ list.length }}</span>
          <span v-kata-html="item.title" />
        </p>
        <KataImage
          :image="item.image"
          :ratio="825 / 500"
          :max-width="1500"
          sizes="95vw"
          data-not-lazy
          class="mx-auto object-contain max-h-[90vh]"
        />
      </div>
      <template #nextArrow="arrowOption">
        <button class="carousel-nav next focus:outline-none" title="Next Slide">
          <span></span>
        </button>
      </template>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { list } from '../shared'
export default {
  components: { VueSlickCarousel },
  mixins: [list],
  props: {
    showCount: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    show: false,
    settings: {
      arrows: true,
      dots: false,
      slidesToShow: 1,
      infinite: true,
      lazyLoad: 'ondemand',
      autoplay: false,
      speed: 1000,
    },
  }),
}
</script>

<style lang="scss" scoped>
.images-4 {
}
</style>
