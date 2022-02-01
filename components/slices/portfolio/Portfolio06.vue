<template>
  <div class="slice portfolio-6 md:flex md:mx-r1/12 md:w-r10/12">
    <div class="slider-nav">
      <button
        class="carousel-nav prev focus:outline-none mb-medium"
        title="Previous Slide"
        @click="showPrev"
      >
        <span></span>
      </button>
      <button
        class="carousel-nav next focus:outline-none"
        title="Next Slide"
        @click="showNext"
      >
        <span></span>
      </button>
    </div>
    <div v-if="list && list != null" class="md:w-r6/12 md:pr-large">
      <VueSlickCarousel
        v-bind="settings"
        ref="portfolio-6-carousel"
        class="w-full"
      >
        <div v-for="item in list" :key="item._key">
          <KataImage
            v-if="item"
            :image="item"
            :ratio="635 / 500"
            :max-width="1000"
            data-not-lazy
          />
        </div>
      </VueSlickCarousel>
    </div>
    <div class="md:w-r4/12">
      <h2 v-if="title" v-kata-html="title" class="mb-medium heading-3" />
      <SanityEmbedContent
        v-if="textBody"
        :blocks="textBody"
        class="mb-medium"
      />
      <KataLinks v-if="links" :links="links" />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import { title, textBody, list, links } from '../shared'

export default {
  components: { VueSlickCarousel },
  mixins: [title, textBody, list, links],
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1.1,
        vertical: true,
        infinite: true,
        centerMode: true,
        lazyload: 'ondemand',
        responsive: [
          {
            breakpoint: 700,
            settings: {
              vertical: false,
              centerMode: true,
              slidesToShow: 1,
              centerPadding: '10px',
            },
          },
        ],
      },
    }
  },
  methods: {
    showNext() {
      this.$refs['portfolio-6-carousel'].next()
    },
    showPrev() {
      this.$refs['portfolio-6-carousel'].prev()
    },
  },
}
</script>

<style lang="scss">
.portfolio-6 {
  @include md-down {
    .slider {
      position: relative;

      .slick-slide {
        padding: 0 5px;
      }
    }
  }
}
</style>
