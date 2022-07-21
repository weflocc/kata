<template>
  <video
    v-if="video"
    ref="video"
    controls
    controlsList="nodownload"
    disablePictureInPicture
    playsinline
    width="100%"
    preload="metadata"
    :data-poster="poster"
    loading="lazy"
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
    thumbnail: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      poster: '',
    }
  },
  computed: {
    playbackId() {
      if (this.video?.asset) {
        return this.$store.getters['references/getPlaybackIdFromRef'](
          this.video.asset._ref
        )
      }
      return null
    },
  },
  mounted() {
    if (this.video) {
      // https://github.com/video-dev/hls.js/#embedding-hlsjs
      const videoSrc = `https://stream.mux.com/${this.playbackId}.m3u8`
      this.poster = `https://image.mux.com/${this.playbackId}/thumbnail.jpg`
      if (this.thumbnail) {
        this.poster = this.$imgUrl(this.thumbnail).quality(80).url()
      }
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
}
</script>

<style lang="scss" scoped>
video::-internal-media-controls-overlay-cast-button {
  display: none;
}
</style>
