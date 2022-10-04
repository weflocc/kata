<template>
  <div
    v-if="cta07"
    class="slice cta-7 cta-7-serializer py-slice-half text-center"
  >
    <div class="title-wrap lg:px-r2/24">
      <h2
        v-if="cta07.title"
        v-kata-html="cta07.title"
        class="heading-2 mb-medium fade-up"
      />
      <SanityEmbedContent
        v-if="cta07.textBody"
        :blocks="cta07.textBody"
        class="mb-medium fade-up"
      />
    </div>

    <div
      v-if="cta07.list && cta07.list.length > 0"
      class="fade-up list grid items-center gap-medium"
    >
      <component
        :is="item.url ? 'a' : 'div'"
        v-for="item in cta07.list"
        :key="item._id"
        :href="item.url"
        class="logo-item"
        :title="item.title"
        :aria-label="item.title"
      >
        <KataSimpleImage
          v-if="item.logo"
          :image="item.logo"
          :title="item.title"
          width="100"
          height="100"
          class="w-[100px] h-[100px] object-contain"
        />
      </component>
    </div>
    <KataLinks v-if="cta07.links" :links="cta07.links" class="mt-medium" />
  </div>
</template>

<script>
export default {
  props: {
    cta07: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.cta-7 .list {
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  place-items: center;
}
</style>
