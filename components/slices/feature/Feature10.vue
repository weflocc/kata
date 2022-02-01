<template>
  <div v-if="list && list != null" class="slice feature-10 relative">
    <GMap
      v-if="list.length"
      ref="gMap"
      language="en"
      :center="centre"
      :options="{ fullscreenControl: false, styles: mapStyle }"
      :zoom="zoom"
      @loaded="mapLoaded"
    >
      <GMapMarker
        v-for="item in list"
        :key="item.title"
        ref="marker"
        :position="{ lat: item.location.lat, lng: item.location.lng }"
        :options="{
          icon: item.title === currentitem ? pins.selected : pins.notSelected,
        }"
        @mouseover="
          (e) => {
            openInfoWindow(item, e)
            setCurrent(item.title)
          }
        "
      ></GMapMarker>
      <div
        v-show="selectedLocation !== null"
        ref="infoWindow"
        class="info-window"
      >
        <div v-if="selectedLocation">
          <p class="font-bold">
            {{ selectedLocation.title }}
          </p>
          <p v-if="selectedLocation.location.name" class="font-bold mt-2">
            {{ selectedLocation.location.name }}
          </p>
        </div>
      </div>
    </GMap>
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
      currentitem: {},
      activeitem: {},
      pins: {
        selected: this.mapPinSelected,
        notSelected: this.mapPin,
      },
      infoBoxOpen: false,
      selectedLocation: null,
      infoWindow: null,
    }
  },
  methods: {
    setCurrent(item) {
      this.currentitem = item
    },
    mapLoaded(e) {
      let context = this
      var bounds = new google.maps.LatLngBounds()
      if (this.list?.length) {
        for (let index = 0; index < this.list.length; index++) {
          const element = this.list[index]
          let pos = new google.maps.LatLng(
            element.location.lat,
            element.location.lng
          )
          bounds.extend(pos)
        }
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
.GMap__Wrapper {
  height: 80vh;
  min-height: 500px;

  @media (max-width: 500px) {
    height: 50vh;
    min-height: 300px;
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
