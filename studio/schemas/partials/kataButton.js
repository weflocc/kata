import {linkText, linkStyle} from './links'

const kataButton = (name = 'button') => {
  return {
    name: name,
    type: 'object',
    fields: [
      linkText,
      linkStyle,
      {
        name: 'link',
        type: 'sanityLink'
      }
    ],
  }
}

export {kataButton}