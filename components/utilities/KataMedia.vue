<template>
  <div v-if="media && media.mediaType" class="media">
    <KataImage
      v-if="media.mediaType == 'image' && media.image && !noCrop"
      :image="media.image"
      :sizes="sizes"
      :ratio="ratio"
      :mobile-ratio="mobileRatio"
      :max-width="maxWidth"
      class="h-full w-full object-cover"
      :show-loader="showLoader"
      :lazy="lazy"
      :kata-class="kataClass"
    />
    <KataImage02
      v-if="media.mediaType == 'image' && media.image && noCrop"
      :image="media.image"
      :sizes="sizes"
      :max-width="maxWidth"
      class="max-w-full"
      :show-loader="showLoader"
      :lazy="lazy"
      height="1000"
      :kata-class="kataClass"
    />
    <!-- TODO: readd mobile video/image -->
    <KataVideo
      v-else-if="media.mediaType == 'video' && media.video"
      :video="media.video"
      :mobile-video="media.mobileVideo"
      :no-crop="noCrop"
      class="h-full w-full object-cover"
    />
    <KataVideoEmbed
      v-else-if="media.mediaType == 'embed' && media.embedUrl"
      :url="media.embedUrl"
      class="w-full"
      :no-crop="noCrop"
      :lazy="false"
    />
    <KataFadeSlider
      v-else-if="
        media.mediaType == 'slideshow' && media.slideshow && useCarousel
      "
      :images="media.slideshow"
      class="w-full h-full"
      :sizes="sizes"
      :no-crop="noCrop"
      :ratio="ratio"
      :mobile-ratio="mobileRatio"
      :max-width="maxWidth"
    />
    <KataCssSlider
      v-else-if="
        media.mediaType == 'slideshow' && media.slideshow && !useCarousel
      "
      :images="media.slideshow"
      class="w-full h-full"
      :sizes="sizes"
      :no-crop="noCrop"
      :ratio="ratio"
      :mobile-ratio="mobileRatio"
      :max-width="maxWidth"
    />
    <KataLottie
      v-else-if="media.mediaType == 'lottie' && media.lottieJson"
      :animation-data="media.lottieJson"
      class="w-full h-auto"
      :options="options"
      :show-loader="showLoader"
      :lottie-on-visible="lottieOnVisible"
    />
  </div>
</template>

<script>
export default {
  props: {
    media: {
      type: Object,
      default: () => {},
    },
    ratio: {
      type: Number,
      default: 3 / 2,
    },
    mobileRatio: {
      type: Number,
      default: null,
    },
    maxWidth: {
      type: Number,
      default: 1000,
    },
    sizes: {
      type: String,
      default: 'xl:100vw',
    },
    lazy: {
      type: Boolean,
      default: true,
    },
    noCrop: {
      type: Boolean,
      default: false,
    },
    showLoader: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default: null,
    },
    lottieOnVisible: {
      type: Boolean,
      default: false,
    },
    useCarousel: {
      type: Boolean,
      default: false,
    },
    kataClass: {
      type: String,
      default: '',
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
