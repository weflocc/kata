<template>
  <div
    v-if="articles && articles.length > 0 && loaded"
    class="articles-layout-map relative sm:flex"
  >
    <div class="block sm:hidden mx-auto mb-slice-half">
      <button
        :class="mobileView == 'List' ? 'border-secondary' : 'border-white'"
        class="font-bold mr-small border-b-2 hover:text-secondary focus:border-b-2 focus:outline-none focus:border-secondary"
        @click="mobileView = 'List'"
      >
        List
      </button>
      <button
        :class="mobileView == 'Map' ? 'border-secondary' : 'border-white'"
        class="font-bold mr-small border-b-2 hover:text-secondary focus:border-b-2 focus:outline-none focus:border-secondary"
        @click="mobileView = 'Map'"
      >
        Map
      </button>
    </div>
    <div class="bg-primary sm:w-1/3 articles-list">
      <transition name="fade">
        <ul
          v-if="(isMobile && mobileView == 'List') || !isMobile"
          class="p-medium"
        >
          <li
            v-for="item in articles"
            :key="item._key"
            class="mb-large list-item font-bold inline-block sm:block cursor-pointer transition-all hover:text-secondary"
            :class="{
              'text-secondary': item.title == currentArticle,
              'text-white': item.title != currentArticle,
            }"
            @mouseover="setCurrent(item.title)"
            @click="setActive(item)"
          >
            <h3 v-if="item.title" v-kata-html="item.title" class="label-1" />
            <p
              v-if="item[thumbField]"
              v-kata-html="item[thumbField]"
              class="para-2 mt-3"
            />
          </li>
        </ul>
      </transition>
    </div>
    <div class="sm:w-2/3 relative">
      <nuxt-child v-if="hasChild" :key="$route.name" />
      <transition name="fade">
        <GMap
          v-if="(isMobile && mobileView == 'Map') || !isMobile"
          ref="gMap"
          language="en"
          :center="centre"
          :options="{ fullscreenControl: false, styles: mapStyle }"
          :zoom="zoom"
          @loaded="mapInitLoaded"
        >
          <GMapMarker
            v-for="article in articles"
            :key="article._key"
            ref="marker"
            :position="
              article.location
                ? {
                    lat: article.location.lat,
                    lng: article.location.lng,
                  }
                : {}
            "
            :options="{
              icon:
                article.title === currentArticle
                  ? pins.selected
                  : pins.notSelected,
            }"
            @mouseover="
              (e) => {
                openInfoWindow(article, e)
                setCurrent(article.title)
              }
            "
            @click="setActive(article)"
          ></GMapMarker>
          <div
            v-show="selectedLocation !== null"
            ref="infoWindow"
            class="info-window"
          >
            <div v-if="selectedLocation">
              <p class="label-1">
                {{ selectedLocation.title }}
              </p>
            </div>
          </div>
        </GMap>
      </transition>
    </div>
  </div>
</template>

<script>
// Requires nuxt-gmaps
// Add the following to modules in nuxt config (with your api key)
// [
//  'nuxt-gmaps',
//    {
//      key: 'AIzaSyDqa_gfKjehO6LI6vCIG1gOjhd3TiUE7ew',
//    },
// ],

export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
    zoom: {
      type: Number,
      default: 4,
    },
    centre: {
      type: Object,
      default: function () {
        return { lat: 40, lng: 20 }
      },
    },
    // path must start with a / eg. /members
    path: {
      type: String,
      default: '',
    },
    // pas in the name of the field you want to show below the title
    thumbField: {
      type: String,
      default: '',
    },
    mapStyle: {
      type: Array,
      default: null,
    },
    mapPin: {
      type: String,
      default: '',
    },
    mapPinSelected: {
      type: String,
      default: '',
    },
    hasChild: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentArticle: {},
      activeArticle: {},
      pins: {
        selected: this.mapPinSelected,
        notSelected: this.mapPin,
      },
      infoBoxOpen: false,
      selectedLocation: null,
      mobileView: 'List',
      infoWindow: null,
      isMobile: false,
      loaded: false,
      initialLoadDone: false,
    }
  },
  watch: {
    articles: function (newVal, oldVal) {
      // watch it
      console.log('Results map articles changed: ', newVal, ' | was: ', oldVal)
      if (this.initialLoadDone && this.loaded) {
        this.mapLoaded()
      }
    },
  },
  mounted() {
    this.mq()
    this.loaded = true
    if (process.client) {
      window.addEventListener('resize', this.mq)
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('resize', this.mq)
    }
  },
  methods: {
    mq() {
      this.isMobile = window.matchMedia('(max-width: 699px)').matches
    },
    setCurrent(item) {
      this.currentArticle = item
    },
    setActive(item) {
      console.log('here', this.path, item.slug)
      if (typeof item.slug == 'string') {
        let path = this.path
          ? this.path + '/' + item.slug + '/'
          : '/' + item.slug + '/'
        this.$router.push({ path: path })
      } else {
        let path = this.path
          ? this.path + '/' + item.slug.current + '/'
          : '/' + item.slug.current + '/'
        this.$router.push({ path: path })
      }
    },
    mapInitLoaded() {
      this.initialLoadDone = true
      this.mapLoaded()
    },
    mapLoaded(e) {
      let context = this
      var bounds = new google.maps.LatLngBounds()
      for (let index = 0; index < this.articles.length; index++) {
        const element = this.articles[index]
        if (element.location) {
          let lat = element.location.lat
          let lng = element.location.lng
          if (lat && lng) {
            let pos = new google.maps.LatLng(lat, lng)
            bounds.extend(pos)
          }
        }
      }
      this.$refs.gMap.map.fitBounds(bounds)
      this.infoWindow = new google.maps.InfoWindow({
        content: context.$refs.infoWindow,
        position: context.centre,
      })
    },
    openInfoWindow(item, event) {
      console.log(item, event)

      // this.$google.infoWindow.setPosition({
      //   lat: item.location.lat,
      //   lng: item.location.lng,
      // })

      if (this.infoWindow) {
        this.infoWindow.open(event.map, event.marker)
      }

      this.selectedLocation = item
      this.infoBoxOpen = true
    },
    closeInfoWindow() {
      this.infoBoxOpen = false
    },
  },
}
</script>

<style lang="scss">
.articles-list {
  overflow: scroll;
  z-index: 11;
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}
.slide-right-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}
.slide-left-enter,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.GMap__Wrapper,
.articles-list {
  height: 80vh;
  min-height: 500px;
}

@media (max-width: 500px) {
  .GMap__Wrapper {
    height: 80vh;
    min-height: 300px;
  }
  .articles-list {
    height: auto;
    min-height: 0;
  }
}
.partner-page {
  height: 80vh;
  min-height: 500px;

  @media (max-width: 500px) {
    height: 100vh;
  }
}
.gm-style .gm-style-iw-d {
  overflow: hidden !important;
}
.gm-style .gm-style-iw-c {
  background: $primary;
  padding: 0;
  border-radius: 0;

  button {
    position: relative;
    img {
      display: none !important;
    }
    &::after,
    &::before {
      content: '';
      background-color: white;
      width: 15px;
      height: 2px;
      position: absolute;
      right: 10px;
      top: 16px;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}
.gm-style .gm-style-iw-t::after {
  background: linear-gradient(
    45deg,
    rgba($primary, 1) 50%,
    rgba($primary, 0) 51%,
    rgba($primary, 0) 100%
  );
}
.info-window {
  background: $primary;
  color: white;
  padding: 30px;

  p {
    font-size: 15px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
