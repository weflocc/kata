<template>
  <div class="slice testimonials-2">
    <div v-if="testimonials && testimonials.length > 1" class="flex">
      <div class="w-r2/12 flex justify-center items-center">
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
        ref="testimonials-2-carousel"
        :class="{
          'mx-r1/12 w-r10/12': testimonials.length == 1,
          'w-r8/12': testimonials.length > 1,
        }"
      >
        <div v-for="item in testimonials" :key="item._key">
          <Testimonial02Part :item="item" />
        </div>
      </VueSlickCarousel>
      <div
        v-if="testimonials.length > 1"
        class="w-r2/12 flex justify-center items-center"
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
    <div v-else class="mx-r1/12 w-r10/12">
      <Testimonial02Part
        v-for="item in testimonials"
        :key="item._key"
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

export default {
  components: { VueSlickCarousel },
  props: {
    testimonials: {
      type: Array,
      required: true,
    },
  },
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
      this.$refs['testimonials-2-carousel'].next()
    },
    showPrev() {
      this.$refs['testimonials-2-carousel'].prev()
    },
  },
}
</script>

<style lang="scss">
.testimonials-2 {
  .slick-slide,
  .slick-slide * {
    outline: none !important;
  }
}
</style>
