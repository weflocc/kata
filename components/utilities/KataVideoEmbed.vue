<template>
  <div class="video-embed" :class="source">
    <template v-if="source == 'vimeo' || source == 'youtube'">
      <transition name="fade" mode="out-in">
        <template v-if="!loaded">
          <slot name="facade" :loadFacade="loadFacade">
            <button
              class="w-full block relative embed-facade"
              title="Click to play video"
              @click="loadFacade"
            >
              <img
                v-if="imgSrc"
                :src="imgSrc"
                :alt="imgAlt"
                :width="source == 'vimeo' ? '640' : '360'"
                :height="source == 'vimeo' ? '560' : '315'"
                loading="lazy"
                class="w-full h-auto !m-0"
                @error="imageLoadError"
              />
              <div v-else class="bg-black w-full h-[56vh]" />
              <div
                class="absolute inset-0 w-full h-full flex items-center justify-center bg-black/50"
              >
                <div aria-label="Play" class="play-btn" />
              </div>
            </button>
          </slot>
        </template>
        <template v-else>
          <iframe
            v-if="source == 'vimeo'"
            title="vimeo-player"
            width="640"
            height="360"
            autoplay
            :src="embedUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowfullscreen
            loading="lazy"
          ></iframe>
          <iframe
            v-else-if="source == 'youtube'"
            title="youtube-player"
            width="560"
            height="315"
            :src="
              'https://www.youtube-nocookie.com/embed/' +
              getYoutubeId +
              '?autoplay=1'
            "
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </template>
      </transition>
    </template>
    <iframe
      v-else
      width="400"
      height="300"
      :src="url"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
      allowfullscreen
      loading="lazy"
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
  data: () => ({
    loaded: false,
    imgSrc: '',
    imgAlt: 'Video embed',
    googleAPIKey: 'AIzaSyDH_t2JHugO2PBklI-fmNy8Ew0T34hJ-Ek',
  }),
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
    getYoutubeId() {
      let url = this.url
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
    getVimeoId() {
      let url = this.url
      // Look for a string with 'vimeo', then whatever, then a
      // forward slash and a group of digits.
      const match = /vimeo.*\/(\d+)/i.exec(url)
      // If the match isn't null (i.e. it matched)
      if (match) {
        // The grouped/matched digits from the regex
        return match[1]
      }
      return null
    },
    embedUrl() {
      if (this.source == 'vimeo') {
        if (this.url.includes('?') && !this.url.includes('autoplay')) {
          return this.url + '&autoplay=1'
        } else if (!this.url.includes('autoplay')) {
          return this.url + '?autoplay=1'
        }
      }
      return this.url
    },
  },
  async mounted() {
    // https://vimeo.com/api/v2/video/ID.json
    if (this.source == 'vimeo') {
      let id = this.getVimeoId
      // if $http is installed
      if (id && this.$http) {
        let res = await this.$http
          .$get('https://vimeo.com/api/v2/video/' + id + '.json')
          .catch((e) => {
            console.error(e)
          })
        if (res && res[0] && res[0].thumbnail_large) {
          this.imgSrc = res[0].thumbnail_large
          this.imgAlt = res[0].title
        }
      }
    } else if (this.source == 'youtube') {
      // https://img.youtube.com/vi/<insert-youtube-video-id-here>/maxresdefault.jpg
      let id = this.getYoutubeId
      // this.imgSrc = `https://img.youtube.com/vi/${id}/maxresdefault.jpg` //not all videos have this size
      if (id && this.$http) {
        let res = await this.$http
          .$get(
            `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${this.googleAPIKey}&part=snippet&fields=items/snippet/thumbnails`
          )
          .catch((e) => {
            console.error(e)
          })
        if (
          res.items &&
          res.items[0] &&
          res.items[0].snippet &&
          res.items[0].snippet.thumbnails
        ) {
          let thumbs = res.items[0].snippet.thumbnails
          // in order of best quality
          if (thumbs.maxres) {
            this.imgSrc = thumbs.maxres.url
          } else if (thumbs.standard) {
            this.imgSrc = thumbs.standard.url
          } else if (thumbs.high) {
            this.imgSrc = thumbs.high.url
          } else if (thumbs.medium) {
            this.imgSrc = thumbs.medium.url
          } else if (thumbs.default) {
            this.imgSrc = thumbs.default.url
          }
        }
      }
    }
  },
  methods: {
    loadFacade() {
      this.loaded = true
    },
    imageLoadError() {
      console.log('image 404')
      if (this.source == 'youtube') {
        let id = this.getYoutubeId
        // try a different url
        this.imgSrc = `https://img.youtube.com/vi/${id}/default.jpg`
      }
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
.play-btn {
  width: 100px;
  height: 100px;
  position: relative;
  border: 3px solid white;
  border-radius: 100% !important;

  &:after {
    content: '';
    @apply w-0 h-0 absolute inset-0 m-auto;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 30px solid white;
    left: 10px;
  }
}
</style>
