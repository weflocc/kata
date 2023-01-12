<template>
  <div class="testimonial-2-part">
    <div class="md:flex md:items-center">
      <div
        v-if="item.media"
        class="w-1/2 md:w-1/3 md:pr-medium mb-medium md:mb-0 media-wrap"
      >
        <!-- can pass in ratio = null to display icon/logo instead -->
        <KataMedia
          :media="item.media"
          :max-width="700"
          :ratio="ratio"
          :no-crop="ratio ? false : true"
          :lazy="false"
        />
      </div>
      <div
        v-else-if="item.image"
        class="w-1/2 md:w-1/3 md:pr-medium mb-medium md:mb-0 image"
      >
        <!-- can pass in ratio = null to display icon/logo instead -->
        <KataImage
          v-if="ratio"
          :image="item.image"
          :max-width="500"
          :ratio="ratio"
          :lazy="false"
        />
        <KataSimpleImage
          v-else
          :image="item.image"
          :max-width="500"
          :lazy="false"
        />
      </div>
      <div class="text" :class="{ 'md:w-2/3 md:pl-medium': item.image }">
        <p
          v-if="item.quote"
          v-kata-html="item.quote"
          class="heading-3 mb-large"
        />
        <p v-if="item.name" v-kata-html="item.name" class="label-1" />
        <p v-if="item.job" v-kata-html="item.job" class="para-4 mt-1" />
        <KataLinks v-if="item.links" :links="item.links" class="mt-small" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
    ratio: {
      type: Number,
      default: 251 / 285,
    },
  },
}
</script>
