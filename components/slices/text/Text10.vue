<template>
  <div class="slice text-10 mx-auto w-r24/24 md:w-r20/24">
    <h2 v-if="title" v-kata-html="title" class="text-center mb-large" />
    <div v-if="list" class="accordion-list">
      <AccordionSlot v-for="item in list" :key="item._key" :title="item.title">
        <SanityEmbedContent v-if="item.textBody" :blocks="item.textBody" />
      </AccordionSlot>
    </div>
  </div>
</template>

<script>
import { title, list } from '../shared'
export default {
  mixins: [title, list],
}
</script>
