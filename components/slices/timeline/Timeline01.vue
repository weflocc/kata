<template>
  <div class="slice timeline-1 text-center">
    <div v-if="title || text" class="mb-large w-r10/12 mx-auto">
      <h2 v-kata-html="title" class="fade-up heading-2" />
      <!-- <p v-if="text" v-kata-html="text" class="mt-medium fade-up" /> -->
    </div>
    <VueSlickCarousel v-if="list" v-bind="settings" class="news-3-slider">
      <template #prevArrow="arrowOption">
        <button
          class="carousel-nav prev focus:outline-none mb-medium"
          title="Previous Slide"
        >
          <span></span>
        </button>
      </template>
      <div
        v-for="(item, index) in list"
        :key="item.title ? item.title : index"
        class="fade-up item"
      >
        <KataSimpleImage
          v-if="item.icon && item.icon._ref"
          :image="item.icon"
          width="50"
          height="50"
          class="mb-small mx-auto"
        />
        <h3
          v-if="item.title"
          v-kata-html="item.title"
          class="label-1 mb-small px-medium"
        />
        <div
          class="checkbox mb-small w-full relative"
          :class="{ checked: isChecked(item.tickDate) }"
        >
          <span class="m-auto relative block"></span>
        </div>
        <p
          v-if="item.displayDate"
          v-kata-html="item.displayDate"
          class="para-2 font-bold px-medium"
        />
        <p v-if="item.text" v-kata-html="item.text" class="para-2 px-medium" />
      </div>
      <template #nextArrow="arrowOption">
        <button class="carousel-nav next focus:outline-none" title="Next Slide">
          <span></span>
        </button>
      </template>
    </VueSlickCarousel>
    <KataLinks v-if="links" :links="links" />
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { title, text, links, list } from '../shared'
export default {
  components: { VueSlickCarousel },
  mixins: [title, text, links, list],
  data() {
    return {
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 3,
        centerMode: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              autoplaySpeed: 3000,
            },
          },
        ],
      },
    }
  },
  methods: {
    isChecked(date) {
      let today = new Date()
      let thisDate = new Date(date)

      if (today > thisDate) {
        return true
      }
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.timeline-1 {
  .slick-track {
    display: flex;
    align-items: center;

    .slick-slide > div {
      height: 100%;
    }
  }
  .carousel-nav {
    position: absolute;
    z-index: 50;

    &.prev {
      left: var(--screen-border-size);
    }
    &.next {
      right: var(--screen-border-size);
    }
  }
  .checkbox {
    span {
      border: 2px $secondary solid;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      transition: 0.5s ease;

      &:after {
        content: '';
        width: 7px;
        height: 12px;
        position: absolute;
        left: 1px;
        right: 0;
        top: 0;
        bottom: 2px;
        margin: auto;
        border-bottom: 3px solid white;
        border-right: 3px solid white;
        transform: rotate(45deg);
        opacity: 0;
        transition: 0.5s ease;
      }
    }

    &:before,
    &:after {
      content: '';
      width: calc(50% - 15px);
      height: 2px;
      background: $secondary;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }

    &.checked {
      span {
        background: $secondary;

        &:after {
          opacity: 1;
        }
      }
    }
  }
}
</style>
