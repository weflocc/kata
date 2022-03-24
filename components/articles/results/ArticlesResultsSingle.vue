<template>
  <div class="article-results-single">
    <div v-if="item" class="md:flex md:justify-between">
      <div class="md:w-1/2 image">
        <transition name="fade" mode="out-in">
          <KataImage
            v-if="item.thumbnailImage || item.image"
            :image="item.thumbnailImage || item.image"
            sizes="50vw"
            :max-width="1000"
            :ratio="ratio"
            class="h-full w-full object-cover"
          />
        </transition>
      </div>
      <div
        class="md:w-1/2 px-r2/24 md:pl-large py-slice-half md:flex md:items-center"
      >
        <nuxt-link
          :to="getLink(item._id)"
          class="block w-full"
          :title="item.title"
        >
          <slot name="aboveTitle" :item="item">
            <p
              v-if="
                categoryField &&
                item[categoryField] &&
                item[categoryField].length
              "
              class="label-2 mb-small"
            >
              <span v-for="(tag, x) in item[categoryField]" :key="tag._key">
                {{
                  $store.getters['references/getFieldByRef']({
                    field: 'title',
                    ref: tag._ref,
                  })
                }}
                <span v-if="x != item[categoryField].length - 1">,</span>
              </span>
            </p>
            <p v-else class="label-2 mb-small">Featured</p>
          </slot>
          <h3 class="heading-3">
            {{ item.title }}
          </h3>
          <slot name="belowTitle" :item="item"></slot>
          <p class="btn-secondary read-more-btn mt-medium inline-block">
            Read More
          </p>
        </nuxt-link>
      </div>
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
    categoryField: {
      type: String,
      default: 'category',
    },
    ratio: {
      type: Number,
      default: 4 / 3,
    },
  },
  computed: {
    item() {
      return this.articles ? this.articles[0] : null
    },
  },
  methods: {
    getLink(ref) {
      const link = this.$store.getters['references/getLinkFromReference'](ref)
      return link ? link.path : '/'
    },
  },
}
</script>

<style lang="scss" scoped>
.article-results-single {
  @include md-up {
    img {
      min-height: 75vh;
    }
  }
}
</style>
