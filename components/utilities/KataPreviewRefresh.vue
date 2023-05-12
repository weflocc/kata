<template>
  <client-only>
    <aside
      class="fixed bottom-0 inset-x-0 mx-auto z-[3000] flex justify-center items-center"
    >
      <button
        class="para-1 bg-grey px-medium py-small border-primary transition-default hover:bg-black !font-bold text-white cursor-pointer w-full text-center"
        @click="refresh"
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
    //trigger on load to get latest data
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
