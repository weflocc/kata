<template>
  <div class="article-results-slideshow w-r24/24 mx-auto">
    <div class="md:flex">
      <ul
        class="md:w-1/2 md:pr-medium flex flex-col justify-between items-start"
      >
        <li
          v-for="(item, i) in articles"
          :key="i"
          class="border-primary border-l-2 flex-grow border-opacity-25 mb-0 transition-default featured-item"
          :class="{ 'border-opacity-100 active': i == activeArticle }"
          @mouseover="activeArticle = i"
        >
          <slot name="superHeading" :item="item" :i="i">
            <p class="label-2 pl-small opacity-30 featured-label">Featured</p>
          </slot>
          <nuxt-link
            :to="getLink(item._id)"
            class="mb-small inline-block pl-small hover:text-primary transition-default"
            :class="[i == activeArticle ? 'opacity-90' : 'opacity-30']"
          >
            <h3 class="heading-3 my-small">
              {{ item.title }}
            </h3>
            <p
              v-if="
                showCategories &&
                item[categoryField] &&
                item[categoryField].length
              "
              class="label-2 category"
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
          </nuxt-link>
        </li>
      </ul>
      <div
        class="md:w-1/2 image md:align-center pl-small md:pl-0 border-primary border-l-2 md:border-none relative"
      >
        <div
          v-for="(item, i) in articles"
          :key="item._id"
          class="slide-image"
          :class="{
            active: activeArticle == i,
          }"
        >
          <KataImage
            v-if="item.image"
            data-not-lazy
            :image="item.image"
            :ratio="4 / 3"
            class="h-full object-cover w-full"
            :sizes="sizes"
          />
        </div>
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
    interval: {
      type: Number,
      default: 5000,
    },
    categoryField: {
      type: String,
      default: 'category',
    },
    showCategories: {
      type: Boolean,
      default: true,
    },
    sizes: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      activeArticle: 0,
      timer: null,
    }
  },
  computed: {
    imgSrc() {
      return this.articles[this.activeArticle].image
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.next()
    }, this.interval)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    next() {
      if (this.activeArticle + 1 < this.articles.length) {
        this.activeArticle += 1
      } else {
        this.activeArticle = 0
      }
    },
    getLink(ref) {
      const link = this.$store.getters['references/getLinkFromReference'](ref)
      return link ? link.path : '/'
    },
  },
}
</script>

<style lang="scss">
.article-results-slideshow {
  .image {
    min-height: 50vh;
    position: relative;

    @include sm-down {
      min-height: 34vh; //roughly ratio
    }
  }
  .slide-image {
    @apply absolute top-0 left-small right-0 h-full;
    transition: opacity 1s ease-in;
    z-index: 1;
    opacity: 0;
    overflow: hidden;
    max-width: calc(100% - var(--spacing-small));

    &.active {
      z-index: 5;
      width: 100%;
      transition: 0;
      opacity: 1;
    }

    img {
      max-height: calc(100vh - var(--header-height));
      object-fit: cover;
      height: 100%;
      width: 100%;
      min-height: 100%;
      object-position: center center;
    }
  }
}
</style>
