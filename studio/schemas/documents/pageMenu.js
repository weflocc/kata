import {hiddenTitle} from '../partials/meta'
import {internalLink} from '../partials/links'

export default {
  type: 'document',
  name: 'pageMenu',
  title: 'Menu',
  initialValue: {
    title: 'Menu'
  },
  fields: [
    hiddenTitle,
    {
      name: 'test',
      type: 'string'
    },
    {
      title: 'Menu',
      type: 'array',
      name: 'menu',
      of: [
        {
          name: 'internalLink',
          type: 'internalLink',
        },
        {
          title: 'External Link',
          name: 'externalLink',
          type: 'externalLink'
          // type: 'object',
          // fields: [
          //   {
          //     title: 'Title',
          //     type: 'string',
          //     name: 'title'
          //   },
          //   {
          //     title: 'Link',
          //     type: 'url',
          //     name: 'link'
          //   }
          // ]
        }
      ]
    }
  ]
}
