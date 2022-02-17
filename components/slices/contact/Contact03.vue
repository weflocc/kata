<template>
  <div class="slice contact-3 md:flex mx-auto w-r10/12">
    <div class="mb-large md:mb-0 md:w-1/2 md:pr-r1/12 title">
      <h1
        v-if="isH1 && title"
        v-kata-html="title"
        class="heading-2 mb-medium"
      />
      <h2 v-else-if="title" v-kata-html="title" class="mb-medium" />
      <p
        v-if="text"
        v-kata-html="text"
        class="fade-up mt-medium whitespace-pre-lines"
      />
    </div>
    <div class="md:w-1/2 body">
      <div v-if="address" class="mb-medium">
        <p v-if="!hideLabels" class="label-1">Address</p>
        <p v-kata-html="address" class="whitespace-pre-line" />
      </div>
      <div v-if="email" class="mb-medium">
        <p v-if="!hideLabels" class="label-1">Email</p>
        <p>
          <a :href="'mailto:' + email">{{ email }}</a>
        </p>
      </div>
      <div v-if="telephone" class="mb-medium">
        <p v-if="!hideLabels" class="label-1">Telephone</p>
        <p>
          <a :href="'tel:' + telephone">{{ telephone }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { title, text } from '../shared'
export default {
  mixins: [title, text],
  props: {
    isH1: {
      type: Boolean,
      default: false,
    },
    hideLabels: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    telephone: {
      type: String,
      default: '',
    },
  },
}
</script>
