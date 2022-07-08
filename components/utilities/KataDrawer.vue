<template>
  <transition name="slide">
    <div
      v-show="active"
      class="drawer fixed top-0 right-0 flex items-center justify-center w-full md:w-r16/24 xl:w-1/2 h-full"
    >
      <button
        title="Close"
        class="drawer-underlay fixed top-0 left-0 w-full h-full cursor-default bg-black"
        :class="{
          'opacity-50': active,
          'opacity-0': !active,
        }"
        @click="close()"
      ></button>
      <div class="drawer-inner bg-primary relative w-full h-full">
        <slot></slot>
        <button title="Close" class="close-btn" @click="close()"></button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    showCloseBtn: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      active: this.isActive,
    }
  },
  watch: {
    isActive: function (newVal, oldVal) {
      // watch it
      this.active = newVal
    },
  },
  methods: {
    close() {
      this.active = false
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.drawer {
  z-index: 9001;
}
.opacity-95 {
  opacity: 0.95;
}
.close-btn {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 30px;
  height: 30px;

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 30px;
    width: 2px;
    background-color: black;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
}
.drawer-underlay {
  transition: 0.5s ease;
}
.slide-enter-active,
.slide-leave-enter {
  transform: translateX(0);
  transition: all 0.3s linear;
}
.slide-enter,
.slide-leave-to {
  transition: all 0.3s linear;
  transform: translateX(100%);
}
</style>
