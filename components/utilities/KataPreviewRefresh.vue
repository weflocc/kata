<template>
  <client-only>
    <aside
      class="fixed bottom-0 inset-x-0 mx-auto z-[3000] flex justify-center items-center"
    >
      <button
        class="para-1 bg-grey px-medium py-small border-primary transition-default hover:bg-black !font-bold text-white cursor-pointer w-full text-center"
        @click="refresh()"
      >
        {{ ready ? 'Refresh Preview' : 'Loading...' }}
      </button>
    </aside>
  </client-only>
</template>

<script>
export default {
  data: () => ({
    ready: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.refresh()
    })
  },
  methods: {
    refresh() {
      this.ready = true
      $nuxt.refresh()
    },
  },
}
</script>

<style>
.kata-header {
  top: 5% !important;
  position: absolute;
}
aside {
  transition: height 0.4s linear;
}
</style>
