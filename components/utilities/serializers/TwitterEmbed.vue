<template>
  <div class="twitter-embed-wrap">
    <client-only>
      <Tweet
        v-if="tweetId"
        :id="tweetId"
        :options="{ conversation: 'none', hide_thread: true, align: 'center' }"
      />
    </client-only>
  </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'

export default {
  components: { Tweet },
  props: {
    tweetId: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.twitter-embed-wrap {
  .twitter-tweet {
    @apply mx-auto;
  }
}
</style>
