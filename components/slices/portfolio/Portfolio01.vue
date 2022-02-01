<template>
  <Portfolio04 :list="list" />
</template>

<script>
import { list } from '../shared'
export default {
  mixins: [list],
}
</script>
