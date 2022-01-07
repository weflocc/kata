<template>
  <SanityContent
    :blocks="blocks"
    :serializers="serializers"
    class="embed-content-wrap"
  />
</template>

<script>
import Youtube from './serializers/Youtube.vue'
import Image from './serializers/SanityImage.vue'
import BlockLinks from './serializers/BlockLinks.vue'
import FileLink from './serializers/FileLink.vue'
import InternalLink from './serializers/InternalLink.vue'
import ExternalLink from './serializers/ExternalLink.vue'
import TableField from './serializers/TableField.vue'
import Accordion from './serializers/Accordion.vue'
import Testimonial04 from './serializers/Testimonial04Serializer.vue'

export default {
  props: {
    blocks: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      serializers: {
        types: {
          youtube: Youtube,
          image: Image,
          buttons: BlockLinks,
          tableField: TableField,
          accordion: Accordion,
          testimonials: Testimonial04,
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

<style lang="scss">
.embed-content-wrap {
  img,
  .youtube-wrap,
  .btn-primary,
  .kata-block-links {
    margin-bottom: var(--spacing-medium);
  }
  h2,
  h3 {
    margin-bottom: var(--spacing-small);
  }
  p + ul {
    margin-top: var(--spacing-small);
  }
  p + h2,
  p + h3 {
    margin-top: var(--spacing-large);
  }
  p + .youtube-wrap,
  h2 + .youtube-wrap,
  h3 + .youtube-wrap,
  p + .kata-block-links,
  h2 + .kata-block-links,
  h3 + .kata-block-links {
    @apply mt-medium;
  }

  ol {
    list-style: decimal;
    padding-left: 2.5em;
  }

  ul {
    list-style: disc;
    padding-left: 2.5em;
  }

  ol,
  ul {
    margin-bottom: var(--spacing-medium);
  }

  li {
    padding-left: 0 !important;
  }

  a:not(.btn-primary, .btn-secondary, .btn-tertiary, .btn-plain) {
    @apply text-primary;
  }

  img {
    max-height: 537px; //from figma
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
