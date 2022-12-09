<template>
  <div
    ref="teaseParagraphOverlay"
    class="tease-paragraph-overlay fade-up"
    :class="{ active: active }"
    @mouseenter="!isTouch ? toggleTile() : null"
    @mouseleave="!isTouch ? toggleTile() : null"
    @click="isTouch ? toggleTile() : null"
  >
    <div class="inner relative block">
      <KataImage
        v-if="image"
        :image="image"
        class="background object-cover w-full h-full"
        :lazy="lazy"
      />
      <div class="overlay">
        <div class="title">
          <p v-if="index" class="heading-1">{{ '0' + index }}</p>
          <h3 v-if="title" v-kata-html="title" class="label-1" />
        </div>
        <div class="body">
          <p
            v-if="text"
            v-kata-html="text"
            class="para-2 whitespace-pre-line"
          />
        </div>
      </div>
      <div class="bg-overlay bg-primary" />
    </div>
  </div>
</template>

<script>
import { title, image, text } from '../../slices/shared'
export default {
  mixins: [title, image, text],
  props: {
    index: {
      type: Number,
      default: 0,
    },
    link: {
      type: Object,
      default: null,
    },
    lazy: {
      type: Boolean,
      default: true, //if in slider and you don't want to lazy load image, pass this as false.
    },
  },
  data() {
    return {
      isTouch: false,
      active: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      const element = this.$refs.teaseParagraphOverlay
      if (process.client && element && element.querySelector('.title')) {
        let height = element.querySelector('.title').clientHeight
        element.querySelector('.overlay').style.paddingTop = height + 100 + 'px'
      }
    })
    if (process.client) {
      this.isTouch = this.is_touch_device()
    }
  },
  methods: {
    toggleTile() {
      this.active = !this.active
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
.tease-paragraph-overlay {
  .inner {
    background: black;
    transition: 0.5s ease;

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

  .bg-overlay {
    position: absolute;
    height: 0;
    width: 100%;
    z-index: 2;
    left: 0;
    bottom: 0;
    transition: 0.5s ease;
  }
  .overlay {
    z-index: 3;
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

  &.active .inner {
    transform: scale(1.05);
    &:after {
      height: 100%;
    }
    .body {
      opacity: 1;
      pointer-events: all;
    }
    .bg-overlay {
      height: 100%;
    }
    .title {
      transform: translateY(calc(-100% - 30px));
      bottom: unset;
    }
  }
}
</style>
