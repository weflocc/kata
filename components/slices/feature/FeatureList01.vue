<template>
  <div v-if="list && list != null" class="feature-list-01">
    <Feature01
      v-for="(feature, i) in list"
      v-bind="feature"
      :id="`feature-list-item-${i}`"
      :key="feature._key"
      :reversed="startReverse ? (i + 1) % 2 == 0 : i % 2 == 0"
      :no-crop="noCrop"
      class="mb-large slice-animation"
    />
  </div>
</template>

<script>
import { list, noCrop } from '../shared'
export default {
  mixins: [list, noCrop],
  props: {
    startReverse: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
