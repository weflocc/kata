<template>
  <div class="slice text-7 sm:flex mx-auto w-r24/24">
    <div class="sm:w-r6/24 heading mb-medium sm:mb-0">
      <h2 v-if="title" v-kata-html="title" class="heading-1 fade-up" />
    </div>
    <div v-if="list" class="sm:w-r14/24 content sm:pl-r2/24">
      <div
        v-for="item in list"
        :key="item.title"
        class="flex item border-b-2 border-primary mb-2 pb-2"
      >
        <p
          v-if="item.title"
          v-kata-html="item.title"
          class="label-1 w-1/2 sm:w-1/3 fade-up"
        />
        <SanityEmbedContent
          v-if="item.textBody"
          :blocks="item.textBody"
          class="w-1/2 sm:w-2/3 mt-0 para-1 fade-up"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { title, list } from '../shared'
export default {
  mixins: [title, list],
}
</script>

<style scoped lang="scss">
.text-7 {
}
</style>
