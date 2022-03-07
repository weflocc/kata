<template>
  <div class="video-embed" :class="source">
    <iframe
      v-if="source == 'vimeo'"
      title="vimeo-player"
      width="640"
      height="360"
      :src="url"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
      allowfullscreen
    ></iframe>
    <iframe
      v-else-if="source == 'youtube'"
      title="youtube-player"
      width="560"
      height="315"
      :src="'https://www.youtube-nocookie.com/embed/' + getYoutubeId(url)"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
      allowfullscreen
    ></iframe>
    <iframe
      v-else
      width="400"
      height="300"
      :src="url"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
  },
  computed: {
    source() {
      if (this.url.includes('youtu.be') || this.url.includes('youtube')) {
        return 'youtube'
      } else if (this.url.includes('vimeo')) {
        return 'vimeo'
      } else {
        return 'source-unknown'
      }
    },
  },
  methods: {
    getYoutubeId(url) {
      if (/youtu\.?be/.test(url)) {
        // Look first for known patterns
        var i
        var patterns = [
          /youtu\.be\/([^#\&\?]{11})/, // youtu.be/<id>
          /\?v=([^#\&\?]{11})/, // ?v=<id>
          /\&v=([^#\&\?]{11})/, // &v=<id>
          /embed\/([^#\&\?]{11})/, // embed/<id>
          /\/v\/([^#\&\?]{11})/, // /v/<id>
        ]

        // If any pattern matches, return the ID
        for (i = 0; i < patterns.length; ++i) {
          if (patterns[i].test(url)) {
            return patterns[i].exec(url)[1]
          }
        }
      }
      return null
    },
  },
}
</script>

<style lang="scss" scoped>
.video-embed {
  width: 100%;
  aspect-ratio: 16 / 9;

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
