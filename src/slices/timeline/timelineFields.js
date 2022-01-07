import { standardImage } from 'part:@weflocc/kata/partials/image'
import { basicTextEditor } from 'part:@weflocc/kata/partials/textEditor'
import { BiListPlus } from 'react-icons/bi'
import config from 'config:@weflocc/kata'

const title = {
  name: 'title',
  type: 'string',
}

const text = {
  name: 'text',
  title: 'Text',
  type: 'text',
  rows: 4,
}

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
        {
          type: 'string',
          name: 'title',
          title: 'Title',
        },
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
        {
          type: 'text',
          name: 'text',
          title: 'Text',
          rows: 3,
        },
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

export { title, list, text }
