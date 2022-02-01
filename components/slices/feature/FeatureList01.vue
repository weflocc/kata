<template>
  <div class="feature-list-01">
    <Feature01
      v-for="(feature, i) in list"
      :key="feature._key"
      v-bind="feature"
      :reversed="i % 2 == 0"
      class="mb-large slice-animation"
    />
  </div>
</template>

<script>
import { list } from '../shared'
export default {
  mixins: [list],
}
</script>
