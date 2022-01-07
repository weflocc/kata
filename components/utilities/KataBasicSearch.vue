<template>
  <div class="search-wrap">
    <button
      ref="search"
      class="search-icon outline-none focus:outline-none hidden md:block"
      @click="searchOpen = true"
    >
      <SearchIcon />
    </button>
    <transition name="fade">
      <div v-show="searchOpen" class="search-lightbox">
        <div id="aa-search"></div>
        <button
          ref="close"
          class="close outline-none focus:outline-none hidden md:block"
          :class="{ 'text-btn': showCloseText, 'icon-btn': !showCloseText }"
          @click="searchOpen = false"
        >
          {{ showCloseText ? Close : '' }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import SearchIcon from '~/assets/svgs/search.svg?inline'

export default {
  components: { SearchIcon },
  props: {
    showCloseText: {
      type: Boolean,
      default: false,
    },
    // from algolia
    appId: {
      type: String,
      required: true,
    },
    // from Aloglia
    apiKey: {
      type: String,
      required: true,
    },
    // this is the netlify site api key
    siteId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      searchOpen: false,
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          defer: true,
          href:
            'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css',
        },
      ],
      script: [
        {
          hid: 'algolia',
          defer: true,
          callback: () => {
            this.initSearch()
          },
          src:
            'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js',
        },
      ],
    }
  },
  mounted() {
    if (process.client && window.matchMedia('(max-width: 599px)').matches) {
      this.searchOpen = true
    }
  },
  methods: {
    initSearch() {
      const currentBranch = process.env.HEAD // Injected by your build tool
      console.log(currentBranch)
      let targetBranch = 'master'
      if (currentBranch === 'dev') {
        targetBranch = currentBranch
      } else if (currentBranch === 'main') {
        targetBranch = currentBranch
      }

      algoliasearchNetlify({
        appId: this.appId,
        apiKey: this.apiKey,
        siteId: this.siteId,
        branch: targetBranch,
        selector: 'div#aa-search',

        theme: {
          mark: '#000000', // Color of the matching content
          background: '#fff', // Background Color of the input and the panel
          // selected: '#111432', // Background Color of the selected item
          text: '#000000', // Color of the title of the items
          colorSourceIcon: '#000000', // Color of the icon on the left of results
        },
      })
    },
  },
}
</script>

<style lang="scss">
// :root {
//   --aa-primary-color: $primary;
// }
.search-icon {
  border: none;
  width: 20px;
  height: 20px;
}

.search-wrap {
  width: 30px;
  height: 30px;
}

@include md-up {
  .search-lightbox {
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    z-index: 1000;
    background: rgba($primary, 0.98);
    transition: 1s ease;

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
    }
  }

  #aa-search {
    width: 80%;
    margin: auto;

    .aa-Form {
      height: auto;
      align-items: center;
      border: 2px solid white;
      background: white;
      padding: 5px;
      border-radius: 10px;
    }

    .aa-SubmitIcon {
      height: auto;
      path {
        fill: $primary;
      }
    }

    .aa-TouchSearchButton {
      display: flex;
    }

    .aa-InputWrapper {
      height: auto;
    }

    .aa-InputWrapperPrefix,
    .aa-InputWrapperSuffix {
      position: static;
    }

    .aa-Input {
      caret-color: $primary;
      color: black;
      appearance: none;
      box-shadow: none;
      border: none;
      height: auto;
      position: static;
      padding: 0 0 0 10px;

      &::placeholder {
        color: black;
      }

      &:focus {
        border-color: none;
      }
    }
  }

  .aa-Panel {
    position: fixed !important;

    .aa-PanelLayout {
      border-radius: 10px;
    }

    ul.aa-List {
      padding: 15px 25px;
      li {
        margin-bottom: 15px;

        .aa-ItemIcon {
          display: none;
        }
      }
    }
  }
}
@include md-down {
  .aa-Autocomplete,
  .aa-Panel,
  .aa-DetachedContainer {
    --color-mark: white;
    --color-background: $primary;
    --color-text: white;
    --color-source-icon: white;
  }
  .aa-DetachedSearchButton {
    border: none;
    padding: 0;
  }
  .aa-DetachedCancelButton {
    display: inline-block;
    height: 30px;
  }
  .aa-DetachedSearchButtonPlaceholder {
    display: none;
  }
  .aa-DetachedOverlay {
    z-index: 999999;
    background-color: rgba($primary, 0.95);
  }
  .aa-Form {
    border: 2px solid white !important;

    ::placeholder {
      color: white;
      opacity: 1;
    }

    svg {
      height: auto;
      opacity: 1;
      path {
        fill: white;
      }
    }
  }
  .aa-DetachedContainer {
    min-height: 100%;
    background-color: rgba($primary, 0.95);
  }
  .aa-DetachedContainer .aa-DetachedFormContainer {
    border: none;
    padding: 10%;
    background-color: rgba($primary, 0.95);
  }
  .aa-Panel,
  .aa-Panel .aa-PanelLayout {
    background-color: rgba($primary, 0.95) !important;
  }
  .aa-Panel .aa-PanelLayout {
    padding: 15px 25px !important;
  }
  .aa-Item .aa-ItemDescription {
    color: white;
  }
  .aa-ItemIcon {
    display: none !important;
  }
}
.aa-powered-by {
  opacity: 0.4;
  font-size: 10px;

  a {
    height: 14px;
  }
}
</style>
