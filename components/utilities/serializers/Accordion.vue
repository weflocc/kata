<template>
  <div v-if="wrapper" class="kata-accordions tabs">
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
  overflow: hidden;
}
.tab {
  width: 100%;
  overflow: hidden;
  @apply relative mb-small block;
  border-bottom: 1px solid currentColor;
  overflow: hidden;

  &-label {
    @apply relative block mb-small;
    padding-right: 40px;
    cursor: pointer;
    transition: 0.5s ease;

    /* Icon */
    &::after {
      content: '';
      @apply absolute top-0 bottom-0 my-auto right-[6px];
      border-style: solid;
      border-width: 2px 2px 0 0;
      border-color: currentColor;
      display: inline-block;
      height: 12px;
      width: 12px;
      transform: rotate(135deg);
      transition: transform 0.5s ease;
    }
    &:hover {
      color: $primary;
    }
  }
  &-content {
    max-height: 0;
    padding: 0;
    transition: all 0.35s;
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    cursor: pointer;
  }
}

// :checked
input:checked {
  + .tab-label {
    &::after {
      transform: rotate(-45deg);
    }
  }
  ~ .tab-content {
    max-height: 100%;
    padding: 1rem 0;
  }
}
</style>
