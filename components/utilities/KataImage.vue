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
    loader: {
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
  data() {
    return {
      loaded: false,
    }
  },
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
      let calcWidth = this.maxWidth / 4

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
      for (let i = 0; i < items.length; i++) {
        const elem = items[i]
        if (meta.hasOwnProperty(elem) && meta[elem]) {
          alt = meta[elem]
          break
        }
      }
      return alt
    },
  },
  methods: {
    increment(maxWidth) {
      const fiths = Math.floor(maxWidth / 5)
      let increment = fiths > 200 ? 200 : fiths
      return increment
    },
    h(val) {
      return Math.floor(val / this.ratio)
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
</style>
