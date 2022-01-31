<template>
  <div v-if="wrapper" class="tabs">
    <div v-for="(item, i) in wrapper.items" :key="item._key" class="tab">
      <input :id="'chck' + i" type="checkbox" name="rd" />
      <label class="tab-label" :for="'chck' + i">{{ item.title }}</label>
      <div class="tab-content">
        <SanityContent :blocks="item.textBody" :serializers="serializers" />
      </div>
    </div>
  </div>
</template>

<script>
// This duplicates SanityEmbedContent but does not include Accordion as a type
// This avoids a never-ending-loop of <SanityEmbedontent> and <Accordion> components

import Youtube from './Youtube.vue'
import Image from './SanityImage.vue'
import BlockLinks from './BlockLinks.vue'
import FileLink from './FileLink.vue'
import InternalLink from './InternalLink.vue'
import ExternalLink from './ExternalLink.vue'
import TableField from './TableField.vue'

export default {
  props: {
    // items: {
    //   type: Array,
    //   default: () => [],
    // },
    wrapper: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      serializers: {
        types: {
          youtube: Youtube,
          image: Image,
          link: BlockLinks,
          tableField: TableField,
        },
        marks: {
          internalLink: InternalLink,
          link: ExternalLink,
          file: FileLink,
        },
      },
    }
  },
}
</script>

<style scoped lang="scss">
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
/* // Layout */
.row {
  display: flex;
  .col {
    flex: 1;
    &:last-child {
      margin-left: 1em;
    }
  }
}
/* Accordion styles */
.tabs {
  // border-radius: 8px;
  overflow: hidden;
  // box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
}
.tab {
  width: 100%;
  color: white;
  overflow: hidden;
  &-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: $primary;
    font-weight: bold;
    cursor: pointer;
    /* Icon */
    &:hover {
      background: darken($primary, 10%);
    }
    &::after {
      content: '\276F';
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all 0.35s;
    }
  }
  &-content {
    max-height: 0;
    padding: 0 1em;
    color: #333;
    background: white;
    transition: all 0.35s;
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: $primary;
    cursor: pointer;
    &:hover {
      background: darken($primary, 10%);
    }
  }
}

// :checked
input:checked {
  + .tab-label {
    background: darken($primary, 10%);
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100%;
    padding: 1em;
  }
}
</style>
