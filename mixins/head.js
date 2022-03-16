export default {
  head() {
    let head = this.head || {}

    if (this.bodyClass) {
      head.bodyAttrs = {}
      head.bodyAttrs.class = this.bodyClass
    }

    if (this.c) {
      if (this.c.meta && this.c.meta.metaTitle) {
        head.title = this.c.meta.metaTitle
      } else {
        head.title = this.c.title
      }

      head.meta = []
      if (this.c.meta && this.c.meta.metaDescription) {
        head.meta.push(
          {
            hid: 'description',
            name: 'description',
            content: this.c.meta.metaDescription
              ? this.c.meta.metaDescription
              : undefined,
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: this.c.meta.metaDescription
              ? this.c.meta.metaDescription
              : undefined,
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.c.meta.metaDescription
              ? this.c.meta.metaDescription
              : undefined,
          }
        )
      }

      if (this.c.meta && this.c.meta.socialImage) {
        head.meta.push(
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: this.$imgUrl(this.c.meta.socialImage).url(),
          },
          {
            hid: 'twitter:image:alt',
            name: 'twitter:image:alt',
            content: head.title,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.$imgUrl(this.c.meta.socialImage).url(),
          },
          {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: this.$imgUrl(this.c.meta.socialImage).url(),
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: head.title,
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: this.$imgUrl(this.c.meta.socialImage).url(),
          },
          {
            hid: 'twitter:image:alt',
            name: 'twitter:image:alt',
            content: head.title,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: head.title,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.$imgUrl(this.c.meta.socialImage).url(),
          },
          {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: this.$imgUrl(this.c.meta.socialImage).url(),
          },
          {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: head.title,
          }
        )
      }

      if (this.c.meta && this.c.meta.schemaOrg) {
        // https://mhagemann.medium.com/how-to-add-structured-json-ld-data-to-nuxt-js-8bb5f7c8a2d
        head.__dangerouslyDisableSanitizers = ['script']
        head.script = [
          {
            innerHTML: this.c.meta.schemaOrg,
            type: 'application/ld+json',
          },
        ]
      }
    }

    return head
  },
}
