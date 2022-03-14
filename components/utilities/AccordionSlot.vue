<template>
  <div class="accordion-item">
    <div
      class="accordion-trigger pb-small"
      :class="{ active: visible }"
      @click="open"
    >
      <h3 v-if="title" v-kata-html="title" class="label-1" />
      <div class="plus" :class="{ open: visible }"></div>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div v-show="visible" class="accordion-content pt-small pb-small">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    // can set startOpen to true to show as open to begin with
    startOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      index: null,
      visible: false,
    }
  },
  mounted() {
    if (this.startOpen) {
      this.visible = true
    }
  },
  methods: {
    open() {
      this.visible = !this.visible
    },
    start(el, done) {
      el.style.height = el?.scrollHeight + 'px'
      done
    },
    end(el) {
      el.style.height = ''
    },
    getCategoryTitle(id) {
      return this.$store.getters['references/getFieldByRef']({
        ref: id,
        field: 'title',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.accordion-item {
  border-bottom: 1px solid $primary;
  position: relative;
}

.accordion-trigger {
  cursor: pointer;
  padding-right: 50px;
  position: relative;

  .plus {
    width: 15px;
    height: 15px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    &:before {
      content: '';
      transition: all 0.5s ease-in-out;
      transform: rotate(-90deg);
      position: absolute;
      background-color: $primary;
      width: 100%;
      height: 3px;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    &:after {
      content: '';
      transition: all 0.5s ease-in-out;
      transform: rotate(-90deg);
      opacity: 1;
      position: absolute;
      background-color: $primary;
      width: 3px;
      height: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    &.open {
      &:before {
        transition: all 0.5s ease-in-out;
        transform: rotate(90deg);
        opacity: 0;
      }
      &:after {
        transition: all 0.5s ease-in-out;
        transform: rotate(90deg);
      }
    }
  }
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
