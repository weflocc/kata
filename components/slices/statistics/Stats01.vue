<template>
  <div class="slice stats-1 w-r10/12 mx-r1/12">
    <h2 v-if="title" v-kata-html="title" class="heading-2 fade-up mb-medium" />

    <div class="flex flex-wrap -mx-medium">
      <div
        v-for="item in list"
        :key="item._key"
        class="stat flex-grow w-full sm:w-1/2 md:w-1/4 mb-medium md:mb-0 px-medium"
      >
        <p
          v-if="item.stat"
          v-kata-html="item.stat"
          class="heading-2 statistic fade-up"
        />
        <p v-if="item.title" v-kata-html="item.title" class="fade-up" />
      </div>
    </div>

    <KataLinks v-if="links" :links="links" class="mt-medium" />
  </div>
</template>

<script>
import { title, links, list } from '../shared'
export default {
  mixins: [title, links, list],
}
</script>
