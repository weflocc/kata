import { standardImage, links } from 'part:@weflocc/kata/partials/index'
import { BiListPlus } from 'react-icons/bi'
import { title, superHeading, text } from '../shared'

const items = {
  title: 'Items',
  name: 'items',
  type: 'array',
  of: [
    {
      type: 'object',
      title: 'Item',
      name: 'item',
      fields: [standardImage(), title, superHeading, text, links()],
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

export { items }
