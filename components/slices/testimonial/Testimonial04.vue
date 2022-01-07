<template>
  <div class="slice testimonials-4">
    <div v-if="testimonials && testimonials.length > 1" class="flex fade-up">
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
        ref="testimonials-4-carousel"
        class="w-r8/12"
      >
        <Testimonial04Part
          v-for="item in testimonials"
          :key="item._key"
          class="pr-large testimonial-item"
          :item="item"
        />
      </VueSlickCarousel>

      <div class="w-r2/12 flex justify-center items-center">
        <button
          class="carousel-nav next focus:outline-none"
          title="Next Slide"
          @click="showNext"
        >
          <span></span>
        </button>
      </div>
    </div>
    <div v-else class="w-r8/12 mx-r2/12 single-testimonial">
      <Testimonial04Part
        v-for="item in testimonials"
        :key="item._key"
        class="pr-large testimonial-item"
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
