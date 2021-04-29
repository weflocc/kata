import {linkText, linkStyle} from '../partials/links'
import {BiLink} from 'react-icons/bi'
const allTypesFallback = [{type: 'page'}]

const internalLink = (allTypes = allTypesFallback) => {
  return {
    name: 'internalLink',
    type: 'object',
    title: 'Internal Link',
    fields: [
      {
        name: 'internalLink',
        type: 'reference',
        to: allTypes
      },
      linkText,
      linkStyle
    ],
    preview: {
      select: {
        title: 'linkText',
        subtitle: 'internalLink.title'
      },
      prepare (selection) {
        const {title, subtitle} = selection
        return {
          title: title,
          subtitle: subtitle,
          media: BiLink
        }
      }
    }
  }
}

export {internalLink}