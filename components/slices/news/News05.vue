<template>
  <div class="news-5 slice w-r10/12 mx-auto">
    <h2 v-if="title" v-kata-html="title" class="mb-large text-center" />
    <component
      :is="link(item._id) ? 'n-link' : 'div'"
      v-for="(item, i) in list"
      :key="item._ref"
      :to="item._id ? link(item._id) : ''"
      class="item md:flex md:items-center mb-slice md:mb-slice-half md:space-x-medium block"
      :class="{
        'md:flex-row-reverse md:space-x-reverse': i % 2,
      }"
    >
      <div class="md:w-7/12 lg:w-5/12 text md:mb-0 mb-medium">
        <slot name="superHeader" :item="item">
          <h3
            v-if="item.superHeader"
            v-kata-html="item.superHeader"
            class="label-2 mb-medium"
          />
        </slot>
        <h2 v-if="item.title" v-kata-html="item.title" class="heading-3" />
        <p v-if="item.text" v-kata-html="item.text" class="para-2 mt-medium" />
      </div>
      <div class="md:w-5/12 lg:w-7/12 image md:mb-0 mb-medium">
        <KataImage
          :ratio="4 / 3"
          :image="item.image"
          class="h-full w-full object-cover"
        />
      </div>
    </component>
  </div>
</template>

<script>
import { title, list } from '../shared'
export default {
  mixins: [title, list],
  methods: {
    link(id) {
      const link = this.$store.getters['references/getLinkFromReference'](id)
      return link ? link.path : ''
    },
  },
}
</script>
