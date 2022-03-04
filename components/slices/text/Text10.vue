<template>
  <div class="slice text-10 relative justify-start mx-auto w-r20/24">
    <h2 v-if="title" class="text-center mb-large">{{ title }}</h2>
    <div v-if="list" class="mx-auto">
      <ArticlesTeaseAccordion
        v-for="item in list"
        :key="item._key"
        :title="item.title"
        :body="item.textBody"
      />
    </div>
  </div>
</template>

<script>
import { title } from '../shared'
export default {
  mixins: [title],
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
