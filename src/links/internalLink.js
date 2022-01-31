import config from 'config:@weflocc/kata'
import { linkText, linkStyle } from 'part:@weflocc/kata/partials/index'
import { BiLink } from 'react-icons/bi'

export default {
  name: 'internalLink',
  type: 'object',
  title: 'Internal Link',
  fields: [
    {
      type: 'reference',
      name: 'internalLink',
      to: config.allTypes,
      options: {
        disableNew: true, // we don't want people to be able to create new pages here!
      },
    },
    linkText,
    linkStyle,
    {
      name: 'anchor',
      type: 'string',
      title: 'Anchor link or Query string',
    },
  ],
  preview: {
    select: {
      title: 'linkText',
      subtitle: 'internalLink.title',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title,
        subtitle: subtitle,
        media: BiLink,
      }
    },
  },
}
