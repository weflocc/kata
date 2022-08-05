<template>
  <div class="slice articles-featured-1 w-r24/24 mx-auto">
    <ul class="md:pr-medium grid md:grid-cols-4">
      <li
        v-for="(item, i) in list"
        :key="item._key || item._id"
        class="mb-0 transition-default featured-item"
        :class="{ 'md:col-span-2 large-thumb': i % 2 }"
      >
        <slot name="tease" :item="item">
          <nuxt-link
            :to="getLink(item._id)"
            class="mb-small inline-block pl-small hover:text-primary transition-default"
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
    <button @click="toggleList">
      {{ showAll ? 'Show less' : 'Show more' }}
    </button>
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
  data: () => ({ showAll: false, list: [] }),
  // computed: {
  //   firstList() {
  //     let arr = this.articles
  //     if (this.articles?.length) {
  //       arr = arr.slice(0, 3)
  //     }
  //     return arr
  //   },
  //   secondList() {
  //     let arr = this.articles
  //     if (this.articles?.length > 3) {
  //       arr = arr.slice(3, arr.length)
  //     }
  //     return arr
  //   },
  // },
  beforeMount() {
    let arr = this.articles
    if (this.articles?.length) {
      arr = arr.slice(0, 3)
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
