<template>
  <div id="menu-panel" class="menu-panel">
    <div class="menu-inner">
      <nav class="kata-menu">
        <ul
          class="kata-menu-list p-0 lg:flex lg:items-center lg:justify-end lg:space-x-small"
        >
          <KataMenuBarItem
            v-for="item in menu"
            :key="item._key"
            v-bind="item"
            :is-mobile="isMobile"
            :click-fn="clickFn"
          />
        </ul>
      </nav>
      <slot>
        <div class="menu-footer mt-large lg:hidden">
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
    clickFn: {
      type: Function,
      default: () => {
        console.log('No click function provided')
      },
    },
  },
  data: () => ({
    isMobile: false,
  }),
  mounted() {
    this.mq()
    if (process.client) {
      window.addEventListener('resize', this.mq)
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('resize', this.mq)
    }
  },
  methods: {
    mq() {
      this.isMobile = window.matchMedia('(max-width: 899px)').matches
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
@include lg-down {
  .menu-panel {
    @apply flex justify-start items-center px-r2/24 pt-header-height fixed top-0 left-0 bg-secondary;
    opacity: 0;
    pointer-events: none;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    transition: 0.4s ease;

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
}
</style>
