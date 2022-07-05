<template>
  <div ref="kataLottie" :style="style"></div>
</template>

<script>
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
    this.$nextTick(() => {
      this.anim = lottie.loadAnimation({
        container: this.$refs.kataLottie,
        renderer: 'svg',
        loop: this.options && this.options.loop !== false,
        autoplay: true,
        animationData: animData,
        rendererSettings: this.options && this.options.rendererSettings,
      })
    })
    // this.$emit('animCreated', this.anim)
  },
}
</script>
