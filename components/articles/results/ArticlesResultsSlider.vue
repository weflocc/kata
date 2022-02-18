<template>
  <div ref="listItems" v-observe-visibility="visibilityChanged">
    <VueSlickCarousel
      v-if="articles"
      v-bind="settings"
      class="article-results-slider pl-r2/24"
    >
      <template #prevArrow="arrowOption">
        <button
          class="carousel-nav prev focus:outline-none mb-medium"
          title="Previous Slide"
        >
          <span></span>
        </button>
      </template>
      <div v-for="item in articles" :key="item._id" class="px-small slide-item">
        <slot name="tease" :item="item" class="fade-up">
          <ArticlesTeaseWithImage
            :item-id="item._id"
            :link="getLink(item._id)"
            :title="item.title"
            :image="item.image"
          />
        </slot>
      </div>
      <template #nextArrow="arrowOption">
        <button class="carousel-nav next focus:outline-none" title="Next Slide">
          <span></span>
        </button>
      </template>
    </VueSlickCarousel>
    <p v-else>No results found.</p>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  props: {
    articles: {
      default: function () {
        return []
      },
      type: Array,
    },
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 3.5,
        infinite: false,
        responsive: [
          {
            breakpoint: 100,
            settings: {
              slidesToShow: 2.5,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1.2,
              autoplaySpeed: 2000,
            },
          },
        ],
      },
    }
  },
  mounted() {
    this.size()
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        this.size()
      }
    },
    size() {
      if (process.client) {
        // this.$nextTick(() => {
        //   let all = this.$refs.listItems.querySelectorAll('.slick-slide')
        //   let height = 0
        //   // console.log(all)
        //   if (all) {
        //     all.forEach((element) => {
        //       element.style.height = 'auto'
        //       if (element.offsetHeight > height) {
        //         height = element.offsetHeight
        //       }
        //     })
        //     all.forEach((element) => {
        //       // console.log(element, height)
        //       element.style.height = height + 'px'
        //       // console.log(element, height)
        //     })
        //   }
        // })
      }
    },
  },
}
</script>

<style lang="scss">
.article-results-slider {
  position: relative;

  .slick-disabled {
    opacity: 0;
    pointer-events: none;
  }

  .carousel-nav {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;

    &.prev {
      left: 30px;
    }
    &.next {
      right: 30px;
    }

    @include sm-down {
      &.next {
        right: 10px;
      }
      &.prev {
        left: 10px;
      }
    }
  }
}
</style>
