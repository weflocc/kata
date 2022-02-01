<template>
  <div class="slice feature-7 w-r10/12 mx-r1/12 text-center">
    <div v-if="title || text" class="mb-large">
      <h2 v-kata-html="title" class="fade-up heading-2" />
      <p v-if="text" v-kata-html="text" class="mt-medium fade-up lg:px-r1/12" />
    </div>
    <ul
      v-if="list"
      class="flex justify-center items-start flex-wrap -mx-medium -mb-large"
      :class="'length-' + list.length"
    >
      <li
        v-for="(item, index) in list"
        :key="item._key"
        class="mb-large fade-up px-medium item"
        :class="width"
      >
        <component
          :is="item.link ? 'nuxt-link' : 'div'"
          :to="item.link ? getLink(item.link._ref) : null"
        >
          <KataSimpleImage
            v-if="item.icon && item.icon.asset && item.icon.asset._ref"
            :image="item.icon"
            class="mb-small mx-auto object-contain"
            :class="item.link ? 'has-link' : null"
          />
          <h3
            v-if="item.title"
            v-kata-html="item.title"
            class="label-1 mb-small"
          />
          <p v-if="item.text" v-kata-html="item.text" class="para-2" />
        </component>
      </li>
    </ul>
    <KataLinks v-if="links" :links="links" class="mt-large fade-up" />
  </div>
</template>

<script>
import { title, text, links, list } from '../shared'
export default {
  mixins: [title, text, links, list],
  props: {
    max: {
      type: Number,
      default: 4,
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

<style lang="scss">
.feature-7 .item img {
  width: 60px;
  height: 60px;
}
</style>
