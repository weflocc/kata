<template>
  <transition key="gallery-lightbox" name="fade">
    <div
      v-show="show"
      class="gallery-lightbox fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-full"
    >
      <button
        title="Close"
        class="lightbox-underlay bg-secondary opacity-95 fixed top-0 left-0 w-full h-full cursor-default"
        @click="hideLightbox"
      ></button>
      <div
        class="lightbox-inner text-white text-center w-full h-full flex items-center justify-center"
      >
        <slot>
          <VueSlickCarousel
            v-bind="settings"
            ref="image-gallery-slider"
            class="w-full"
          >
            <template #prevArrow="arrowOption">
              <button
                class="carousel-nav prev focus:outline-none mb-medium absolute inset-y-0 left-0 my-auto"
                title="Previous Slide"
              >
                <span></span>
              </button>
            </template>
            <div
              v-for="(item, index) in list"
              :key="item._key"
              class="image-thumbnail w-full"
            >
              <KataImage
                v-if="!noCrop && item.image"
                :image="item.image"
                :ratio="825 / 500"
                :max-width="1500"
                sizes="xl:95vw"
                :lazy="false"
                class="mx-auto object-contain max-h-[90vh]"
              />
              <KataImage02
                v-else-if="noCrop && item.image"
                :image="item.image"
                :ratio="825 / 500"
                :max-width="1500"
                sizes="xl:95vw"
                :lazy="false"
                class="mx-auto object-contain max-h-[90vh]"
              />
              <p
                v-if="item.title"
                v-kata-html="item.title"
                class="p-small label-1"
              />
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
        </slot>
        <button title="Close" class="close-btn" @click="hideLightbox"></button>
      </div>
    </div>
  </transition>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { noCrop } from '../../shared'
export default {
  components: { VueSlickCarousel },
  mixins: [noCrop],
  props: {
    list: {
      type: Array,
      default: null,
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
      autoplay: false,
      speed: 1000,
    },
  }),
  methods: {
    hideLightbox() {
      this.show = false
    },
    showLightbox(index) {
      this.show = true

      this.$nextTick(() => {
        if (this.$refs['image-gallery-slider']) {
          this.$refs['image-gallery-slider'].goTo(index, true)
        }
      })
    },
  },
}
</script>

<style lang="scss">
.gallery-lightbox {
  button.carousel-nav {
    @apply absolute inset-y-0 my-auto;
    z-index: 5;

    &.prev {
      left: 0;
    }
    &.next {
      right: 0;
    }
  }
  .slick-track {
    @apply flex items-center;
  }
}
</style>

<style lang="scss" scoped>
.gallery-lightbox {
  z-index: 200;

  .lightbox-inner {
    max-height: 95%;
    max-width: 95%;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
.opacity-95 {
  opacity: 0.95;
}
.close-btn {
  position: absolute;
  right: calc(2.5% + 5px);
  top: calc(2.5% + 5px);
  width: 30px;
  height: 30px;
  outline: none !important;

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 30px;
    width: 2px;
    top: 0;
    background-color: white;
    transition: 0.5s ease;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }

  &:hover {
    &:before,
    &:after {
      background-color: $primary;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
