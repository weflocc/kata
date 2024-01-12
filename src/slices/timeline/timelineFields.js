import { BiListPlus } from 'react-icons/bi'
import {title, text} from '../shared'

const list = {
  title: 'List',
  name: 'list',
  type: 'array',
  of: [
    {
      type: 'object',
      title: 'Item',
      name: 'item',
      fields: [
        {
          type: 'image',
          name: 'icon',
          title: 'Icon',
        },
        title,
        {
          type: 'date',
          name: 'tickDate',
          title: 'Tick Date',
          description: 'The tick will appear for this item after this date.',
          options: {
            dateFormat: 'DD MMM YYYY',
          },
        },
        {
          type: 'string',
          name: 'displayDate',
          title: 'Display Date',
        },
        text,
      ],
      preview: {
        select: {
          heading: 'title',
          image: 'icon',
        },
        prepare(selection) {
          const { heading, image } = selection
          return {
            title: heading,
            media: image || BiListPlus,
          }
        },
      },
    },
  ],
}

export { list }
