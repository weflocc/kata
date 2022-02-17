<template>
  <div class="slice feature-7 w-r10/12 mx-auto text-center">
    <div v-if="title || text" class="mb-large">
      <h2 v-kata-html="title" class="fade-up heading-2" />
      <SanityEmbedContent
        v-if="textBody"
        :blocks="textBody"
        class="mt-medium fade-up lg:px-r1/12"
      />
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
          :is="getLinkComponent(item.singleLink)"
          :to="getSingleLink(item.singleLink)"
          :href="getSingleLink(item.singleLink)"
          :target="
            getLinkComponent(item.singleLink) == 'a' ? '_blank' : '_self'
          "
        >
          <KataSimpleImage
            v-if="item.icon && item.icon.asset && item.icon.asset._ref"
            :image="item.icon"
            class="mb-small mx-auto object-contain"
            :class="item.link ? 'has-link' : null"
            width="50"
            height="50"
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
import { title, textBody, links, list } from '../shared'
export default {
  mixins: [title, textBody, links, list],
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
  width: 50px;
  height: 50px;
}
</style>
