<template>
  <div v-if="media && media[0] && media.length == 1" class="media-image">
    <KataImage
      v-if="media[0]._type == 'image'"
      :image="media[0]"
      :sizes="sizes"
      :ratio="ratio"
      :max-width="maxWidth"
      class="h-full w-full object-cover"
    />
    <KataVideo
      v-else-if="media[0]._type == 'video'"
      :video="media[0]"
      class="h-full w-full object-cover"
      loop
    ></KataVideo>
  </div>
  <div v-else-if="slides.length" class="media-slider">
    <KataCssSlider
      :images="slides"
      class="w-full h-full"
      :sizes="sizes"
      :ratio="ratio"
      :max-width="maxWidth"
    />
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
    media: {
      type: Array,
      required: true,
    },
    ratio: {
      type: Number,
      default: 6 / 4,
    },
    maxWidth: {
      type: Number,
      default: 1000,
    },
    sizes: {
      type: String,
      default: '100vw',
    },
  },
  data() {
    return {
      settings: {
        dots: true,
        arrows: false,
        dotsClass: 'slick-dots media-dots',
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        fade: true,
        lazyload: 'ondemand',
      },
    }
  },
  computed: {
    slides() {
      let slides = []
      // only return images for now
      if (this.media && this.media.length > 1) {
        slides = this.media.filter((item) => item._type == 'image')
      }

      return slides
    },
  },
}
</script>

<style lang="scss">
.media-slider {
  .slick-list,
  .slick-slide > div {
    width: 100%;
    height: 100%;
  }

  .slick-track {
    height: 100%;
  }
}
</style>
