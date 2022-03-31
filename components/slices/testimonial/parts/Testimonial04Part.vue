<template>
  <div class="testimonial-4-part">
    <p v-if="item.quote" v-kata-html="item.quote" class="heading-3" />
    <p v-if="item.name" v-kata-html="item.name" class="label-1" />
    <p v-if="item.job" v-kata-html="item.job" class="para-4 mt-1" />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.testimonial-4-part {
  .heading-3 + .label-1 {
    margin-top: var(--spacing-large);
  }
}
</style>
