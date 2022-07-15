<template>
  <div v-if="media && media.mediaType" class="media py-slice-half">
    <KataImage
      v-if="media.mediaType == 'image' && media.image && !noCrop"
      :image="media.image"
      :sizes="sizes"
      :ratio="ratio"
      :max-width="maxWidth"
      class="h-full w-full object-cover"
    />
    <KataImage02
      v-if="media.mediaType == 'image' && media.image && noCrop"
      :image="media.image"
      :sizes="sizes"
      :max-width="maxWidth"
      class="max-w-full"
    />
    <!-- TODO: readd mobile video/image -->
    <KataVideo
      v-else-if="media.mediaType == 'video' && media.video && noCrop"
      :video="media.video"
      class="h-full w-full object-cover"
    />
    <KataVideoEmbed
      v-else-if="media.mediaType == 'embed' && media.embedUrl"
      :url="media.embedUrl"
      class="w-full"
      :lazy="false"
    />
    <KataCssSlider
      v-else-if="media.mediaType == 'slideshow' && media.slideshow"
      :images="media.slideshow"
      class="w-full h-full"
      :sizes="sizes"
      :ratio="ratio"
      :no-crop="noCrop"
      :max-width="maxWidth"
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
    noCrop: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({ isMobile: false }),
  mounted() {
    if (process.client && window.matchMedia('(max-width: 500px)').matches) {
      this.isMobile = true
    }
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
