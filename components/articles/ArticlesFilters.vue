<template>
  <div class="articles-filters">
    <div
      v-for="filterGroup in filters"
      :key="filterGroup.label"
      class="mt-small"
    >
      <h3
        v-if="categoryLabels"
        v-kata-html="filterGroup.title || filterGroup.label"
        class="label-1 mb-small"
      />

      <div v-if="filterGroup.terms" class="flex flex-wrap">
        <div class="filter-wrapper w-auto block">
          <button
            v-if="!hideAll"
            type="button"
            class="block w-max filter-btn btn-plain mb-2 mr-small"
            :class="{ selected: all(filterGroup.label) }"
            @click="clear(filterGroup.label)"
          >
            All
          </button>
        </div>
        <div
          v-for="filter in filterGroup.terms"
          :key="filter.id"
          class="filter-wrapper w-auto block"
        >
          <button
            type="button"
            class="block w-max filter-btn btn-plain mb-2 mr-small"
            :class="{ selected: filter.active }"
            @click="toggleFilter(filter.id, filterGroup.label)"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
      <!-- there is now a separate clear button component for all the filters -->
      <!-- the below clear is redundant, as there is also an all -->
      <!-- <button
        type="button"
        class="btn-secondary btn-small mt-small"
        @click="clear(filterGroup.label)"
      >
        Clear
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articleInstance: {
      type: String,
      required: true,
    },
    categoryLabels: {
      type: Boolean,
      default: false,
    },
    hideAll: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    filters() {
      return this.$store.getters['articles/getFiltersIfExists']({
        instance: this.articleInstance,
      })
    },
    activeFilter() {
      return this.$store.getters['articles/getActiveFiltersIfExists']({
        instance: this.articleInstance,
      })
    },
  },
  methods: {
    toggleFilter(filterId, filterGroup) {
      this.$store.commit('articles/toggleFilter', {
        filterId: filterId,
        filterGroup: filterGroup,
        instance: this.articleInstance,
      })
    },
    clear(filterGroup) {
      this.$store.commit('articles/clear', {
        filterGroup: filterGroup,
        instance: this.articleInstance,
      })
    },
    all(filterGroup) {
      return this.activeFilter[filterGroup]?.length == 0
    },
  },
}
</script>

<style lang="scss" scoped>
button.filter-btn {
  &:focus {
    outline: none !important;
  }
}
</style>
