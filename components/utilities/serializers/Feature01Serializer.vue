<template>
  <div
    class="slice feature-1 w-r24/24 mx-auto flex flex-col"
    :class="{
      'md:flex-row-reverse reversed': reversed,
      'md:flex-row ': !reversed,
    }"
  >
    <div
      class="md:w-1/2 order-2 md:order-1 py-medium text"
      :class="{ 'md:mr-large': !reversed, 'md:ml-large': reversed }"
    >
      <div v-if="feature.superHeading">
        <h2
          v-kata-html="feature.superHeading"
          class="label-1 mb-medium fade-up"
        />
        <h3
          v-if="feature.title"
          v-kata-html="feature.title"
          class="heading-2 mb-medium fade-up"
        />
      </div>
      <h2
        v-else
        v-kata-html="feature.title"
        class="heading-2 mb-medium fade-up"
      />
      <SanityContent
        v-if="feature.textBody"
        :blocks="feature.textBody"
        :serializers="serializers"
        class="embed-content-wrap feature-1-content"
      />
      <KataLinks
        v-if="feature.links"
        :links="feature.links"
        class="fade-up mt-large"
      />
    </div>
    <div class="md:w-1/2 order-1 md:order-2 mb-large md:mb-0 image">
      <KataMedia
        v-if="feature.media"
        :media="feature.media"
        :ratio="ratio"
        :max-width="1500"
        :no-crop="noCrop"
        class="h-full w-full object-cover"
        sizes="(max-width:699px) 90vw, (max-width:1439px) 50vw, 50vw"
      />
    </div>
  </div>
</template>

<script>
// This duplicates SanityEmbedContent but does not include feature01 as a type
// This avoids a never-ending-loop of <SanityEmbedContent> and <feature01> components
import Youtube from './Youtube.vue'
import Image from './SanityImage.vue'
import BlockLinks from './BlockLinks.vue'
import FileLink from './FileLink.vue'
import InternalLink from './InternalLink.vue'
import ExternalLink from './ExternalLink.vue'
import TableField from './TableField.vue'

export default {
  props: {
    feature: {
      type: Object,
      default: null,
    },
    ratio: {
      type: Number,
      default: 685 / 514,
    },
    reversed: {
      type: Boolean,
      default: false,
    },
    noCrop: {
      type: Boolean,
      default: false,
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
  mounted() {
    console.log('feature01', this.feature)
  },
}
</script>
