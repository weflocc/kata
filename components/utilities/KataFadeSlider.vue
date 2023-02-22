<template>
  <div class="fade-slider relative">
    <VueSlickCarousel
      v-bind="settings"
      class="w-full"
      :class="{ 'no-crop-img': noCrop }"
    >
      <div v-for="item in images" :key="item._id" class="slide-image">
        <KataImage
          v-if="item && !noCrop"
          :lazy="false"
          :image="item"
          :ratio="ratio"
          :mobile-ratio="mobileRatio"
          :max-width="maxWidth"
          class="h-full max-h-screen object-cover object-center w-full"
          :sizes="sizes"
        />
        <KataImage02
          v-else-if="item && noCrop"
          :lazy="false"
          :image="item"
          :max-width="maxWidth"
          class="max-h-screen object-contain object-center w-full"
          :sizes="sizes"
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  components: { VueSlickCarousel },
  props: {
    images: {
      type: Array,
      default: null,
    },
    ratio: {
      type: Number,
      default: 4 / 3,
    },
    mobileRatio: {
      type: Number,
      default: null,
    },
    noCrop: {
      type: Boolean,
      default: false,
    },
    maxWidth: {
      type: Number,
      default: 2000,
    },
    sizes: {
      type: String,
      default: 'xl:100vw',
    },
    settings: {
      type: Object,
      default: () => ({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
      }),
    },
  },
}
</script>

<style lang="scss">
.fade-slider {
  .slick-track {
    @apply flex items-center;
  }
  .slick-slider .slick-dots {
    li {
      margin: 0;
    }

    button {
      padding: 0;
      width: 10px;
      height: 10px;

      &:before {
        font-size: 10px;
        transition: 0.5s ease;
      }

      &:hover {
        &:before {
          @apply text-primary;
        }
      }
    }

    li.slick-active button:before {
      @apply opacity-100;
    }
  }
  .slick-slider:not(.no-crop-img) .slick-dots {
    bottom: 10px;

    button {
      &:before {
        @apply text-white;
      }

      &:hover {
        &:before {
          @apply text-primary;
        }
      }
    }

    li.slick-active button:before {
      @apply text-white;
    }
  }
}
</style>
