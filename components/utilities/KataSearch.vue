<template>
  <div class="search-wrap">
    <button
      ref="search"
      class="search-icon outline-none focus:outline-none block"
      @click="searchOpen = true"
    >
      <SearchIcon />
    </button>
    <transition name="fade">
      <div v-show="searchOpen" class="search-lightbox">
        <AisInstantSearch
          v-if="searchClient"
          :search-client="searchClient"
          :index-name="indexName"
          class="w-r10/12 mx-auto"
        >
          <AisSearchBox
            :show-loading-indicator="true"
            class="w-full mb-small"
          />
          <AisStateResults>
            <template #default="{ results: { hits, query } }">
              <AisHits v-if="hits.length > 0 && query.length > 0">
                <template #default="{ items }">
                  <ul>
                    <li
                      v-for="item in items"
                      :key="item.objectID"
                      class="mb-medium search-result"
                      @click="openLink(item.pathname)"
                    >
                      <h3 class="label-1 mb-small">
                        <AisHighlight attribute="title" :hit="item" />
                      </h3>
                      <p>
                        <AisHighlight attribute="description" :hit="item" />
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
        <button
          ref="close"
          class="close outline-none focus:outline-none"
          :class="{ 'text-btn': showCloseText, 'icon-btn': !showCloseText }"
          @click="searchOpen = false"
        >
          {{ showCloseText ? 'Close' : '' }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
// Copy into your local repository and uncomment the relevant lines!
// yarn add vue-instantsearch
// yarn add algoliasearch
import SearchIcon from '~/assets/svgs/search.svg?inline'
// uncomment the below to work!
// import {
//   AisInstantSearch,
//   AisHits,
//   AisHighlight,
//   AisSearchBox,
//   AisStateResults,
// } from 'vue-instantsearch'
// import algoliasearch from 'algoliasearch/lite'

export default {
  components: {
    // AisInstantSearch,
    // AisStateResults,
    // AisHits,
    // AisHighlight,
    // AisSearchBox,
    SearchIcon,
  },
  props: {
    crawlerId: {
      // found here - make sure you are on the right project https://www.algolia.com/apps/LB6R4RK6YE/api-keys/all
      type: String,
      required: true,
    },
    adminApiKey: {
      // found here - make sure you are on the right project https://www.algolia.com/apps/LB6R4RK6YE/api-keys/all
      type: String,
      required: true,
    },
    indexName: {
      // index name from https://www.algolia.com/apps/LB6R4RK6YE/explorer/browse indices
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
    this.searchClient = algoliasearch(this.crawlerId, this.adminApiKey)
  },
  methods: {
    openLink(path) {
      this.searchOpen = false
      if (path) this.$router.push({ path: path })
    },
  },
}
</script>

<style lang="scss">
.search-icon {
  border: none;
  width: 20px;
  height: 20px;
}

.search-wrap {
  width: 30px;
  height: 30px;
}

.search-lightbox {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  left: 0;
  top: 0;
  z-index: 1000;
  background: rgba($primary, 0.98);
  transition: 1s ease;
  padding-top: 20%;
  overflow-y: scroll;
  overflow-x: hidden;

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
    h3 {
      transition: 0.5s ease;
    }
    &:hover {
      h3 {
        color: $secondary;
      }
    }
  }
}
mark {
  background-color: $secondary;
}
</style>
