<template>
  <button type="button" class="btn-clear" @click="clear">Clear</button>
</template>

<script>
export default {
  props: {
    articleInstance: {
      type: String,
      default: '',
    },
  },
  methods: {
    clear() {
      if (this.articleInstance) {
        this.$store.commit('articles/clear', {
          instance: this.articleInstance,
        })
      }
      // pass a custom function for the clear button to emit
      this.$emit('clearFilter')
    },
  },
}
</script>
