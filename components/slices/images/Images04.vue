<template>
  <div class="slice images-4 w-full xl:w-r24/24 xl:mx-auto relative">
    <VueSlickCarousel
      v-bind="settings"
      ref="images-4-slider"
      class="w-full relative"
    >
      <div
        v-for="(item, index) in list"
        :key="item._key"
        class="image-thumbnail w-full relative"
      >
        <div class="overlay p-small md:p-large absolute top-0 left-0 right-0">
          <p v-if="item.title || showCount" class="label-1 text-white">
            <span v-if="showCount">{{ index + 1 }} / {{ list.length }}</span>
            <span v-kata-html="item.title" />
          </p>
        </div>
        <KataImage
          :image="item.image"
          :ratio="825 / 500"
          :max-width="1500"
          sizes="lg:100vw xl:90vw"
          :lazy="false"
          class="mx-auto object-cover max-h-[90vh] w-full"
        />
      </div>
      <template #prevArrow="arrowOption">
        <button
          class="carousel-nav prev focus:outline-none mb-medium"
          title="Previous Slide"
        >
          <span></span>
        </button>
      </template>
      <template #nextArrow="arrowOption">
        <button class="carousel-nav next focus:outline-none" title="Next Slide">
          <span></span>
        </button>
      </template>
    </VueSlickCarousel>
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
    showCount: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    show: false,
    settings: {
      arrows: true,
      dots: false,
      slidesToShow: 1,
      infinite: true,
      lazyLoad: 'ondemand',
      speed: 1500,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
    },
  }),
}
</script>

<style lang="scss">
.images-4 {
  color: white;
  .overlay:before {
    content: '';
    background: linear-gradient(180deg, black 0%, transparent 100%);
    @apply absolute top-0 inset-x-0 w-full z-1;
    height: 150%;
  }

  p {
    position: relative;
    z-index: 2;
  }

  button.carousel-nav {
    @apply absolute bottom-small top-auto right-small md:bottom-auto md:top-large my-auto md:right-large;
    left: unset;
    z-index: 2;

    &.prev {
      right: calc(var(--spacing-large) + 60px);

      @include md-down {
        right: calc(var(--spacing-small) + 40px);
      }
    }
  }
}
</style>
