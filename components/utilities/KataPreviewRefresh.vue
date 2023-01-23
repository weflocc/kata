<template>
  <client-only>
    <aside
      class="fixed w-full top-0 bg-gray-300 flex justify-center items-center pointer-events-none"
      :class="{ 'h-screen': !ready, 'h-5 mb-5': ready }"
      style="z-index: 3000"
    >
      <p class="font-semibold mb-0">
        <span v-if="!ready">Click to start preview</span>
        <button
          class="font-semibold underline p-2 pointer-events-all"
          @click="refresh()"
        >
          Refresh
        </button>
      </p>
    </aside>
  </client-only>
</template>

<script>
export default {
  data: function () {
    return {
      ready: false,
    }
  },
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
