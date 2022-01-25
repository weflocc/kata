<template>
  <div class="articles-filters articles-select-filters">
    <div
      v-for="filterGroup in filters"
      :key="filterGroup.label"
      class="filter-group"
    >
      <h3 v-if="categoryLabels">{{ filterGroup.label }}</h3>

      <div
        v-if="filterGroup.terms"
        class="select-wrap"
        @change="handleChange($event, filterGroup.label)"
      >
        <select :name="filterGroup.label">
          <option value="">All {{ camelToTitle(filterGroup.label) }}</option>
          <option
            v-for="filter in filterGroup.terms"
            :key="filter.id"
            :value="filter.id"
            :selected="isActiveDefault(filterGroup.label, filter.id)"
          >
            {{ filter.label }}
          </option>
        </select>
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
    // isActiveDefault allows to set a selected option by default outside the component
    // a filter can be set or cleared programaticaly by modifiying the activeFilter object
    isActiveDefault(filterGroup, id) {
      return this.activeFilter[filterGroup].includes(id) ? true : false
    },
    camelToTitle(text) {
      const result = text.replace(/([A-Z])/g, ' $1')
      let finalResult = result.charAt(0).toUpperCase() + result.slice(1)
      if (
        finalResult.includes('category') ||
        finalResult.includes('Category')
      ) {
        finalResult = finalResult.replace('category', 'categories')
        finalResult = finalResult.replace('Category', 'Categories')
      } else {
        finalResult += 's'
      }
      return finalResult
    },
    handleChange(e, filterGroup) {
      let val = e.target.value
      console.log(e.target.value, filterGroup)
      if (val) {
        this.toggleFilter(e.target.value, filterGroup)
      } else {
        this.clear(filterGroup)
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
.select-wrap {
  width: 100%;
  border: 2px solid currentColor;
  position: relative;

  select {
    background: none;
    border: none;
    appearance: none;
    width: 100%;
    cursor: pointer;
    position: relative;
    z-index: 2;
    padding: 5px 30px 5px 10px;

    &:focus {
      outline: none !important;
    }
  }

  &:after {
    content: '';
    border-color: currentColor;
    border-style: solid;
    border-width: 2px 2px 0 0;
    display: inline-block;
    height: 10px;
    width: 10px;
    transform: rotate(135deg);
    vertical-align: top;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 10px;
    transition: 0.5s ease;
    z-index: 1;
  }
}
.filter-group + .filter-group {
  @apply mt-small;
}
</style>
