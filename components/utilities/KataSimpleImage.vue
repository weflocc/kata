<template>
  <img :alt="alt" :src="src" />
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
  },
  computed: {
    src() {
      return this.$imgUrl(this.image).url()
    },
    alt() {
      let alt = ''
      if (this.image) {
        let meta = this.$store.getters['references/getImageMetadata'](
          this.image.asset._ref
        )
        // set in order of preference
        let items = ['alt', 'title', 'description', 'id']

        console.log('meta', meta)
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
}
</script>
