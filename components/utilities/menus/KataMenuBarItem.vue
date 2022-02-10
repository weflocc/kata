<template>
  <li
    ref="item"
    class="nav-link-wrap mb-0"
    :class="{
      'has-children relative': list && list.length > 0,
    }"
    @mouseover="list && list.length && !isMobile ? openChild(item, i) : null"
    @mouseleave="list && list.length && !isMobile ? closeChild(item, i) : null"
  >
    <component
      :is="getLinkComponent(singleLink)"
      class="nav-link inline-block"
      :class="{ 'cursor-pointer': list && list.length && !isMobile }"
      :to="getSingleLink(singleLink)"
      :href="getSingleLink(singleLink)"
      :target="getLinkComponent(singleLink) == 'a' ? '_blank' : '_self'"
      @click.native="clickFn"
      v-html="title ? title : linkTitle(singleLink).title"
    />

    <button
      v-if="list && list.length"
      ref="dropdownTrigger"
      title="Show/Hide Child Menu"
      class="inline-block lg:hidden dropdown-trigger border-none"
      @click="toggleChild()"
    ></button>

    <ul v-if="list && list.length" ref="childMenu" class="child-menu">
      <KataMenuBarItem v-for="child in list" :key="child._key" v-bind="child" />
    </ul>
  </li>
</template>

<script>
import { title, list } from '../../slices/shared'
export default {
  mixins: [title, list],
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
    singleLink: {
      type: Object,
      default: null,
    },
    clickFn: {
      type: Function,
      default: () => {
        // console.log('no click function available')
      },
    },
  },
  methods: {
    openChild() {
      if (this.list && this.list.length > 0) {
        let dropdown = this.$refs.childMenu
        if (dropdown) dropdown.classList.add('open')
      }
    },
    closeChild() {
      if (this.list && this.list.length > 0) {
        let dropdown = this.$refs.childMenu
        if (dropdown) dropdown.classList.remove('open')
      }
    },
    toggleChild() {
      if (this.list && this.list.length > 0) {
        let dropdown = this.$refs.childMenu
        let dropdownTrigger = this.$refs.dropdownTrigger
        if (dropdown && dropdown.classList.contains('open')) {
          dropdown.classList.remove('open')
        } else {
          dropdown.classList.add('open')
        }
        if (dropdownTrigger) dropdownTrigger.classList.toggle('active')
      }
    },
    scrollToAnchor(anchor) {
      let elem = document.getElementById(anchor)
      window.scrollBy({
        top: elem.getBoundingClientRect().top - 100,
        left: 0,
        behavior: 'smooth',
      })
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
</style>
