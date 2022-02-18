<template>
  <div class="team-4 slice w-r24/24 mx-auto">
    <div class="heading mb-large">
      <h2 v-if="title" v-kata-html="title" class="fade-up" />
      <p v-if="text" v-kata-html="text" class="mt-medium fade-up" />
    </div>
    <div class="team-list">
      <ul :class="ulClass">
        <li v-for="item in list" :key="item._id" class="fade-up">
          <slot name="tease" :item="item">
            <KataImage
              :image="item.image"
              class="mb-small"
              :ratio="255 / 340"
            />
            <h3
              v-if="item.title"
              v-kata-html="item.title"
              class="mb-small label-1"
            />
            <p v-if="item.text" v-kata-html="item.text" class="para-2" />
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { title, text, list } from '../shared'
export default {
  mixins: [title, text, list],
  props: {
    cols: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    ulClass() {
      switch (this.cols) {
        case 4:
          return 'w-full grid gap-medium grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        case 3:
          return 'w-full grid gap-medium grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        case 2:
          return 'w-full grid gap-medium grid-cols-1 lg:grid-cols-2'
        default:
          return 'w-full grid gap-medium grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }
    },
  },
}
</script>
