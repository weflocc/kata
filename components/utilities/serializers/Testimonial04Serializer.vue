<template>
  <div class="slice testimonials-4-serializer py-slice-half">
    <div
      v-if="
        testimonials && testimonials != undefined && testimonials.length > 1
      "
      class="fade-up"
    >
      <div
        class="absolute left-0 top-0 bottom-0 my-auto flex justify-center items-center btn-left"
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
        ref="testimonials-4-serializer-carousel"
        class="w-full"
      >
        <Testimonial04Part
          v-for="item in testimonials"
          :key="item._key"
          class="pr-large testimonial-item"
          :item="item"
        />
      </VueSlickCarousel>

      <div
        class="absolute right-0 top-0 bottom-0 my-auto flex justify-center items-center btn-right"
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
    <div v-else class="w-full">
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
    testimonial04: {
      type: Object,
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
  computed: {
    testimonials() {
      return this.testimonial04?.testimonials
    },
  },
  methods: {
    showNext() {
      this.$refs['testimonials-4-serializer-carousel'].next()
    },
    showPrev() {
      this.$refs['testimonials-4-serializer-carousel'].prev()
    },
  },
}
</script>

<style lang="scss">
.testimonials-4-serializer {
  .slick-slide,
  .slick-slide * {
    outline: none !important;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
  .btn-left {
    left: calc((var(--r1_12) / 2) * -1);
  }
  .btn-right {
    right: calc((var(--r1_12) / 2) * -1);
  }
}
</style>
