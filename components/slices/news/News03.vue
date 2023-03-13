<template>
  <div v-if="list && list != null && list.length" class="news-3 slice">
    <h2
      v-if="title"
      v-kata-html="title"
      class="heading-2 mb-large text-center fade-up w-r24/24 mx-auto"
    />

    <div ref="listItems" class="relative">
      <VueSlickCarousel v-bind="settings" class="news-3-slider">
        <template #prevArrow="arrowOption">
          <button
            class="carousel-nav prev focus:outline-none mb-medium"
            title="Previous Slide"
          >
            <span></span>
          </button>
        </template>
        <div v-for="item in list" :key="item._id" class="px-small slide-item">
          <slot name="tease" :item="item" class="fade-up">
            <ArticlesTeaseWithImage
              :item-id="item._id"
              :link="getLink(item._id)"
              :title="item.title"
              :image="item.image"
            />
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

    <div v-if="links" class="text-center mt-large">
      <KataLinks :links="links" />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { title, list, links } from '../shared'

export default {
  components: { VueSlickCarousel },
  mixins: [title, list, links],
  props: {
    settings: {
      type: Object,
      default: () => ({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        centerMode: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2.5,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              autoplaySpeed: 3000,
            },
          },
        ],
      }),
    },
  },
}
</script>

<style lang="scss">
.news-3 {
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: white;
    outline: none;
    background: white;
  }
  .slick-track {
    display: flex;

    .slick-slide > div {
      height: 100%;
    }
  }
  .carousel-nav {
    position: absolute;
    z-index: 50;

    &.prev {
      @apply left-container-margin xl:left-2;
    }
    &.next {
      @apply right-container-margin xl:right-2;
    }
  }
}
</style>
