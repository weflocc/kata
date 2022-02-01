<template>
  <div v-if="list" class="portfolio-8 slice w-r10/12 mx-r1/12">
    <div class="mb-large">
      <h2 v-if="title" v-kata-html="title" />
      <p v-if="text" v-kata-html="text" class="mt-medium" />
    </div>
    <transition-group :class="ulClass" tag="ul" name="fade" mode="out-in">
      <li
        v-for="(item, i) in list"
        :key="item._id || i"
        class="mb-medium relative"
      >
        <slot name="tease" :item="item">
          <ArticlesTeaseWithImage
            :item-id="item._id"
            :link="getLink(item._id)"
            :title="item.title"
            :image="item.image"
          />
        </slot>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { title, text, list } from '../shared'
export default {
  mixins: [title, text, list],
  props: {
    cols: {
      type: Number,
      default: 3,
    },
    tabletCols: {
      type: Number,
      default: 3,
    },
    mobileCols: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    ulClass() {
      let classes = 'w-full grid gap-medium'
      switch (this.cols) {
        case 4:
          classes += ' lg:grid-cols-3 xl:grid-cols-4'
          break
        case 2:
          classes += ' lg:grid-cols-2'
          break
        default:
          classes += ' lg:grid-cols-3'
          break
      }
      switch (this.tabletCols) {
        case 4:
          classes += ' md:grid-cols-4'
          break
        case 3:
          classes += ' md:grid-cols-3'
          break
        case 2:
          classes += ' md:grid-cols-2'
          break
        default:
          classes += ' md:grid-cols-3'
          break
      }
      switch (this.mobileCols) {
        case 4:
          classes += ' grid-cols-4'
          break
        case 3:
          classes += ' grid-cols-3'
          break
        case 2:
          classes += ' grid-cols-2'
          break
        case 1:
          classes += ' grid-cols-1'
          break
        default:
          classes += ' grid-cols-1'
          break
      }

      return classes
    },
  },
}
</script>
