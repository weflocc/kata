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

      head.meta = [{ name: 'twitter:card', content: 'summary' }]

      if (process.client) {
        head.meta.push({ property: 'og:url', content: window.location.href })
      }

      if (this.c.meta && this.c.meta.metaDescription) {
        let desc = this.c.meta.metaDescription
          ? this.c.meta.metaDescription
          : undefined
        head.meta.push(
          {
            hid: 'description',
            name: 'description',
            content: desc,
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: desc,
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: desc,
          }
        )
      }

      if (this.c.image || (this.c.meta && this.c.meta.socialImage)) {
        let ogImg = this.$imgUrl(this.c.image)
          .quality(80)
          .width(1200)
          .height(630)
          .url()
        let twitterImg = this.$imgUrl(this.c.image)
          .quality(80)
          .width(800)
          .height(800)
          .url()
        if (this.c.meta && this.c.meta.twitterSharingImage) {
          twitterImg = this.$imgUrl(this.c.meta.twitterSharingImage)
            .quality(80)
            .width(800)
            .height(800)
            .url()
        }
        if (this.c.meta && this.c.meta.socialImage) {
          ogImg = this.$imgUrl(this.c.meta.socialImage)
            .quality(80)
            .width(1200)
            .height(630)
            .url()
          if (!this.c.meta.twitterSharingImage) {
            twitterImg = this.$imgUrl(this.c.meta.socialImage)
              .quality(80)
              .width(1200)
              .height(630)
              .url()
          }
        }

        console.log('head img', ogImg, twitterImg)

        head.meta.push(
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: twitterImg,
          },
          {
            hid: 'twitter:image:alt',
            name: 'twitter:image:alt',
            content: head.title,
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: head.title,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: ogImg,
          },
          {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: ogImg,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: head.title,
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
