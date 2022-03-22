<template>
  <div v-if="list" class="accordion-block">
    <AccordionSlot v-for="item in list" :key="item._key" :title="item.title">
      <SanityContent :blocks="item.textBody" />
    </AccordionSlot>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: null,
    },
  },
}
</script>
