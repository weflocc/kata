<template>
  <component
    :is="link ? 'nuxt-link' : 'div'"
    :to="link"
    class="tease-with-image"
  >
    <KataImage
      v-if="image"
      :image="image"
      :max-width="650"
      :ratio="ratio"
      sizes="sm:90vw lg:50vw xl:33vw"
      class="w-full"
    />
    <p v-if="categories && categories.length" class="category mt-small">
      <span v-for="(cat, i) in categories" :key="cat._key">
        {{ getCategoryTitle(cat._ref) }}
        <span v-if="i != categories.length - 1">|</span>
      </span>
    </p>
    <slot name="date">
      <p v-if="date" class="date mt-small">
        {{ date | formatDate }}
      </p>
      <p v-if="startDate" class="date mt-small">
        {{ startDate | formatDate }}
        <template v-if="endDate">- {{ endDate | formatDate }}</template>
      </p>
    </slot>
    <h3 class="mt-small">
      {{ title }}
      <DraftLabel v-if="itemId" :id="itemId" />
    </h3>
    <p v-if="text" v-kata-html="text" class="text mt-small" />
    <p v-if="readMore" v-kata-html="readMore" class="read-more mt-small" />
  </component>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {},
    },
    itemId: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    startDate: {
      type: String,
      default: '',
    },
    endDate: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    readMore: {
      type: String,
      default: '',
    },
    categories: {
      type: Array,
      default: null,
    },
    ratio: {
      type: Number,
      default: 6 / 4,
    },
  },
  methods: {
    getCategoryTitle(id) {
      return this.$store.getters['references/getFieldByRef']({
        ref: id,
        field: 'title',
      })
    },
  },
}
</script>
