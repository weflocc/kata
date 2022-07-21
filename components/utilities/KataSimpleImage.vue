<template>
  <nuxt-img
    class="kata-simple-image"
    :loading="lazy ? 'lazy' : 'eager'"
    :alt="alt"
    :src="src()"
    :format="format"
    @load="handleLoad"
  />
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
    loader: {
      type: Boolean,
      default: false,
    },
    lazy: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    format: 'webp',
  }),
  computed: {
    alt() {
      let alt = ''
      if (this.image) {
        let meta = this.$store.getters['references/getImageMetadata'](
          this.image.asset._ref
        )
        // set in order of preference
        let items = ['alt', 'title', 'description', 'id']

        // console.log('meta', meta)
        if (!meta || !Object.keys(meta).length) {
          return alt
        }
        for (let i = 0; i < items.length; i++) {
          const elem = items[i]
          if (Object.prototype.hasOwnProperty.call(meta, elem) && meta[elem]) {
            alt = meta[elem]
            break
          }
        }
      }
      return alt
    },
  },
  methods: {
    src() {
      // let calcWidth = Math.round(this.maxWidth / 4)
      let url = this.$imgUrl(this.image).url()
      if (url && url.includes('.svg')) {
        this.format = 'svg'
      }
      return url
    },
    handleLoad() {
      console.log('Image loaded!')
    },
  },
}
</script>
