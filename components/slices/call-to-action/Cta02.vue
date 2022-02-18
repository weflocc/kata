<template>
  <div class="slice call-to-action-2 w-r24/24 mx-auto text-center">
    <h2 v-if="title" v-kata-html="title" class="heading-2 fade-up mb-medium" />
    <div
      v-if="list"
      class="md:flex w-full justify-evenly sm:px-r2/24 xl:px-r2/12"
    >
      <div
        v-for="item in list"
        :key="item._key"
        class="md:px-medium mb-medium md:mb-0"
      >
        <h3
          v-if="item.title"
          v-kata-html="item.title"
          class="heading-3 fade-up mb-small"
        />
        <p
          v-if="item.text"
          v-kata-html="item.text"
          class="fade-up whitespace-pre-line"
        />
        <KataLinks
          v-if="item.links"
          :links="item.links"
          class="fade-up mt-small"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { links, title, text, list } from '../shared'
export default {
  mixins: [links, title, text, list],
}
</script>
