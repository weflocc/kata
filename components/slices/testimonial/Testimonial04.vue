<template>
  <div class="slice testimonials-4 w-full md:w-r24/24 mx-auto">
    <slot name="decoration-top"></slot>
    <div
      v-if="list && list != undefined && list.length > 1"
      class="flex fade-up"
    >
      <div
        class="w-r4/24 flex justify-center items-center nav-wrap absolute left-0 top-0 bottom-0 my-auto md:relative"
      >
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
        ref="testimonials-4-carousel"
        class="flex-grow w-full md:w-r16/24 mx-auto"
      >
        <!-- div required here for vue slick to detect group -->
        <div
          v-for="item in list"
          :key="item._key"
          class="item px-r4/24 md:px-0"
        >
          <Testimonial04Part class="testimonial-item" :item="item" />
        </div>
      </VueSlickCarousel>

      <div
        class="w-r4/24 flex justify-center items-center nav-wrap absolute right-0 top-0 bottom-0 my-auto md:relative"
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
    <div
      v-else-if="list && list != undefined"
      class="w-r24/24 md:w-r16/24 mx-auto single-testimonial"
    >
      <Testimonial04Part
        v-for="item in list"
        :key="item._key"
        class="testimonial-item"
        :item="item"
      />
    </div>
    <slot name="decoration-bottom"></slot>
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
    settings: {
      type: Object,
      default: () => ({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        infinite: true,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 750,
      }),
    },
  },
  methods: {
    showNext() {
      this.$refs['testimonials-4-carousel'].next()
    },
    showPrev() {
      this.$refs['testimonials-4-carousel'].prev()
    },
  },
}
</script>

<style lang="scss">
.testimonials-4 {
  .slick-slide,
  .slick-slide * {
    outline: none !important;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
}
</style>
