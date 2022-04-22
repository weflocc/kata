<template>
  <li
    ref="item"
    class="nav-link-wrap mb-0"
    :class="{
      'has-children relative': list && list.length > 0,
    }"
  >
    <component
      :is="getLinkComponent(singleLink)"
      class="nav-link inline-block"
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
      class="inline-block dropdown-trigger border-none"
      @click="toggleChild()"
    ></button>

    <ul v-if="list && list.length" ref="childMenu" class="child-menu">
      <KataMenuPanelItem
        v-for="child in list"
        :key="child._key"
        v-bind="child"
        :click-fn="clickFn"
      />
    </ul>
  </li>
</template>

<script>
import { title, list } from '../../slices/shared'
export default {
  mixins: [title, list],
  props: {
    singleLink: {
      type: Object,
      default: null,
    },
    clickFn: {
      type: Function,
      default: () => {
        console.log('no click function available')
      },
    },
  },
  data() {
    return {
      isMobile: false,
    }
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
    // scrollToAnchor(anchor) {
    //   let elem = document.getElementById(anchor)
    //   window.scrollBy({
    //     top: elem.getBoundingClientRect().top - 100,
    //     left: 0,
    //     behavior: 'smooth',
    //   })
    // },
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
  transition: 0.4s ease;
  max-height: 0;
  overflow: hidden;

  a {
    margin-bottom: 7px;
    transition: 0.4s ease;

    &:hover {
      color: $primary;
    }
  }

  &.open {
    max-height: 100%;
    opacity: 1;
    padding-top: var(--spacing-small);
  }
}
.has-children {
  .title-has-children {
    transition: 0.5s ease;
  }
  &:hover {
    .dropdown-trigger {
      &::before,
      &::after {
        background: $primary;
      }
    }
    .title-has-children {
      color: $primary;
    }
  }
}
.dropdown-trigger {
  position: relative;
  width: 20px;
  height: 20px;
  line-height: 1;
  outline: none !important;
  vertical-align: text-top;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    height: 3px;
    width: 18px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: currentColor;
    transition: 0.5s ease;
  }

  &::after {
    transform: rotate(90deg);
  }

  &.active {
    &:after {
      transform: rotate(0);
    }
  }
}
</style>
