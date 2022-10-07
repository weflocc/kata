<template>
  <div
    v-if="showLoader"
    class="image-with-loader"
    :class="`${kataClass}${loaded ? ' loaded' : ''}`"
  >
    <nuxt-img
      v-if="imageIsSet"
      :src="src()"
      :class="{ loaded: loaded }"
      :width="maxWidth"
      :height="height"
      fit="cover"
      class="kata-image"
      :alt="alt"
      :sizes="sizes"
      :loading="lazy ? 'lazy' : 'eager'"
      :format="format"
      @onLoad="imgLoaded"
    />
  </div>
  <nuxt-img
    v-else-if="imageIsSet"
    :src="src()"
    :class="`${kataClass}${loaded ? ' loaded' : ''}`"
    :width="maxWidth"
    :height="height"
    fit="cover"
    class="kata-image"
    :alt="alt"
    :sizes="sizes"
    :format="format"
    :loading="lazy ? 'lazy' : 'eager'"
    @onLoad="imgLoaded"
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
    lazy: {
      type: Boolean,
      default: true,
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
      default: 'xl:100vw',
    },
    kataClass: {
      type: String,
      default: '',
    },
  },
  data: () => ({ loaded: false, format: 'webp' }),
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
    height() {
      return Math.round(this.maxWidth / this.ratio)
    },
    alt() {
      let meta = this.$store.getters['references/getImageMetadata'](
        this.image.asset._ref
      )
      // set in order of preference
      let items = ['alt', 'title', 'description', 'id']
      let alt = ''
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
      console.log('KataImage imgLoaded')
      this.loaded = true
    },
    src() {
      // let calcWidth = Math.round(this.maxWidth / 4)
      let url = this.$imgUrl(this.theImage)
        .quality(80)
        .width(this.maxWidth)
        .height(this.height)
        .url()
      if (url && url.includes('.svg')) {
        this.format = ''
      }
      return url
    },
  },
}
</script>

<style scoped lang="scss">
// fade in lazyed images
img.kata-image {
  transition: opacity 1s ease;
  // opacity: 0;
  // &.isLoaded {
  //   opacity: 1;
  // }
}
// .image-with-loader {
//   position: relative;

//   &:after {
//     content: '';
//     @apply bg-white w-full h-full left-0 top-header-height fixed;
//     transition: 0.5s ease;
//     pointer-events: none;
//     opacity: 1;
//   }

//   &.loaded {
//     &:after {
//       opacity: 0;
//     }
//   }
// }
</style>
