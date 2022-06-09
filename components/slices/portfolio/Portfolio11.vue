<template>
  <div class="portfolio-11 slice relative sm:flex fade-up">
    <div
      v-if="filteredList && filteredList.length"
      class="bg-primary sm:w-1/3 articles-list"
    >
      <ul class="p-medium">
        <li
          v-for="item in filteredList"
          :key="item._key || item._id"
          class="mb-large list-item font-bold inline-block sm:block cursor-pointer transition-all hover:text-secondary"
          :class="{
            'text-secondary': item.title == currentArticle,
            'text-white': item.title != currentArticle,
          }"
          @mouseover="setCurrent(item.title)"
          @click="setActive(item)"
        >
          <p>
            <span v-if="item.number">
              {{ item.number < 10 ? '0' + item.number : item.number }}
            </span>
            {{ item.title }}
          </p>
          <span v-if="item.country">
            {{ item.country }}
          </span>
        </li>
      </ul>
    </div>
    <div class="sm:w-2/3 map">
      <GMap
        v-if="filteredList != null && filteredList.length"
        ref="gMap"
        language="en"
        :center="centre"
        :options="{ fullscreenControl: false, styles: mapStyle }"
        :zoom="zoom"
        @loaded="mapLoaded"
      >
        <GMapMarker
          v-for="article in filteredList"
          :key="article.title"
          ref="marker"
          :position="{ lat: article.location.lat, lng: article.location.lng }"
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
        >
          <!-- <div ref="GMap__InfoWindow" class="GMap__InfoWindow">
            <p class="text-sm">
              {{ article.title }}
            </p>
          </div> -->
        </GMapMarker>
        <div
          v-show="selectedLocation !== null"
          ref="infoWindow"
          class="info-window"
        >
          <div v-if="selectedLocation">
            <p class="font-bold">
              {{ selectedLocation.title }}
              <span v-if="selectedLocation.acronym">
                ({{ selectedLocation.acronym }})
              </span>
            </p>
            <p v-if="selectedLocation.location.name" class="font-bold mt-2">
              {{ selectedLocation.location.name }}
            </p>
          </div>
        </div>
      </GMap>
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
// import mapStyle from '~/components/site/map-style'
// import mapPin from '~/assets/svgs/pin.svg'
// import mapPinSelected from '~/assets/svgs/pin-selected.svg'
import { list } from '../shared'

export default {
  mixins: [list],
  props: {
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
    path: {
      type: String,
      required: true,
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
      infoWindow: null,
    }
  },
  computed: {
    filteredList() {
      // filters out articles that don't contain a location prop
      return this.list.filter((item) =>
        Object.prototype.hasOwnProperty.call(item, 'location')
      )
    },
  },
  methods: {
    setCurrent(item) {
      this.currentArticle = item
    },
    setActive(item) {
      if (!item.slug) return
      this.$router.push({ path: this.path + '/' + item.slug.current + '/' })
    },
    mapLoaded(e) {
      let context = this
      var bounds = new google.maps.LatLngBounds()
      for (let index = 0; index < this.filteredList.length; index++) {
        const element = this.filteredList[index]
        let pos = new google.maps.LatLng(
          element.location.lat,
          element.location.lng
        )
        bounds.extend(pos)
      }
      this.$refs.gMap.map.fitBounds(bounds)
      this.infoWindow = new google.maps.InfoWindow({
        content: context.$refs.infoWindow,
        position: context.centre,
      })
    },
    openInfoWindow(item, event) {
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
