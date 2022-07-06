<template>
  <!-- clashes with nuxt lazy load, need to work out another route https://issueexplorer.com/issue/nuxt/image/358 -->
  <!-- <NuxtImg
    v-if="imgId"
    provider="sanity"
    :src="imgId"
    :class="{ loaded: loaded }"
    :width="maxWidth"
    :height="maxWidth * ratio"
    fit="crop"
    class="kata-image"
    :alt="alt"
    loading="lazy"
    @load="imgLoaded"
  /> -->
  <div v-if="showLoader" class="image-with-loader" :class="{ loaded: loaded }">
    <img
      v-if="imageIsSet"
      :srcSet="srcSet"
      :src="src"
      :sizes="sizes"
      :class="{ loaded: loaded }"
      :width="maxWidth"
      :height="maxWidth * ratio"
      class="kata-image"
      :alt="alt"
      @load="imgLoaded"
    />
  </div>
  <img
    v-else-if="imageIsSet"
    :srcSet="srcSet"
    :src="src"
    :sizes="sizes"
    :width="maxWidth"
    :height="maxWidth * ratio"
    class="kata-image"
    :alt="alt"
  />
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      // required: true,
      default: () => {},
    },
    showLoader: {
      type: Boolean,
      default: false,
    },
    maxWidth: {
      type: Number,
      default: 800,
    },
    ratio: {
      type: Number,
      default: function () {
        return 6 / 4
      },
    },
    sizes: {
      type: String,
      default: '100vw',
    },
  },
  data: () => ({ loaded: false }),
  computed: {
    imageIsSet() {
      return this.image?.asset?._ref
    },
    theImage() {
      // we often get an empty object when no image is defined
      if (this.imageIsSet) {
        return this.image
      } else {
        return {}
      }
    },
    src() {
      let calcWidth = Math.round(this.maxWidth / 4)

      return this.$imgUrl(this.theImage)
        .width(calcWidth)
        .height(this.h(calcWidth))
        .quality(80)
        .url()
    },
    srcSet() {
      let srcSet = ''

      for (
        let width = this.maxWidth;
        width > 200;
        width -= this.increment(this.maxWidth)
      ) {
        srcSet += `${this.$imgUrl(this.theImage)
          .width(width)
          .height(this.h(width))
          .quality(80)
          .url()} ${width}w,`
      }

      srcSet = srcSet.slice(0, -1) //remove the trailing comma

      return srcSet
    },
    alt() {
      let meta = this.$store.getters['references/getImageMetadata'](
        this.image.asset._ref
      )
      // set in order of preference
      let items = ['alt', 'title', 'description', 'id']
      let alt = ''
      console.log('meta', meta)
      if (!meta || !Object.keys(meta).length) return alt
      for (let i = 0; i < items.length; i++) {
        const elem = items[i]
        if (Object.prototype.hasOwnProperty.call(meta, elem) && meta[elem]) {
          alt = meta[elem]
          break
        }
      }
      return alt
    },
  },
  methods: {
    imgLoaded() {
      this.loaded = true
    },
    increment(maxWidth) {
      const fiths = Math.floor(maxWidth / 5)
      let increment = fiths > 200 ? 200 : fiths
      return increment
    },
    h(val) {
      return Math.round(val / this.ratio)
    },
  },
}
</script>

<style scoped lang="scss">
// fade in lazyloaded images
img.kata-image.lazyLoad {
  transition: opacity 1s ease;
  opacity: 0;
  &.isLoaded {
    opacity: 1;
  }
}
.image-with-loader {
  position: relative;

  &:after {
    content: '';
    @apply bg-white w-full h-full left-0 top-header-height fixed;
    transition: 0.5s ease;
    pointer-events: none;
    opacity: 1;
  }

  &.loaded {
    &:after {
      opacity: 0;
    }
  }
}
</style>
