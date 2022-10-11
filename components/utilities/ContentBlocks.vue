<template>
  <div v-if="blocks" class="content-blocks">
    <div
      v-for="(item, i) in blocks"
      :id="'block-' + (i + 1)"
      :key="item._key"
      class="block mb-slice-half"
      :class="item._type"
    >
      <component
        :is="getType(item)"
        v-bind="bindData(item)"
        class="fade-up"
        :class="{ 'whitespace-pre-line': item._type == 'paragraph' }"
      />
    </div>
  </div>
</template>

<script>
import BlockLinks from './serializers/BlockLinks.vue'
import TableField from './serializers/TableField.vue'
import AccordionBlock from './serializers/AccordionBlock.vue'
import Feature01Serializer from './serializers/Feature01Serializer.vue'

export default {
  components: {
    BlockLinks,
    TableField,
    AccordionBlock,
    Feature01Serializer,
  },
  props: {
    blocks: {
      type: Array,
      default: null,
    },
  },
  methods: {
    getType(item) {
      switch (item._type) {
        case 'paragraph':
          return 'p'
        case 'buttons':
          return 'BlockLinks'
        case 'table':
          return 'TableField'
        case 'accordion':
          return 'AccordionBlock'
        case 'testimonial04':
          return 'Testimonial04'
        case 'media':
          return 'KataMedia'
        case 'textAndImage':
          return 'Feature01Serializer'
        case 'standoutText':
          return 'StandoutText'
        default:
          return 'div'
      }
    },
    bindData(item) {
      // if (item._type == 'paragraph') {
      //   return { blocks: item.textBody }
      // } else if (item._type == 'media') {
      if (item._type == 'media') {
        return { media: item, noCrop: true }
      } else {
        return item
      }
    },
  },
}
</script>

<style lang="scss">
.content-blocks {
  .block {
    @apply w-r24/24 mx-auto;
  }
  .feature-1 {
    width: 100%;
  }
}
</style>
