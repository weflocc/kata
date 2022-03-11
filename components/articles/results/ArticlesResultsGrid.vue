<template>
  <transition-group
    v-if="articles && articles.length > 0"
    :class="ulClass"
    class="articles-results-grid"
    tag="ul"
    name="fade"
    mode="out-in"
  >
    <li v-for="item in articles" :key="item._id">
      <slot name="tease" :item="item">
        <ArticlesTeaseWithImage
          :item-id="item._id"
          :link="getLink(item._id)"
          :title="item.title"
          :image="item.image"
        />
      </slot>
    </li>
  </transition-group>
  <p v-else class="no-results">No results found</p>
</template>

<script>
export default {
  props: {
    cols: {
      type: String,
      default: '3',
    },
    articles: {
      default: function () {
        return []
      },
      type: Array,
    },
  },
  computed: {
    ulClass() {
      switch (this.cols) {
        case '4':
          return 'w-full grid gap-medium grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        case '2':
          return 'w-full grid gap-medium grid-cols-1 lg:grid-cols-2'
        default:
          return 'w-full grid gap-medium grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
      }
    },
  },
}
</script>
