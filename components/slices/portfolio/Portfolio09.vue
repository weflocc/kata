<template>
  <div class="portfolio-9 w-r10/12 mx-r1/12">
    <div class="mb-large text-center">
      <h2 v-if="title" v-kata-html="title" class="heading-2 fade-up" />
      <p v-if="text" v-kata-html="text" class="mt-medium fade-up" />
    </div>
    <div v-if="list" class="flex flex-wrap sm:-mr-medium sm:content-start">
      <div
        v-for="(item, index) in list"
        :key="item.title"
        ref="items"
        class="item md:w-1/3 sm:w-1/2 sm:pr-medium mb-medium fade-up"
        @mouseenter="!isTouch ? toggleTile(index) : null"
        @mouseleave="!isTouch ? toggleTile(index) : null"
        @click="isTouch ? toggleTile(index) : null"
      >
        <component
          :is="item.link ? 'n-link' : 'div'"
          :to="item.link"
          class="relative block"
        >
          <KataImage
            v-if="item.image"
            :image="item.image"
            :ratio="3 / 4"
            :max-width="650"
            sizes="(max-width:699px) 95vw, (max-width:700px) 50vw, 33vw"
            class="background"
          />
          <div v-else class="background bg-primary" />
          <div class="overlay">
            <div class="title">
              <p v-if="autoNumber" class="heading-1">{{ '0' + (index + 1) }}</p>
              <h3 v-if="item.title" v-kata-html="item.title" class="label-1" />
            </div>
            <div class="body">
              <p
                v-if="item.text"
                v-kata-html="item.text"
                class="para-2 whitespace-pre-line"
              />
            </div>
          </div>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import { title, text, list } from '../shared'
export default {
  mixins: [title, text, list],
  props: {
    autoNumber: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isTouch: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      for (let index = 0; index < this.list.length; index++) {
        const element = this.$refs.items[index]
        element.classList.remove('active')
        if (process.client && element.querySelector('.title')) {
          let height = element.querySelector('.title').clientHeight
          element.querySelector('.overlay').style.paddingTop =
            height + 100 + 'px'
        }
      }
    })
    if (process.client) {
      this.isTouch = this.is_touch_device()
    }
  },
  methods: {
    toggleTile(index) {
      this.$refs.items[index].classList.toggle('active')
    },
    is_touch_device() {
      if ('ontouchstart' in window || navigator.maxTouchPoints) {
        //window.TouchEvent
        console.log('touch start')
        return true
      }

      if (window.DocumentTouch && document instanceof DocumentTouch) {
        console.log('DocumentTouch')
        return true
      }

      const prefixes = ['', '-webkit-', '-moz-', '-o-', '-ms-']
      const queries = prefixes.map((prefix) => `(${prefix}touch-enabled)`)

      return window.matchMedia(queries.join(',')).matches
    },
  },
}
</script>

<style scoped lang="scss">
.portfolio-9 {
  .relative {
    height: 100%;
    width: 100%;
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    transition: 0.7s ease;

    &:after {
      content: '';
      height: 0;
      width: 100%;
      background: $primary;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      transition: 0.7s ease;
    }
  }

  .item {
    @media (max-width: 1150px) {
      width: 50%;
    }
  }

  .item .block {
    background: black;

    img.loaded {
      opacity: 0.8 !important;
    }
  }

  .background {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    top: 0;
    left: 0;
  }
  .overlay {
    z-index: 2;
    position: relative;
    padding: 150px 20px 20px;
    color: white;
    height: 100%;

    @include sm-down {
      padding-top: 200px;
    }
  }

  .body {
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
    transition: 1s ease;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
  }

  .title {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    transition: 0.7s ease;

    h3 {
      margin: 0;
    }
  }

  .active .relative {
    transform: scale(1.05);
    &:after {
      height: 100%;
    }
    .body {
      opacity: 1;
      pointer-events: all;
    }
    .title {
      transform: translateY(calc(-100% - 30px));
      bottom: unset;
    }
  }
}
</style>

<style lang="scss">
.portfolio-9 {
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
