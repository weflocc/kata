<template>
  <div class="slice text-10 mx-auto w-r24/24 md:w-r20/24">
    <h2 v-if="title" v-kata-html="title" class="text-center mb-large fade-up" />
    <div v-if="list" class="accordion-list fade-up">
      <AccordionSlot
        v-for="item in list"
        :key="item._key"
        :title="item.title"
        class="mb-small"
      >
        <SanityEmbedContent v-if="item.textBody" :blocks="item.textBody" />
				<a
          v-if="item.singleLink"
          :href="getSingleLink(item.singleLink)"
          :class="(item.singleLink.linkType == 'file' ? 'btn-file' : 'btn-internal')+' btn-primary'"
          target="_blank"
          :download="item.singleLink.linkType == 'file'"
          v-text="item.singleLink.linkType == 'file' ? 'Download Document' : 'More Details'"
        />
      </AccordionSlot>
    </div>
  </div>
</template>

<script>
import { title, list, singleLink } from '../shared'
export default {
  mixins: [title, list, singleLink],
}
</script>
