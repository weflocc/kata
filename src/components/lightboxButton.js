import { linkText, linkStyle } from '#partials'
import { BsFilePost } from 'react-icons/bs'

export default {
  name: 'lightboxButton',
  type: 'object',
  title: 'Lightbox Button',
  fields: [
    {
      type: 'string',
      name: 'query',
      title: 'Query',
      description:
        'For developer use only. If you edit this, your lightbox will break.',
      // validation: (Rule) =>
      //   Rule.warning('If you edit this, your lightbox will break.')
    },
    linkText,
    linkStyle,
  ],
  preview: {
    select: {
      title: 'linkText',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title,
        subtitle: subtitle,
        media: BsFilePost,
      }
    },
  },
}
