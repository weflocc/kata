<template>
  <div class="slice feature-9 w-r10/12 mx-r1/12 fade-up">
    <h2 v-if="title" v-kata-html="title" class="text-center mb-large" />
    <transition-group
      name="fade-list"
      class="flex sm:-mx-small mb-large flex-wrap justify-between items-center"
      tag="div"
    >
      <div
        v-for="(item, i) in list"
        :key="item._key"
        class="inline-block transition-all duration-500 mb-small w-full sm:w-auto"
      >
        <button
          class="sm:mx-small label-1 text-left w-full sm:w-auto sm:text-center tab-btn"
          :class="{
            active: i == currentTab,
          }"
          @click="click(i)"
        >
          {{ item.tabName }}
        </button>
      </div>
    </transition-group>

    <transition-group
      name="staggered-fade"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-for="(item, i) in list"
        v-show="i == currentTab"
        :key="item._key"
        class="sm:flex flex-wrap list-fade-item sm:-mx-small"
      >
        <div
          v-for="elem in item.features"
          :key="elem._key"
          class="sm:px-small mb-medium sm:w-1/2"
        >
          <h2
            v-if="elem.title"
            v-kata-html="elem.title"
            class="mb-small label-1"
          />
          <SanityEmbedContent v-if="elem.textBody" :blocks="elem.textBody" />
        </div>
        <KataLinks
          v-if="item.links && item.links.link"
          class="sm:px-small mb-medium sm:w-1/2 self-end"
          :links="item.links.link"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
// you can pass in a intial tab, .e.g your parent componnent might do this:
// computed: {
//     initialActionsTab() {
//       switch (this.$route.params.slug) {
//         case 'discovery-attraction':
//           return 2
//         case 'innovation-accelerator':
//           return 1
//         default:
//           return 0
//       }
//     },
//   },

import { title, list } from '../shared'
export default {
  mixins: [title, list],
  props: {
    initialTab: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentTab: this.initialTab,
    }
  },
  methods: {
    click(i) {
      this.currentTab = i
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      setTimeout(function () {
        el.style.height = 'auto'
        el.style.opacity = 1
        setTimeout(function () {
          done()
        }, 500)
      }, 500)
    },
    leave: function (el, done) {
      el.style.opacity = 0
      setTimeout(function () {
        el.style.height = 0
        done()
      }, 500)
    },
  },
}
</script>

<style lang="scss" scoped>
.list-fade-item {
  transition: all 0.5s;
}
.tab-btn {
  outline: none !important;
  appearance: none;
  border-bottom: 2px solid rgba($primary, 0.25);
  transition: 0.4s ease;
  &.active,
  &:hover {
    border-color: rgba($secondary, 1);
  }
}
</style>
