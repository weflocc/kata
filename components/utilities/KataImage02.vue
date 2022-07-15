<template>
  <!-- <img
    v-if="imageIsSet"
    :srcSet="srcSet"
    :src="src"
    :sizes="sizes"
    :class="{ loaded: loaded }"
    :width="maxWidth"
    :height="maxWidth"
    class="kata-image h-auto"
    :alt="alt"
    @load="loaded = true"
  /> -->
  <!-- sizes not working - maybe try https://image.nuxtjs.org/api/dollarimg#imggetsizes instead? -->
  <nuxt-img
    v-if="imageIsSet"
    :src="src"
    :class="{ loaded: loaded }"
    :width="maxWidth"
    class="kata-image kata-image-2 h-auto"
    :alt="alt"
    :loading="lazy ? 'lazy' : 'eager'"
    format="webp"
    @load="imgLoaded"
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
      default: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
    },
    lazy: {
      type: Boolean,
      default: true,
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
      // let calcWidth = Math.round(this.maxWidth / 4)
      return this.$imgUrl(this.theImage).quality(80).auto('format').url()
    },
    // srcSet() {
    //   let srcSet = ''

    //   for (
    //     let width = this.maxWidth;
    //     width > 200;
    //     width -= this.increment(this.maxWidth)
    //   ) {
    //     srcSet += `${this.$imgUrl(this.theImage)
    //       .width(width)
    //       .quality(80)
    //       .auto('format')
    //       .url()} ${width}w,`
    //   }

    //   srcSet = srcSet.slice(0, -1) //remove the trailing comma

    //   return srcSet
    // },
    alt() {
      let meta = this.$store.getters['references/getImageMetadata'](
        this.image.asset._ref
      )
      // set in order of preference
      let items = ['alt', 'title', 'description', 'id']
      let alt = ''
      // console.log('meta', meta)
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
      console.log('KataImage02 loaded - ', this.alt)
      this.loaded = true
    },
    imgError(e) {
      console.log('KataImage02 error - ', e)
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
img.kata-image {
  transition: opacity 1s ease;
  // @load not working right now
  // opacity: 0;
  // &.loaded,
  // &.isLoaded {
  //   opacity: 1;
  // }
}
</style>
