<template>
  <div class="slice call-to-action-8 w-r24/24 mx-auto text-center fade-up">
    <KataLinks v-if="links" :links="links" />
  </div>
</template>

<script>
import { links } from '../shared'
export default {
  mixins: [links],
}
</script>
