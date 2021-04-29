<template>
  <DynamicLink :link="link" :class="linkStyle">
    {{ text }}
  </DynamicLink>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      default: () => {},
    },
    linkStyle: {
      type: String,
      default: null,
    },
    linkText: {
      type: String,
      default: null,
    },

  },
  computed: {
    text() {
      if (this.linkText) {
        return this.linkText
      } else if(this.link.to[0]._type == 'internalLink') {
        // get the title from the internal link
      }
    },
  },
}
</script>
