import { basicTextEditor } from 'part:@weflocc/kata/partials/index'
import { BiListPlus } from 'react-icons/bi'
import { title } from '../shared'

const list = {
  title: 'List',
  name: 'list',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'listItem',
      fields: [title, basicTextEditor()],
      preview: {
        select: {
          heading: 'title',
        },
        prepare(selection) {
          const { heading } = selection
          return {
            title: heading || 'List item',
            media: BiListPlus,
          }
        },
      },
    },
  ],
}

export { list }
