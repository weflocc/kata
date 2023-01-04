import { linkText, linkStyle } from 'part:@weflocc/kata/partials/index'
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
      hidden: ({ currentUser }) => {
        return currentUser.email != 'studio@flocc.co'
      },
      description:
        'For developer use only. If you edit this, your lightbox will break.',
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
