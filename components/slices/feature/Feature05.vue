<template>
  <div class="slice feature-5 w-r10/12 mx-r1/12">
    <div v-if="title || text" class="mb-large">
      <h2 v-kata-html="title" class="fade-up heading-2" />
      <p
        v-if="text"
        v-kata-html="text"
        class="mt-medium fade-up lg:pr-r1/12 lg:pr-r2/12"
      />
    </div>
    <ul
      v-if="list"
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
        <p v-if="item.text" v-kata-html="item.text" class="para-1" />
      </li>
    </ul>
    <KataLinks v-if="links" :links="links" />
  </div>
</template>

<script>
import { title, text, links, list } from '../shared'
export default {
  mixins: [title, text, links, list],
  props: {
    autoNumber: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    width() {
      let length = this.features.length
      if (length % 4 == 0) {
        return 'w-full sm:w-1/2 md:w-1/4'
      } else if (length % 3 == 0 || length % 6 == 0 || length % 5 == 0) {
        return 'w-full sm:w-1/2 md:w-1/3'
      }
      return 'w-full sm:w-1/2'
    },
  },
}
</script>
