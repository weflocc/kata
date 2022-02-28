<template>
  <div class="slice feature-5 w-r24/24 mx-auto">
    <div v-if="title || text" class="mb-large">
      <h2 v-kata-html="title" class="fade-up heading-2" />
      <SanityEmbedContent
        v-if="textBody"
        :blocks="textBody"
        class="mt-medium fade-up lg:pr-r2/24 lg:pr-r2/12"
      />
    </div>
    <ul
      v-if="list && list != null"
      class="flex flex-wrap -mx-medium"
      :class="'length-' + list.length"
    >
      <li
        v-for="(item, index) in list"
        :key="item._key"
        class="mb-large fade-up px-medium item"
        :class="width"
      >
        <KataSimpleImage
          v-if="item.icon"
          :image="item.icon"
          width="50"
          height="50"
          class="mb-small"
        />
        <p
          v-else-if="autoNumber"
          v-kata-html="index + 1 < 10 ? '0' + (index + 1) : index + 1"
          class="heading-2"
        />
        <h3
          v-if="item.title"
          v-kata-html="item.title"
          class="label-1 mb-small"
        />
        <SanityEmbedContent
          v-if="item.textBody"
          :blocks="item.textBody"
          class="para-2"
        />
        <!-- <p v-if="item.text" v-kata-html="item.text" class="para-1" /> -->
      </li>
    </ul>
    <KataLinks v-if="links" :links="links" />
  </div>
</template>

<script>
import { title, textBody, links, list } from '../shared'
export default {
  mixins: [title, textBody, links, list],
  props: {
    autoNumber: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    width() {
      if (this.list?.length) {
        let length = this.list.length
        if (length % 4 == 0 && this.max >= 4) {
          return 'sm:w-1/2 md:w-1/4'
        } else if (
          (length % 3 == 0 || length % 6 == 0 || length % 5 == 0) &&
          this.max >= 3
        ) {
          return 'sm:w-1/2 md:w-1/3'
        }
      }
      return 'sm:w-1/2'
    },
  },
}
</script>
