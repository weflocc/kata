<template>
  <div class="slice team-3">
    <div class="heading mb-large w-r10/12 mx-auto text-center">
      <h2 v-if="title" v-kata-html="title" class="fade-up" />
      <p v-if="text" v-kata-html="text" class="mt-medium fade-up" />
    </div>
    <div v-if="list && list != null && list.length > 1" class="flex">
      <VueSlickCarousel
        v-bind="settings"
        ref="team-3-carousel"
        :class="{
          'mx-auto w-r10/12': list.length == 1,
          'mx-auto w-r9/12': list.length > 1,
        }"
      >
        <div v-for="item in list" :key="item._key" class="pr-large">
          <ProfileTemplate :item="item" />
        </div>
      </VueSlickCarousel>
    </div>
    <div
      v-if="list && (list != null) & (list.length > 1)"
      class="flex justify-center mt-small"
    >
      <button
        class="carousel-nav prev focus:outline-none mx-1"
        title="Previous Slide"
        @click="showPrev"
      >
        <span></span>
      </button>
      <button
        class="carousel-nav next focus:outline-none mx-1"
        title="Next Slide"
        @click="showNext"
      >
        <span></span>
      </button>
    </div>
    <div v-else-if="list && list != null" class="mx-auto w-r10/12">
      <div v-for="item in list" :key="item._key" class="pr-large">
        <ProfileTemplate :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { title, text, list } from '../shared'

export default {
  components: { VueSlickCarousel },
  mixins: [title, text, list],
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1,
        infinite: false,
        centerMode: false,
        // fade: true,
      },
    }
  },
  methods: {
    showNext() {
      this.$refs['team-3-carousel'].next()
    },
    showPrev() {
      this.$refs['team-3-carousel'].prev()
    },
  },
}
</script>

<style lang="scss">
.team-3 {
  .slick-slide,
  .slick-slide * {
    outline: none !important;
  }
  .slick-list {
    overflow: visible !important;
  }
  // sets carousel items to max height
  .slick-track {
    display: flex !important;
  }
  .slick-slide {
    height: auto !important;
    img,
    section {
      height: 100%;
    }
  }
}
</style>
