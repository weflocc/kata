@@ -0,0 +1,34 @@
<template>
  <div v-if="item" class="md:px-r1/12 text-center">
    <p
      v-if="item.quote"
      v-kata-html="item.quote"
      class="heading-3 mb-large fade-up"
    />
    <KataSimpleImage
      :image="item.image"
      width="100"
      height="100"
      data-not-lazy
      class="mx-auto mb-small rounded-full fade-up object-cover w-[100px] h-[100px]"
    />
    <p v-if="item.name" v-kata-html="item.name" class="label-1 fade-up" />
    <p v-if="item.job" v-kata-html="item.job" class="para-4 mt-1 fade-up" />
    <KataLinks
      v-if="item.links && item.links.link"
      :links="item.links.link"
      class="mt-small fade-up"
    />
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
