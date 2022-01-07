<template>
  <div class="pr-large">
    <div class="md:flex md:items-center">
      <div
        v-if="item.image"
        class="w-1/2 md:w-1/3 md:pr-medium mb-medium md:mb-0"
      >
        <KataImage
          :image="item.image"
          :max-width="500"
          :ratio="251 / 285"
          data-not-lazy
        />
      </div>
      <div :class="{ 'md:w-2/3 md:pl-medium': item.image }">
        <p
          v-if="item.quote"
          v-kata-html="item.quote"
          class="heading-3 mb-large"
        />
        <p v-if="item.name" v-kata-html="item.name" class="label-1" />
        <p v-if="item.job" v-kata-html="item.job" class="para-4 mt-1" />
        <KataLinks
          v-if="item.links && item.links.link"
          :links="item.links.link"
          class="mt-small"
        />
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
  },
}
</script>
