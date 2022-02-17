<template>
  <div v-if="list && list != null" class="feature-list-01">
    <Feature01
      v-for="(feature, i) in list"
      :key="feature._key"
      v-bind="feature"
      :reversed="i % 2 == 0"
      :no-crop="noCrop"
      class="mb-large slice-animation"
    />
  </div>
</template>

<script>
import { list, noCrop } from '../shared'
export default {
  mixins: [list, noCrop],
}
</script>
