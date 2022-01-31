import config from 'config:@weflocc/kata'
import { linkText, linkStyle } from 'part:@weflocc/kata/partials/index'
import { BiAnchor } from 'react-icons/bi'

export default {
  name: 'anchor',
  type: 'object',
  title: 'Page Anchor',
  description: 'Scroll to section on same page',
  fields: [
    {
      name: 'anchor',
      type: 'string',
      title: 'Anchor link (id)',
    },
    linkText,
    linkStyle,
  ],
  preview: {
    select: {
      title: 'linkText',
      subtitle: 'anchor',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title || subtitle,
        subtitle: title ? subtitle : '',
        media: BiAnchor,
      }
    },
  },
}
