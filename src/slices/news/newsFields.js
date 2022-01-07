import { standardImage } from '../../partials/image'
import config from 'config:@weflocc/kata'
import { BiListPlus } from 'react-icons/bi'

const title = {
  name: 'title',
  type: 'string',
}

const items = {
  title: 'Items',
  name: 'items',
  type: 'array',
  of: [
    {
      type: 'object',
      title: 'Item',
      name: 'item',
      fields: [
        standardImage(),
        {
          type: 'string',
          name: 'title',
          title: 'Title',
        },
        {
          type: 'string',
          name: 'superHeader',
          title: 'Super Header',
        },
        {
          type: 'text',
          name: 'text',
          title: 'Text',
          rows: 4,
        },
        {
          type: 'reference',
          name: 'link',
          title: 'Link',
          to: config.allTypes,
          options: {
            disableNew: true, // we don't want people to be able to create new pages here!
          },
        },
      ],
      preview: {
        select: {
          heading: 'title',
        },
        prepare(selection) {
          const { heading } = selection
          return {
            title: heading,
            media: BiListPlus,
          }
        },
      },
    },
  ],
}

export { title, items }
