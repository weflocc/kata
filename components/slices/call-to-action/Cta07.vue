<template>
  <div class="slice cta-7 w-r10/12 mx-auto text-center">
    <div class="title-wrap lg:px-r1/12">
      <h2
        v-if="title"
        v-kata-html="title"
        class="heading-2 mb-medium fade-up"
      />
      <SanityEmbedContent
        v-if="textBody"
        :blocks="textBody"
        class="mb-medium fade-up"
      />
    </div>

    <div
      v-if="list && list.length > 0"
      class="fade-up list grid items-center gap-medium"
    >
      <div v-for="item in list" :key="item._id" class="logo-item">
        <KataSimpleImage
          v-if="item"
          :image="item"
          width="100"
          height="100"
          class="w-[100px] h-[100px] object-contain"
        />
      </div>
    </div>
    <KataLinks v-if="links" :links="links" class="mt-medium" />
  </div>
</template>

<script>
import { title, textBody, links, list } from '../shared'
export default {
  mixins: [title, textBody, links, list],
}
</script>

<style lang="scss" scoped>
.cta-7 .list {
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  place-items: center;
}
</style>
