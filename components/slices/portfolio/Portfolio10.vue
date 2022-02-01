<template>
  <div class="portfolio-10 slice">
    <div v-if="title" class="w-r10/12 mx-r1/12 text-center title">
      <h2 v-kata-html="title" class="heading-2 mb-large fade-up" />
    </div>
    <div
      v-if="list && list != null && list.length > 0"
      class="slider relative fade-up"
    >
      <VueSlickCarousel
        v-bind="settings"
        ref="portfolio-10-slider"
        class="portfolio-10-slider"
      >
        <template #prevArrow="arrowOption">
          <button
            class="carousel-nav prev focus:outline-none mb-medium"
            title="Previous Slide"
          >
            <span></span>
          </button>
        </template>

        <div v-for="(item, i) in list" :key="item._id" class="px-small">
          <slot name="tease" :item="item" :index="i + 1">
            <listTeaseParagraphOverlay v-bind="item" :index="i + 1" />
          </slot>
        </div>

        <template #nextArrow="arrowOption">
          <button
            class="carousel-nav next focus:outline-none"
            title="Next Slide"
          >
            <span></span>
          </button>
        </template>
      </VueSlickCarousel>
    </div>
    <p v-else>No results found.</p>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { title, list } from '../shared'

export default {
  components: { VueSlickCarousel },
  mixins: [title, list],
  data() {
    return {
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 5.25,
        infinite: false,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3.5,
            },
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2.5,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1.2,
              autoplaySpeed: 2000,
            },
          },
        ],
      },
      afterChange: function (e) {
        console.log('changed;', e)
      },
    }
  },
  methods: {
    showNext() {
      this.$refs['portfolio-10-slider'].next()
    },
    showPrev() {
      this.$refs['portfolio-10-slider'].prev()
    },
  },
}
</script>

<style lang="scss">
.portfolio-10 {
  position: relative;

  .portfolio-10-slider {
    padding-left: calc(var(--r1_12) - var(--spacing-small));
  }
  .carousel-nav {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 50;

    &:not(.slick-disabled):hover {
      color: white;
    }

    &.prev {
      left: 30px;
    }
    &.next {
      right: 11%;

      @media (min-width: 1100px) {
        right: 3%;
      }
    }
  }

  .slick-disabled {
    opacity: 0;
  }

  @include sm-down {
    .carousel-nav.prev {
      left: 15px;
    }
    .carousel-nav.next {
      right: 15px;
    }
  }
}
</style>
