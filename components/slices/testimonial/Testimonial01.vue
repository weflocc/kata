<template>
  <div class="slice testimonials-1">
    <div class="mx-auto w-r24/24 text-center mb-medium">
      <h2 v-if="title" v-kata-html="title" class="label-1 fade-up" />
    </div>
    <div
      v-if="list && list != undefined && list != null && list.length > 1"
      class="flex"
    >
      <div class="w-r4/24 flex justify-center items-center">
        <button
          class="carousel-nav prev focus:outline-none"
          title="Previous Slide"
          @click="showPrev"
        >
          <span></span>
        </button>
      </div>
      <VueSlickCarousel
        v-bind="settings"
        ref="testimonials-1-carousel"
        :class="{
          'w-r24/24': list.length == 1,
          'w-r16/24': list.length > 1,
        }"
        class="fade-up mx-auto"
      >
        <div v-for="item in list" :key="item._key">
          <Testimonial01Part class="text-center" :item="item" />
        </div>
      </VueSlickCarousel>
      <div
        v-if="list.length > 1"
        class="w-r4/24 flex justify-center items-center"
      >
        <button
          class="carousel-nav next focus:outline-none"
          title="Next Slide"
          @click="showNext"
        >
          <span></span>
        </button>
      </div>
    </div>
    <div v-else-if="list && list != undefined" class="mx-auto w-r24/24">
      <Testimonial01Part
        v-for="item in list"
        :key="item._key"
        class="text-center"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import { list, title } from '../shared'
export default {
  components: { VueSlickCarousel },
  mixins: [list, title],
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1,
        infinite: true,
        centerMode: false,
        // fade: true,
      },
    }
  },
  methods: {
    showNext() {
      this.$refs['testimonials-1-carousel'].next()
    },
    showPrev() {
      this.$refs['testimonials-1-carousel'].prev()
    },
  },
}
</script>

<style lang="scss">
.testimonials-1 {
  .slick-slide,
  .slick-slide * {
    outline: none !important;
  }
}
</style>
