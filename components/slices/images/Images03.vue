<template>
  <div class="slice images-3 w-r24/24 mx-auto">
    <KataMedia v-if="media" :media="media" />
  </div>
</template>

<script>
import { media } from '../shared'

export default {
  mixins: [media],
}
</script>

<style lang="scss" scoped>
.images-3 {
}
</style>
