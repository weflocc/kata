<template>
  <div class="search-wrap">
    <button
      ref="search"
      class="search-icon outline-none focus:outline-none block"
      @click="searchOpenClick()"
    >
      <SearchIcon />
    </button>
    <transition name="fade">
      <div v-show="searchOpen" class="search-lightbox">
        <AisInstantSearch
          v-if="searchClient"
          :search-client="searchClient"
          :index-name="indexName"
          class="w-r24/24 mx-auto"
        >
          <AisSearchBox
            :show-loading-indicator="true"
            class="w-full mb-small"
          />
          <AisStateResults>
            <template #default="{ results: { hits, query } }">
              <AisStats v-show="query.length > 0" class="mb-small" />
              <AisHits v-if="hits.length > 0 && query.length > 0">
                <template #default="{ items }">
                  <ul class="max-h-[70vh] overflow-y-scroll">
                    <li
                      v-for="item in items"
                      :key="item.objectID"
                      class="mb-medium search-result border-b pb-small cursor-pointer"
                      @click="openLink(item.pathname)"
                    >
                      <div class="mb-small flex gap-small">
                        <p class="label-1 !font-bold">
                          {{ item.title }}
                        </p>
                        <span>
                          <AisHighlight attribute="pathname" :hit="item" />
                        </span>
                      </div>
                      <p>
                        <AisSnippet attribute="content" :hit="item" />
                      </p>
                    </li>
                  </ul>
                </template>
              </AisHits>
              <p v-else-if="query.length > 0">
                No results have been found for {{ query }}.
              </p>
              <p v-else>Type something to start searching.</p>
            </template>
          </AisStateResults>
        </AisInstantSearch>
        <div @click="searchOpen = false">
          <button
            ref="close"
            class="close outline-none focus:outline-none"
            :class="{ 'text-btn': showCloseText, 'icon-btn': !showCloseText }"
          >
            {{ showCloseText ? 'Close' : '' }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// Copy into your local repository and uncomment the relevant lines!
// yarn add vue-instantsearch
// yarn add algoliasearch

// uncomment the below to work!
// import SearchIcon from '~/assets/svgs/search.svg?inline'
// import {
//   AisInstantSearch,
//   AisStats,
//   AisHits,
//   AisHighlight,
//   AisSearchBox,
//   AisStateResults,
//   AisSnippet,
// } from 'vue-instantsearch'
// import algoliasearch from 'algoliasearch/lite'

export default {
  components: {
    // AisInstantSearch,
    // AisStateResults,
    // AisStats,
    // AisHits,
    // AisHighlight,
    // AisSnippet,
    // AisSearchBox,
    // SearchIcon,
  },
  props: {
    crawlerId: {
      // found here - make sure you are on the right project https://www.algolia.com/apps/APPID/api-keys/all
      type: String,
      required: true,
    },
    adminApiKey: {
      // found here - make sure you are on the right project https://www.algolia.com/apps/APPID/api-keys/all
      type: String,
      required: true,
    },
    indexName: {
      // index name from https://crawler.algolia.com/admin/crawlers/?sort=status&order=ASC&limit=20 indices
      type: String,
      required: true,
    },
    showCloseText: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      searchClient: null,
      searchOpen: false,
    }
  },
  mounted() {
    //this.searchClient = algoliasearch(this.crawlerId, this.adminApiKey)
  },
  methods: {
    searchOpenClick() {
      this.searchOpen = true
      this.searchClient = algoliasearch(this.crawlerId, this.adminApiKey)
    },
    openLink(path) {
      this.searchOpen = false
      if (path) this.$router.push({ path: path })
    },
  },
}
</script>

<style lang="scss">
.search-wrap {
  width: 18px;
  height: 18px;
  @apply flex items-center justify-center;

  svg path {
    fill: currentColor;
  }

  .search-icon {
    border: none;
    width: 20px;
    height: 20px;
  }

  .search-lightbox {
    @apply flex justify-start items-start fixed w-full h-full left-0 top-0;
    z-index: 1000;
    background: rgba($primary, 0.98);
    transition: 1s ease;
    padding-top: var(--spacing-slice);
    overflow-y: scroll;
    overflow-x: hidden;
    color: white;

    .close {
      position: absolute;
      top: 5%;
      right: 5%;
    }

    .text-btn {
      border-bottom: 2px solid white;
      color: white;
      font-weight: bold;
    }

    .icon-btn {
      position: absolute;
      right: 32px;
      top: 32px;
      width: 32px;
      height: 32px;

      &:before,
      &:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: white;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }

      @include md-down {
        right: 15px;
        top: 0;
        width: 20px;
        height: 20px;
      }
    }

    .ais-SearchBox-form {
      position: relative;
      .ais-SearchBox-input {
        appearance: none;
        background-color: white;
        border: 1px solid white;
        border-radius: 3px;
        caret-color: $primary;
        max-width: 100%;
        color: black;
        width: 100%;
        padding: 5px 10px 5px 40px;
        outline: none !important;
      }
      // &::before {
      //   content: '';
      //   background: transparent url('~/assets/svgs/search.svg') no-repeat scroll 0
      //     0;
      // }
      .ais-SearchBox-submit,
      .ais-SearchBox-reset {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 20px;
        height: 20px;
        outline: none !important;
        svg {
          width: 15px;
          height: 15px;
        }
      }
      .ais-SearchBox-submit {
        left: 10px;
      }
      .ais-SearchBox-reset {
        right: 10px;
        background: white;
      }
    }

    .search-result {
      border-color: currentColor;
      p {
        transition: 0.5s ease;
      }
      &:hover {
        p {
          color: $secondary;
        }
      }
    }
  }
  mark {
    background-color: $secondary;
  }
}
</style>
