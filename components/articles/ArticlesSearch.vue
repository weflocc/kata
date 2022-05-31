<template>
  <div class="articles-search bg-transparent">
    <label for="articlesSearch" class="sr-only">Search</label>
    <input
      id="articlesSearch"
      type="text"
      :value="searchTerm"
      class="focus:outline-none focus:ring-2 border-2 w-full mb-3 bg-transparent py-1 px-small"
      name="articlesSearch"
      :placeholder="placeholder"
      @keyup="searchArticles"
    />
  </div>
</template>

<script>
export default {
  props: {
    articleInstance: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Search',
    },
  },
  computed: {
    searchTerm() {
      if (this.$store.state.articles[this.articleInstance]) {
        return this.$store.state.articles[this.articleInstance].searchTerm
      }
      return ''
    },
  },
  methods: {
    searchArticles(e) {
      this.$store.commit('articles/setSearchTerm', {
        searchTerm: e.target.value,
        instance: this.articleInstance,
      })
    },
  },
}
</script>

<style>
.articles-search input {
  border-color: var(--searchBorderColour, var(--primary));
  border-radius: var(--searchBorderRadius, 0);
  --tw-ring-color: var(--searchBorderColour, var(--primary));
}
</style>
