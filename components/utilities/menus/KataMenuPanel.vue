<template>
  <div
    id="menu-panel"
    class="menu-panel flex justify-center items-center px-r2/24 pt-header-height"
  >
    <div
      class="menu-inner"
      :class="{
        'w-full': secondaryMenu && menu,
      }"
    >
      <slot name="menuPanelHeader"></slot>
      <div
        class="menus-wrapper"
        :class="{
          'two-menus md:flex md:justify-between': secondaryMenu && menu,
        }"
      >
        <nav class="kata-menu">
          <ul class="kata-menu-list p-0">
            <KataMenuPanelItem
              v-for="item in menu"
              :key="item._key"
              ref="list"
              :click-fn="clickFn"
              v-bind="item"
              class="top-level"
            />
          </ul>
        </nav>
        <nav
          v-if="secondaryMenu"
          class="kata-secondary-menu md:w-1/2 md:pl-medium mt-large md:mt-0"
        >
          <ul class="kata-menu-list p-0">
            <KataMenuPanelItem
              v-for="item in secondaryMenu"
              :key="item._key"
              ref="list"
              :click-fn="clickFn"
              v-bind="item"
              class="top-level"
            />
          </ul>
        </nav>
      </div>
      <slot name="menuPanelFooter">
        <div class="menu-footer mt-large">
          <SocialMedia />
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
    secondaryMenu: {
      type: Array,
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
    openChild(item, i) {
      if (item.list && item.list.length > 0) {
        let dropdown = this.$refs.list[i].querySelector('.child-menu')
        if (dropdown) dropdown.classList.add('open')
      }
    },
    closeChild(item, i) {
      if (item.list && item.list.length > 0) {
        let dropdown = this.$refs.list[i].querySelector('.child-menu')
        if (dropdown) dropdown.classList.remove('open')
      }
    },
    toggleChild(item, i) {
      if (item.list && item.list.length > 0) {
        let dropdown = this.$refs.list[i].querySelector('.child-menu')
        let dropdownTrigger = this.$refs.list[i].querySelector(
          '.dropdown-trigger'
        )
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

<style lang="scss">
.menu-panel.open .child-menu {
  pointer-events: none;

  &.open {
    pointer-events: all;
  }
}
</style>

<style lang="scss" scoped>
.menu-panel {
  @apply opacity-0 pointer-events-none w-full h-full fixed inset-0 bg-secondary z-10;
  transition: 0.4s ease;
  padding-top: 130px;
  padding-bottom: 30px;

  &.open {
    opacity: 1;
    pointer-events: all;
  }

  .menu-inner {
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 100%;
    -ms-overflow-style: none; /* IE and Edge hide scrollbar */
    scrollbar-width: none; /* Firefox hide scrollbar */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari and Opera hide scrollbar */
    }
  }
}
</style>
