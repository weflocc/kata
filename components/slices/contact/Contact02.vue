<template>
  <div
    v-if="location"
    class="slice contact-2 md:flex"
    :class="{ 'reversed md:flex-row-reverse': reversed }"
  >
    <div class="w-full md:w-r12/24 mb-large md:mb-0 map">
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
    <div class="w-r24/24 md:w-r12/24 mx-auto md:py-slice-half body">
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
      <SanityEmbedContent
        v-if="textBody"
        :blocks="textBody"
        class="fade-up mb-medium"
      />
      <ul class="columns fade-up">
        <li v-if="address" class="mb-medium item">
          <p class="label-1">Address</p>
          <p v-kata-html="address" class="whitespace-pre-line" />
        </li>
        <li v-if="what3Words" class="mb-medium item">
          <p class="label-1">What 3 Words</p>
          <p class="email">
            <a
              :href="'https://map.what3words.com/' + what3Words"
              target="_blank"
            >
              {{ what3Words }}
            </a>
          </p>
        </li>
        <li v-if="openingTimes" class="mb-medium item">
          <p class="label-1">Opening Times</p>
          <p v-kata-html="openingTimes" class="whitespace-pre-line" />
        </li>
        <li v-if="email" class="mb-medium item">
          <p class="label-1">Email</p>
          <p class="email">
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
import { title, text, textBody } from '../shared'
export default {
  mixins: [title, text, textBody],
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
    what3Words: {
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
    reversed: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.contact-2 {
  .columns {
    columns: 2 300px;
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
