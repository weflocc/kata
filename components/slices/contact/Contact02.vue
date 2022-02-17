<template>
  <div v-if="location" class="slice contact-2 md:flex">
    <div class="w-full md:w-r5/12 mb-large md:mb-0 map">
      <GMap
        ref="gMap"
        language="en"
        :center="{ lat: location.lat, lng: location.lng }"
        :options="{ fullscreenControl: false, styles: mapStyle }"
        :zoom="13"
      >
        <GMapMarker
          :position="{ lat: location.lat, lng: location.lng }"
          :options="{ icon: mapPin }"
        />
      </GMap>
    </div>
    <div class="w-r10/12 md:w-r5/12 mx-auto md:py-slice-half body">
      <h1
        v-if="isH1 && title"
        v-kata-html="title"
        class="mb-medium heading-2 fade-up"
      />
      <h2
        v-else-if="title"
        v-kata-html="title"
        class="mb-medium heading-2 fade-up"
      />
      <p v-if="text" v-kata-html="text" class="mb-medium fade-up" />
      <ul class="columns fade-up">
        <li v-if="address" class="mb-medium item">
          <p class="label-1">Address</p>
          <p v-kata-html="address" class="whitespace-pre-line" />
        </li>
        <li v-if="openingTimes" class="mb-medium item">
          <p class="label-1">Opening Times</p>
          <p v-kata-html="openingTimes" class="whitespace-pre-line" />
        </li>
        <!-- <li v-if="website" class="mb-medium item">
          <p class="label-1">Website</p>
          <p>
            <a :href="website" target="_blank">{{ websiteText || website }}</a>
          </p>
        </li> -->
        <li v-if="email" class="mb-medium item">
          <p class="label-1">Email</p>
          <p>
            <a :href="'mailto:' + email">{{ email }}</a>
          </p>
        </li>
        <li v-if="telephone" class="mb-medium item">
          <p class="label-1">Telephone</p>
          <p>
            <a :href="'tel:' + telephone">{{ telephone }}</a>
          </p>
        </li>
      </ul>
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
import { title, text } from '../shared'
export default {
  mixins: [title, text],
  props: {
    location: {
      type: Object,
      required: true,
    },
    address: {
      type: String,
      default: '',
    },
    openingTimes: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    website: {
      type: String,
      default: '',
    },
    websiteText: {
      type: String,
      default: '',
    },
    telephone: {
      type: String,
      default: '',
    },
    mapPin: {
      type: String,
      default: '',
    },
    mapStyle: {
      type: Array,
      default: null,
    },
    isH1: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.contact-2 {
  .columns {
    columns: 2 250px;
    column-gap: var(--spacing-medium);

    .item {
      -webkit-column-break-inside: avoid;
      page-break-inside: avoid;
      break-inside: avoid;
    }
  }
  .GMap__Wrapper,
  .GMap {
    height: 100%;
    min-height: 50vh;
  }
}
</style>
