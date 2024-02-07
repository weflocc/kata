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

      <div v-if="filterGroup.terms" class="flex flex-wrap filter-list-wrapper">
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
  mounted() {
    // Check the hash when the component is mounted
    this.checkHashAndClick();

    // You can also check the hash on hashchange event
    window.addEventListener('hashchange', this.checkHashAndClick);
  },

  beforeDestroy() {
    // Remove the hashchange event listener to prevent memory leaks
    window.removeEventListener('hashchange', this.checkHashAndClick);
  },
  methods: {
    checkHashAndClick() {
      // Check if the URL has a specific hash
      if (window.location.hash === '#advent_and_christmas') {
        // Trigger the button click
        this.toggleFilter('448ba0b2-31fd-4f0b-8f04-7e4c47245f38', 'eventCategory');
      }
      if (window.location.hash === '#specialist_tours') {
        this.toggleFilter('8532cffa-a813-4ccb-aed4-264f60017151', 'eventCategory');
      }
      if (window.location.hash === '#music') {
        this.toggleFilter('b5f3d3a6-d136-4885-8626-5b350240e9e0', 'eventCategory');
      }
      if (window.location.hash === '#nccl') {
        this.toggleFilter('f651cdec-cbb9-48dd-9aae-3e9dc5d1d22b', 'eventCategory');
      }
      if (window.location.hash === '#organ') {
        this.toggleFilter('2e8d0a3a-5c8a-4d9c-8ccb-f6a93e930514', 'eventCategory');
      }
      if (window.location.hash === '#friends') {
        this.toggleFilter('fbb9ba10-0389-4a0c-88e3-9bd0e8e20888', 'eventCategory');
      }
      if (window.location.hash === '#lent_and_easter') {
        this.toggleFilter('b67e81af-19ed-4cfd-afbf-a8ffbec44ec9', 'eventCategory');
      }
      if (window.location.hash === '#heritage_open_days') {
        this.toggleFilter('e20a47b5-61cb-4b9c-b569-8f4c7d1ce4b1', 'eventCategory');
      }
      if (window.location.hash === '#theatre') {
        this.toggleFilter('ecb0ad9e-26da-4dda-ae05-091e5f36730f', 'eventCategory');
      }
      if (window.location.hash === '#family_activity') {
        this.toggleFilter('b2908923-b004-4914-aca0-0bc4ad8d1c9e', 'eventCategory');
      }

    },
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
