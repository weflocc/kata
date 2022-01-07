<template>
  <transition :key="query" name="fade">
    <!-- TODO: try params instead? -->
    <!-- pass in query that matches the one set in sanity, eg. <Lightbox query="video"> -->
    <div
      v-show="$route.query && $route.query.lightbox == query"
      class="lightbox fixed top-0 left-0 flex items-center justify-center w-full h-full"
    >
      <n-link
        :to="{ query: null }"
        title="Close"
        class="lightbox-underlay bg-primary opacity-95 fixed top-0 left-0 w-full h-full cursor-default"
      ></n-link>
      <div class="lightbox-inner bg-white p-large relative">
        <slot></slot>
        <n-link :to="{ query: null }" title="Close" class="close-btn"></n-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    query: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.lightbox {
  z-index: 100;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
