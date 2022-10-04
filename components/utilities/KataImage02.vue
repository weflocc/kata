<template>
  <nuxt-img
    v-if="imageIsSet"
    :src="src()"
    :class="{ loaded: loaded }"
    :width="maxWidth"
    class="kata-image kata-image-2 h-auto"
    :alt="alt"
    :loading="lazy ? 'lazy' : 'eager'"
    :sizes="sizes"
    :format="format"
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
    loader: {
      type: Boolean,
      default: false,
    },
    maxWidth: {
      type: Number,
      default: 800,
    },
    // https://image.nuxtjs.org/api/options#screens
    sizes: {
      type: String,
      default: 'xl:100vw',
    },
    lazy: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    loaded: false,
    format: 'webp',
  }),
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
    src() {
      let url = this.$imgUrl(this.theImage)
        .quality(80)
        .width(this.maxWidth)
        .url()
      if (url && url.includes('.svg')) {
        console.log('format svg')
        this.format = ''
      }
      return url
    },
    imgLoaded() {
      console.log('KataImage02 loaded - ', this.alt)
      this.loaded = true
    },
    imgError(e) {
      console.log('KataImage02 error - ', e)
    },
  },
}
</script>

<style scoped lang="scss">
img.kata-image {
  transition: opacity 1s ease;
  // opacity: 0;
  // &.loaded,
  // &.isLoaded {
  //   opacity: 1;
  // }
}
</style>
