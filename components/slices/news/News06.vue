<template>
  <div class="news-6 slice w-r24/24 mx-auto md:flex relative md:items-start">
    <div
      class="left md:w-r14/24 xl:w-1/2 md:pr-small md:sticky mb-large md:mb-0"
    >
      <h2
        v-if="title"
        v-kata-html="title"
        class="mb-medium sm:mb-small fade-up"
      />
      <p v-if="text" v-kata-html="text" class="mb-medium sm:mb-small fade-up" />
      <slot name="featuredTease" :item="featured">
        <ArticlesTeaseWithImage
          v-if="featured"
          v-bind="featured"
          :link="getLink(featured._id)"
          :ratio="660 / 367"
          class="fade-up"
        />
      </slot>
    </div>
    <div class="right md:w-r6/24 xl:w-1/2 md:pt-[9%]">
      <div
        v-if="list && list.length"
        class="list grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-medium md:gap-small grid"
      >
        <template v-for="item in list">
          <slot name="tease" :item="item" class="fade-up">
            <ArticlesTeaseWithImage
              :key="item._id"
              v-bind="item"
              class="list-element fade-up"
              :link="getLink(item._id)"
            />
          </slot>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { title, text, list } from '../shared'
export default {
  mixins: [title, text, list],
  props: {
    featured: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.news-6 .left {
  @include md-up {
    top: calc(var(--header-height) + var(--spacing-small));
  }
}
</style>
