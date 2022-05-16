<template>
  <div ref="listItems" v-observe-visibility="visibilityChanged">
    <VueSlickCarousel
      v-if="articles"
      v-bind="settings"
      class="article-results-slider xl:w-r24/24 xl:mx-auto"
    >
      <div v-for="item in articles" :key="item._id" class="slide-item">
        <slot name="tease" :item="item" class="fade-up">
          <component
            :is="getLink(item._id) ? 'nuxt-link' : 'div'"
            :to="getLink(item._id)"
            class="slide-tease relative stack-children items-end"
          >
            <KataImage
              v-if="item.thumbnailImage || item.image"
              :image="item.thumbnailImage || item.image"
              :max-width="2000"
              :ratio="16 / 9"
              width="1600"
              height="900"
              sizes="100vw"
              class="w-full"
            />
            <div class="overlay text-white p-r1/24">
              <p
                v-if="superHeading"
                v-kata-html="superHeading"
                class="label-1 mt-small"
              />
              <h3 v-if="item.title" v-kata-html="item.title" class="mt-small" />
              <DraftLabel v-if="item._id" :id="itemId" />
              <p
                v-if="item.text"
                v-kata-html="item.text"
                class="para-2 mt-small"
              />
              <p
                v-if="readMoreText"
                v-kata-html="readMoreText"
                class="btn-secondary mt-small"
              />
            </div>
          </component>
        </slot>
      </div>
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
      default: null,
      type: Array,
    },
    readMoreText: {
      default: '',
      type: String,
    },
    superHeading: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
      },
    }
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

  .overlay {
    background: linear-gradient(
      360deg,
      rgba(black, 0.75) 7.41%,
      transparent 82.87%
    );
  }

  .slick-dots {
    @apply right-small bottom-small absolute z-10 w-auto;

    li button:before {
      color: white;
      font-size: 15px;
    }
  }
}
</style>
