import { groq } from '@nuxtjs/sanity'
const debounce = require('lodash.debounce')

const searchArticles = {
  data: () => ({ featured: null }),
  methods: {
    async searchArticles() {
      let queryBuilder = ``

      // Document type
      let articleTypesString = ``
      this.articleTypes.forEach((type) => {
        articleTypesString += `'${type}', `
      })

      queryBuilder += `_type in [${articleTypesString}]`

      if (!this.$store.state.previewMode) {
        queryBuilder += ` && !(_id in path('drafts.**'))`
      }

      // category filters
      if (this.activeFilters) {
        for (const [filterGroup, activeTerms] of Object.entries(
          this.activeFilters
        )) {
          if (activeTerms.length && activeTerms.length > 1) {
            let termsString = ``
            activeTerms.forEach((element) => {
              termsString += `"${element}", `
            })

            queryBuilder += ` && ${filterGroup}[]._ref in [${termsString}]`
          } else if (activeTerms.length == 1) {
            let term = activeTerms[0]
            queryBuilder += ` && '${term}' in ${filterGroup}[]._ref`
          }
        }
      }

      // search
      if (this.searchTerm && this.searchTerm.length > 2) {
        queryBuilder += ` && [body[].children[].text, textBody[].children[].text, text, title] match '${this.searchTerm}'`
      }

      // custom Filter
      if (
        this.customFilter &&
        this.customFilter.value &&
        this.customFilter.type == 'array'
      ) {
        queryBuilder += ` && "${this.customFilter.value}" ${this.customFilter.comparator} ${this.customFilter.field}`
      } else if (this.customFilter && this.customFilter.value) {
        queryBuilder += ` && ${this.customFilter.field} ${this.customFilter.comparator} "${this.customFilter.value}"`
      }

      // sort
      const articleSort = this.articleSort || ''

      const groqQuery = groq`*[ ${queryBuilder} ] ${articleSort}`

      console.log(groqQuery)

      this.articles = await this.$sanity.fetch(groqQuery)

      if (this.paginatedArticles) {
        this.$router.push({ path: this.$router.path, query: { page: 1 } })
      }
    },

    articlesNotFeatured() {
      if (!this.showFeatured || !this.featured || !this.featured.length) {
        return this.articles
      }

      const articles = this.articles
      const featured = this.featured
      // if filters or search are applied, return all articles. else, return everying that is not featured.

      // is a filter is set?
      let filterSet = false
      const activeFilter = this.$store.getters[
        'articles/getActiveFiltersIfExists'
      ]({
        instance: this.articleInstance,
      })

      if (Object.keys('activeFilter').length) {
        for (const [key, value] of Object.entries(activeFilter)) {
          if (value.length) {
            filterSet = true
          }
        }
      }

      // if no featured articles are set
      const nothingFeatured = !featured.length

      const searchApplied = this.$store.getters[
        'articles/getSearchTermIfExists'
      ]({
        instance: this.articleInstance,
      })

      if (filterSet || nothingFeatured || searchApplied) {
        return articles
      }

      const featuredids = featured.map((item) => item._id)
      const nonFeaturedArticles = articles.filter((item) => {
        return !featuredids.includes(item._id)
      })

      return nonFeaturedArticles
    },
  },
  computed: {
    unfeaturedArticles() {
      let newArticles = []
      if (this.showFeatured && this.featured && this.featured.length) {
        this.articles.forEach((elem) => {
          if (!this.featured.some((feat) => feat._id === elem._id)) {
            newArticles.push(elem)
          }
        })
      } else {
        newArticles = this.articles
      }
      return newArticles
    },
  },
}

const filters = {
  computed: {
    activeFilters() {
      return this.$store.getters['articles/getActiveFiltersIfExists']({
        instance: this.articleInstance,
      })
    },
  },
  watch: {
    activeFilters: function () {
      this.searchArticles()
    },
  },
}

const search = {
  computed: {
    searchTerm() {
      return this.$store.getters['articles/getSearchTermIfExists']({
        instance: this.articleInstance,
      })
    },
  },
  watch: {
    searchTerm: debounce(function () {
      this.searchArticles()
    }, 500),
    activeFilters: function () {
      this.searchArticles()
    },
  },
}

const singleArticle = {
  computed: {
    type() {
      return this.$store.getters['references/getTypeFromFullPath'](
        this.$route.fullPath
      )
    },
    label() {
      return this.$store.getters['articles/getInstanceLabelFromType'](this.type)
    },
    path() {
      return this.$store.getters['articles/getInstancePathFromType'](this.type)
    },
  },
}

// you can set data pagination to the number of items you would like per page on the listing page
const pagination = {
  computed: {
    currentPage() {
      return this.$route.query.page
    },
    itemsPerPage() {
      return this.pagination || 12 //12 is default per page
    },
    totalPages() {
      if (this.resultCount == 0) {
        return 1
      } else {
        return Math.ceil(this.resultCount / this.itemsPerPage)
      }
    },
    paginatedArticles() {
      if (!this.articles || this.articles.length != this.articles.length) {
        return
      }
      this.resultCount = this.articles.length
      this.existingQueries = this.$route.query
      if (!this.currentPage) {
        this.$router.push({
          path: this.$route.path,
          // set the page and existing query params
          query: { page: 1, ...this.existingQueries },
        })
      }
      if (this.currentPage >= this.totalPages) {
        this.$router.push({
          path: this.$route.path,
          query: { page: this.totalPages, ...this.existingQueries },
        })
      }
      var index = this.currentPage * this.itemsPerPage - this.itemsPerPage
      return this.articles.slice(index, index + this.itemsPerPage)
    },
    paginatedUnfeaturedArticles() {
      if (!this.articles || this.articles.length != this.articles.length) {
        return
      }
      this.existingQueries = this.$route.query
      this.resultCount = this.unfeaturedArticles.length
      if (!this.currentPage) {
        this.$router.push({
          path: this.$route.path,
          query: { page: 1, ...this.existingQueries },
        })
      }
      if (this.currentPage >= this.totalPages) {
        this.existingQueries.page = this.totalPages
        this.$router.push({
          path: this.$route.path,
          query: { page: this.totalPages, ...this.existingQueries },
        })
      }
      console.log(this.$route.query)
      var index = this.currentPage * this.itemsPerPage - this.itemsPerPage
      return this.unfeaturedArticles.slice(index, index + this.itemsPerPage)
    },
  },
}

export { searchArticles, filters, search, singleArticle, pagination }
