import { linkText, linkStyle } from '../partials'
import { BiLinkExternal } from 'react-icons/bi'

export default {
  title: 'External Link',
  name: 'externalLink',
  type: 'object',
  fields: [
    linkText,
    linkStyle,
    {
      type: 'url',
      name: 'url',
      title: 'URL',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel', 'sms'],
        }),
    },
  ],
  preview: {
    select: {
      title: 'linkText',
      subtitle: 'url',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title,
        subtitle: subtitle,
        media: BiLinkExternal,
      }
    },
  },
}
