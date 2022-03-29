<template>
  <div v-if="socialMedia" class="social-words flex space-x-small">
    <a
      v-if="socialMedia.twitter"
      :href="socialMedia.twitter"
      title="Twitter"
      target="_blank"
      class="block hover:text-secondary"
    >
      Twitter
    </a>
    <a
      v-if="socialMedia.facebook"
      :href="socialMedia.facebook"
      title="Facebook"
      target="_blank"
      class="block hover:text-secondary"
    >
      Facebook
    </a>
    <a
      v-if="socialMedia.linkedIn"
      :href="socialMedia.linkedIn"
      title="LinkedIn"
      target="_blank"
      class="block hover:text-secondary"
    >
      LinkedIn
    </a>
    <a
      v-if="socialMedia.instagram"
      :href="socialMedia.instagram"
      title="Instagram"
      target="_blank"
      class="block hover:text-secondary"
    >
      Instagram
    </a>
    <a
      v-if="socialMedia.youtube"
      :href="socialMedia.youtube"
      title="Youtube"
      target="_blank"
      class="block hover:text-secondary"
    >
      Youtube
    </a>
  </div>
</template>

<script>
export default {
  props: {
    socialLinks: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    socialMedia() {
      return this.socialLinks
        ? this.socialLinks
        : this.$store.state.globalContent.socialMedia
    },
  },
}
</script>

<style lang="scss">
.social {
}
</style>
