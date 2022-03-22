import { BiDownArrowCircle } from 'react-icons/bi'
import { basicTextEditor } from 'part:@weflocc/kata/partials/index'

const accordion = {
  name: 'accordion',
  title: 'Dropdown (Accordion)',
  type: 'object',
  fields: [
    {
      name: 'list',
      type: 'array',
      of: [
        {
          name: 'item',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
            },
            basicTextEditor(),
          ],
          preview: {
            select: {
              title: 'title',
            },
            prepare(selection) {
              let { title } = selection
              return {
                title: title || 'Accordion',
                media: BiDownArrowCircle,
              }
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      list: 'list',
    },
    prepare(selection) {
      let { list } = selection
      let length = list ? list.length : 0
      return {
        title: 'Dropdown (Accordion)',
        subtitle: 'Number of accordions: ' + length,
        media: BiDownArrowCircle,
      }
    },
  },
}

export { accordion }
