<template>
  <div class="slice articles-featured-1 w-r24/24 mx-auto">
    <ul class="flex flex-wrap gap-medium w-full">
      <li
        v-for="(item, i) in list"
        :key="item._key || item._id"
        class="mb-0 transition-default featured-item"
        :class="{
          'md:w-1/2 large-thumb': i == 1,
          'md:w-1/4 top-thumb': i == 0 || i == 2,
          'md:w-1/3 standard-thumb': i > 2,
        }"
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
    <slot name="below">
      <div v-if="hasMore" class="text-center mt-medium">
        <button class="btn-secondary" @click="toggleList">
          <!-- {{ showAll ? 'Show less' : 'Load more' }} -->
          Load more
        </button>
      </div>
    </slot>
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
  data: () => ({ showAll: false, list: [], hasMore: false, showNum: 3 }),
  watch: {
    articles() {
      this.showNum = 3
      this.setList(this.showNum)
    },
  },
  beforeMount() {
    this.setList(this.showNum)
  },
  methods: {
    setList(n) {
      let arr = this.articles
      if (this.articles?.length >= n) {
        arr = arr.slice(0, n)
        this.hasMore = true
      } else if (this.list.length < n) {
        arr = arr.slice(0, n)
        this.hasMore = false
      }

      if (this.articles.length <= n) {
        this.hasMore = false
      }
      this.list = arr
    },
    getLink(ref) {
      const link = this.$store.getters['references/getLinkFromReference'](ref)
      return link ? link.path : '/'
    },
    toggleList() {
      if (this.hasMore) {
        this.showNum += 3
        this.setList(this.showNum)
      }
      // this.showAll = !this.showAll
      // if (this.showAll) {
      //   this.list = this.articles
      // } else {
      //   this.setList()
      // }
    },
  },
}
</script>

<style lang="scss">
.articles-featured-1 {
  .large-thumb {
    @include md-up {
      width: calc(50% - var(--spacing-medium));
    }
  }
  .top-thumb {
    @include md-up {
      width: calc(25% - var(--spacing-medium));
    }
  }
  .standard-thumb {
    @include md-up {
      width: calc(33.33% - var(--spacing-medium));
    }
  }
}
</style>
