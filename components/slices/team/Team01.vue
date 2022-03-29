<template>
  <div class="slice team-1 mx-auto w-r24/24">
    <div class="mb-large heading-wrap">
      <h2 v-if="title" v-kata-html="title" class="fade-up" />
      <p v-if="text" v-kata-html="text" class="mt-medium fade-up" />
    </div>
    <div
      v-if="list && list != null && list.length"
      class="mb-large gap-small grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div
        v-for="item in list"
        :key="item._key"
        class="fade-up person-thumbnail"
      >
        <slot name="tease" :item="item">
          <component
            :is="getLinkComponent(item.singleLink)"
            class="thumbnail-inner"
            :to="getSingleLink(item.singleLink)"
            :href="getSingleLink(item.singleLink)"
            :target="
              getLinkComponent(item.singleLink) == 'a' ? '_blank' : '_self'
            "
          >
            <KataImage
              :image="item.image"
              :ratio="3 / 4"
              class="mb-small max-h-[70vh] object-cover"
            />
            <h3
              v-if="item.title"
              v-kata-html="item.title"
              class="mb-small label-1"
            />
            <p v-if="item.job" v-kata-html="item.job" class="para-2" />
            <SanityContent
              v-if="item.textBody"
              :blocks="item.textBody"
              class="para-4 mt-small small-embed-content"
            />
          </component>
        </slot>
      </div>
    </div>
    <div v-if="links" class="text-center">
      <KataLinks :links="links" />
    </div>
  </div>
</template>

<script>
import { title, text, links, list } from '../shared'
export default {
  mixins: [title, text, links, list],
}
</script>

<style lang="scss">
.team-1 {
  .small-embed-content {
    p {
      @include fluid-type(14px, 16px);
    }
  }
}
</style>
