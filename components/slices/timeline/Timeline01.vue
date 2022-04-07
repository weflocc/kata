<template>
  <div class="slice timeline-1 text-center">
    <div v-if="title || text" class="mb-large w-r24/24 mx-auto">
      <h2 v-kata-html="title" class="fade-up heading-2" />
      <!-- <p v-if="text" v-kata-html="text" class="mt-medium fade-up" /> -->
    </div>
    <VueSlickCarousel v-if="list" v-bind="settings" class="timeline-1-slider">
      <template #prevArrow="arrowOption">
        <button
          class="carousel-nav prev focus:outline-none mb-medium"
          title="Previous Slide"
          :style="
            height > 0 ? `top: calc(${height}px + var(--spacing-small))` : ''
          "
        >
          <span></span>
        </button>
      </template>
      <div
        v-for="(item, index) in list"
        :key="item.title ? item.title : index"
        class="fade-up item"
      >
        <div
          class="top-wrap mb-small"
          :style="height > 0 ? `min-height: ${height}px` : ''"
        >
          <KataSimpleImage
            v-if="item.icon && item.icon.asset._ref"
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
        </div>
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
        <button
          class="carousel-nav next focus:outline-none"
          title="Next Slide"
          :style="
            height > 0 ? `top: calc(${height}px + var(--spacing-small))` : ''
          "
        >
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
      height: 0,
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 3,
        initialSlide: 1,
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
              initialSlide: 0,
            },
          },
        ],
      },
    }
  },
  mounted() {
    this.setMinHeight()
  },
  created() {
    if (process.client) {
      window.addEventListener('resize', this.setMinHeight)
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('resize', this.setMinHeight)
    }
  },
  methods: {
    setMinHeight() {
      if (process.client) {
        let titles = document.querySelectorAll('.timeline-1 .item .top-wrap')
        if (titles) {
          let newHeight = 0
          titles.forEach((elem) => {
            let height = elem.clientHeight
            if (height > newHeight) {
              newHeight = height
            }
          })
          this.height = newHeight
        }
      }
    },
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

<style lang="scss">
.timeline-1 {
  .slick-track {
    display: flex;
    // // align-items: center;

    // .slick-slide {
    //   height: unset;
    // }

    // .slick-slide > div,
    // .item {
    //   height: 100%;
    // }

    // .item {
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: center;
    // }
  }
}
</style>

<style lang="scss" scoped>
.timeline-1 {
  .carousel-nav {
    position: absolute;
    z-index: 50;
    transform: translateY(0); //override of slick css

    &.prev {
      left: var(--container-margin);
    }
    &.next {
      right: var(--container-margin);
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
