import config from '../../config.dist.json'
import { linkText, linkStyle } from '../partials'
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
