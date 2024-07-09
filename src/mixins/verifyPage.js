// needs work, but an alternative to validate path - error if the page contains draft

export default {
  data: () => ({ error: true }),
  created() {
    if (
      (this.c && this.c._id && !this.c._id.includes('drafts')) ||
      this.$route.query.preview
    ) {
      this.error = false
    }

    if (this.error && this.c != null) {
      this.c.title = 'Page not found'
    } else if (this.c == null) {
      this.c = { title: 'Page not found' }
    }
  },
}
