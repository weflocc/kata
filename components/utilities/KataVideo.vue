<template>
  <video
    v-if="video"
    ref="video"
    v-observe-visibility="isVisible"
    class="kata-video"
    :class="{ loaded: loaded }"
    nocontrols
    muted
    :autoplay="true"
    preload="true"
    playsinline
    :data-poster="image"
  ></video>
</template>

<script>
import Hls from 'hls.js'

export default {
  props: {
    video: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      // video: '',
      resizeTimer: null,
      playPromise: false,
      isMobile: false,
      image: '',
      loaded: false,
    }
  },
  computed: {
    playbackId() {
      return this.$store.getters['references/getPlaybackIdFromRef'](
        this.video.asset._ref
      )
    },
  },
  mounted() {
    if (this.video) {
      // https://github.com/video-dev/hls.js/#embedding-hlsjs
      const videoSrc = `https://stream.mux.com/${this.playbackId}.m3u8`
      this.image = `https://image.mux.com/${this.playbackId}/thumbnail.jpg?time=0`
      const video = this.$refs.video

      if (Hls.isSupported()) {
        let hls = new Hls()
        hls.loadSource(videoSrc)
        hls.attachMedia(video)
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc
      }

      this.videoLoaded()
    }
  },
  methods: {
    videoLoaded() {
      this.$nextTick(() => {
        const video = this.$refs.video
        let self = this
        if (video) {
          video.addEventListener('loadeddata', function () {
            console.log(video.readyState)
            // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState
            if (video.readyState >= 2) {
              self.loaded = true
            }
          })
        }
      })
    },
    isVisible(isVisible, entry) {
      // if (!this.isMobile) {
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
      // }
    },
  },
}
</script>

<style lang="scss" scoped>
.kata-video {
  opacity: 0;
  transition: opacity 1s ease;

  &.loaded {
    opacity: 1;
  }
}
</style>
