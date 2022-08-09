<template>
  <div class="slice articles-featured-1 w-r24/24 mx-auto">
    <ul class="grid lg:grid-cols-4 grid-flow-row-dense gap-small w-full">
      <li
        v-for="(item, i) in list"
        :key="item._key || item._id"
        class="mb-0 transition-default featured-item"
        :class="{ 'md:col-span-2 large-thumb': i % 2 && !(i % 4 == 0) }"
      >
        <slot name="tease" :item="item" :index="i">
          <nuxt-link
            :to="getLink(item._id)"
            class="inline-block hover:text-primary transition-default w-full"
          >
            <KataImage
              v-if="item.thumbnailImage || item.image"
              :image="item.thumbnailImage || item.image"
              :ratio="ratio"
              class="h-full object-cover w-full mb-small"
              :sizes="sizes"
            />
            <p v-if="item.date" class="para-3">
              {{ item.date | formatDate }}
            </p>
            <h3 class="label-2 mt-[7px]">
              {{ item.title }}
            </h3>
          </nuxt-link>
        </slot>
      </li>
    </ul>
    <div v-if="hasMore" class="text-center mt-small">
      <button class="btn-secondary" @click="toggleList">
        {{ showAll ? 'Show less' : 'Load more' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
    sizes: {
      type: String,
      default: '',
    },
    ratio: {
      type: Number,
      default: 4 / 3,
    },
  },
  data: () => ({ showAll: false, list: [], hasMore: false }),
  beforeMount() {
    let arr = this.articles
    if (this.articles?.length > 3) {
      arr = arr.slice(0, 3)
      this.hasMore = true
    }
    this.list = arr
  },
  methods: {
    getLink(ref) {
      const link = this.$store.getters['references/getLinkFromReference'](ref)
      return link ? link.path : '/'
    },
    toggleList() {
      this.showAll = !this.showAll
      if (this.showAll) {
        this.list = this.articles
      } else {
        let arr = this.articles
        if (this.articles?.length) {
          arr = arr.slice(0, 3)
        }
        this.list = arr
      }
    },
  },
}
</script>

<style lang="scss">
.articles-featured-1 {
}
</style>
