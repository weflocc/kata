<template>
  <div ref="kataLottie" />
</template>

<script>
// https://www.npmjs.com/package/vue-lottie
import lottie from 'lottie-web'

export default {
  props: {
    animationData: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    let animData = JSON.parse(this.animationData)
    console.log(animData)
    if (animData) {
      this.$nextTick(() => {
        this.anim = lottie.loadAnimation({
          container: this.$refs.kataLottie,
          renderer: 'svg',
          loop: this.options && this.options.loop ? this.options.loop : false, // true / false / number
          autoplay:
            this.options && this.options.autoplay
              ? this.options.autoplay
              : true, // true / false it will start playing as soon as it is ready
          animationData: animData,
          rendererSettings:
            this.options && this.options.rendererSettings
              ? this.options.rendererSettings
              : null,
          //   eg:
          //   rendererSettings: {
          //     context: canvasContext, // the canvas context, only support "2d" context
          //     preserveAspectRatio: 'xMinYMin slice', // Supports the same options as the svg element's preserveAspectRatio property
          //     clearCanvas: false,
          //     progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
          //     hideOnTransparent: true, //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
          //     className: 'some-css-class-name',
          //     id: 'some-id',
          //   },
        })
      })
    }
    // if you want to use the animation events, get this passed up.
    // this.$emit('animCreated', this.anim)
  },
}
</script>
