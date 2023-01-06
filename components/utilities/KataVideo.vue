<template>
  <video
    v-if="video"
    ref="video"
    v-observe-visibility="isVisible"
    class="kata-video"
    :class="{ loaded: loaded, 'mobile-video': isMobile }"
    nocontrols
    muted
    :autoplay="true"
    :preload="preload"
    playsinline
    :loading="loading"
    :poster="image"
    @loadeddata="videoLoaded"
  />
</template>

<script>
import Hls from 'hls.js'

export default {
  props: {
    video: {
      type: Object,
      default: () => {},
    },
    mobileVideo: {
      type: Object,
      default: () => {},
    },
    loading: {
      type: String,
      default: 'lazy',
    },
    preload: {
      type: String,
      default: 'metadata',
    },
  },
  data: () => ({
    resizeTimer: null,
    playPromise: false,
    isMobile: false,
    image: '',
    loaded: false,
  }),
  mounted() {
    let videoObj = this.video
    if (
      process.client &&
      window.matchMedia('(max-width: 699px)').matches &&
      this.mobileVideo
    ) {
      this.isMobile = true
      videoObj = this.mobileVideo
    }
    if (videoObj && videoObj != null) {
      let playbackId = this.$store.getters['references/getPlaybackIdFromRef'](
        videoObj.asset._ref
      )
      // https://github.com/video-dev/hls.js/#embedding-hlsjs
      const videoSrc = `https://stream.mux.com/${playbackId}.m3u8`
      this.image = `https://image.mux.com/${playbackId}/thumbnail.webp?time=0&width=1000&height=563&fit_mode=smartcrop`

      const video = this.$refs.video

      if (Hls.isSupported()) {
        let hls = new Hls()
        hls.loadSource(videoSrc)
        hls.attachMedia(video)
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc
      }
    }
  },
  methods: {
    videoLoaded() {
      this.$nextTick(() => {
        const video = this.$refs.video
        if (video.readyState >= 2) {
          self.loaded = true
        }
      })
    },
    isVisible(isVisible, entry) {
      let context = this
      this.$nextTick(() => {
        let video = context.$refs.video
        if (isVisible) {
          context.playPromise = video.play()
        } else {
          if (context.playPromise && context.playPromise !== undefined) {
            context.playPromise
              .then((_) => {
                // Automatic playback started!
                // Show playing UI.
                video.pause()
              })
              .catch((error) => {
                // Auto-play was prevented
                // Show paused UI.
                console.log(error)
              })
          }
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.kata-video {
  // opacity: 0;
  // transition: opacity 1s ease;

  // &.loaded {
  //   opacity: 1;
  // }
}
</style>
