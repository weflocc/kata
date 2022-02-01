import { standardImage, links } from 'part:@weflocc/kata/partials/index'
import { BiListPlus } from 'react-icons/bi'
import { title, superHeading, text } from '../shared'

const list = {
  title: 'List',
  name: 'list',
  type: 'array',
  of: [
    {
      type: 'object',
      title: 'Item',
      name: 'item',
      fields: [title, superHeading, text, links('Links', 1), standardImage()],
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

export { list }
