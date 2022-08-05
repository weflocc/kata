<template>
  <li
    ref="item"
    class="nav-link-wrap mb-0"
    :class="{
      'has-children relative': list && list.length > 0,
    }"
    @mouseover="list && list.length && !isMobile ? openChild() : null"
    @mouseleave="list && list.length && !isMobile ? closeChild() : null"
  >
    <component
      :is="
        getLinkComponent(singleLink) == 'div'
          ? 'button'
          : getLinkComponent(singleLink)
      "
      class="nav-link inline-block lg:pointer-events-all"
      :class="{
        'cursor-pointer': list && list.length && !isMobile,
      }"
      :to="getSingleLink(singleLink)"
      :href="getSingleLink(singleLink)"
      :target="getLinkComponent(singleLink) == 'a' ? '_blank' : '_self'"
      @click.native="getLinkComponent(singleLink) != 'div' ? onClick() : ''"
      @click="getLinkComponent(singleLink) != 'a' ? toggleChild() : ''"
      v-html="title ? title : linkTitle(singleLink).title"
    />

    <button
      v-if="list && list.length"
      ref="dropdownTrigger"
      title="Show/Hide Child Menu"
      class="inline-block lg:hidden dropdown-trigger border-none"
      :class="{ active: visible }"
      @click="toggleChild()"
    ></button>

    <!-- <transition
      name="dropdown"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    > -->
    <ul
      v-show="list && list.length"
      ref="childMenu"
      :class="{ open: visible }"
      class="child-menu"
    >
      <KataMenuBarItem
        v-for="child in list"
        :key="child._key"
        v-bind="child"
        :click-fn="clickFn"
      />
    </ul>
    <!-- </transition> -->
  </li>
</template>

<script>
import { title, list, singleLink } from '../../slices/shared'
export default {
  mixins: [title, list, singleLink],
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
    clickFn: {
      type: Function,
      default: () => {
        console.log('no click function')
      },
    },
  },
  data: () => ({ visible: false }),
  methods: {
    start(el, done) {
      el.style.height = el?.scrollHeight + 'px'
      done
    },
    end(el) {
      el.style.height = ''
    },
    openChild() {
      if (this.list && this.list.length > 0) {
        this.visible = true
      }
    },
    closeChild() {
      this.visible = false
    },
    toggleChild() {
      if (this.list && this.list.length > 0) {
        this.visible = !this.visible
      }
    },
    onClick() {
      this.visible = false
      // run click function
      this.clickFn()
    },
    linkTitle(item) {
      if (item?.internalLink?._ref) {
        let ref = item?.internalLink?._ref
        return this.$store.getters['references/getLinkFromReference'](ref)
      }
      return ''
    },
  },
}
</script>

<style lang="scss" scoped>
.child-menu {
  opacity: 0;
  pointer-events: none;
  transition: 0.4s ease;
  &.open {
    opacity: 1;
    pointer-events: all;
  }
  a {
    margin-bottom: 7px;
    transition: 0.4s ease;

    &:hover {
      color: $primary;
    }
  }
  @include lg-up {
    background: white;
    padding: 15px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin: auto;
    min-width: 200px;
  }
  @include lg-down {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, opacity 0.4s ease;

    &.open {
      max-height: 100%;
    }
  }
}
.dropdown-trigger {
  position: relative;
  width: 20px;
  height: 20px;
  line-height: 1;
  outline: none !important;

  &::before {
    border-style: solid;
    border-width: 2px 2px 0 0;
    border-color: $primary;
    content: '';
    display: inline-block;
    height: 50%;
    transition: 0.5s ease;
    transform: rotate(135deg);
    width: 50%;
    position: absolute;
    top: -5px;
    left: 0;
    right: 0;
    margin: auto;
  }

  &.active {
    &:before {
      transform: rotate(-45deg);
      top: 0;
    }
  }
}
// @include lg-down {
//   .dropdown-enter-active,
//   .dropdown-leave-active {
//     will-change: height, opacity;
//     transition: height 0.3s ease, opacity 0.3s ease;
//     overflow: hidden;
//   }

//   .dropdown-enter,
//   .dropdown-leave-to {
//     height: 0 !important;
//     opacity: 0;
//   }
// }
</style>
