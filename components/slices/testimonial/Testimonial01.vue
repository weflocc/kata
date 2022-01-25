<template>
  <div class="slice testimonials-1">
    <div class="mx-r1/12 w-r10/12 text-center mb-medium">
      <h2 v-if="title" v-kata-html="title" class="label-1 fade-up" />
    </div>
    <div v-if="testimonials.length > 1" class="flex">
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
        ref="testimonials-1-carousel"
        :class="{
          'mx-r1/12 w-r10/12': testimonials.length == 1,
          'w-r8/12': testimonials.length > 1,
        }"
        class="fade-up"
      >
        <div v-for="item in testimonials" :key="item._key">
          <Testimonial01Part class="md:px-r1/12 text-center" :item="item" />
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
      <Testimonial01Part
        v-for="item in testimonials"
        :key="item._key"
        class="md:px-r1/12 text-center"
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
    title: {
      type: String,
      default: '',
    },
    testimonials: {
      type: Array,
      default: null,
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
