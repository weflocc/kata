<template>
  <div class="youtube-wrap">
    <iframe
      width="560"
      height="315"
      :src="'https://www.youtube-nocookie.com/embed/' + videoId"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    videoId() {
      return this.getId(this.url)
    },
  },
  methods: {
    getId(url) {
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
.youtube-wrap {
  width: 100%;
  aspect-ratio: 16 / 9;

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
