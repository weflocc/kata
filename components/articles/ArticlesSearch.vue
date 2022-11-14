<template>
  <div class="articles-search bg-transparent" :class="{ flex: showButton }">
    <label for="articlesSearch" class="sr-only">Search</label>
    <input
      id="articlesSearch"
      type="text"
      :value="searchTerm"
      class="focus:outline-none focus:ring-2 border-2 w-full bg-transparent py-1 px-small"
      name="articlesSearch"
      :placeholder="placeholder"
      @keyup="searchArticles"
    />
    <button
      v-if="showButton"
      class="btn-primary btn-search"
      @click="triggerSearchArticles"
    >
      {{ searchBtnText }}
    </button>
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
    searchBtnText: {
      type: String,
      default: 'Search',
    },
    showButton: {
      type: Boolean,
      default: false,
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
    triggerSearchArticles(e) {
      this.$store.commit('articles/setSearchTerm', {
        searchTerm: this.searchTerm,
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
