import { hiddenTitle } from '../partials/meta'
import config from 'config:@weflocc/kata'
import { RiMenuAddLine } from 'react-icons/ri'
import { basicSingleLink } from 'part:@weflocc/kata/partials/index'

const linkItem = (index) => {
  // max of 5 levels deep!
  if (index < 5) {
    index++
    return {
      type: 'object',
      title: 'Menu Item',
      name: 'menuItem',
      fields: [
        {
          type: 'string',
          name: 'title',
          title: 'Custom link text',
        },
        basicSingleLink,
        {
          title: 'Children',
          name: 'list',
          type: 'array',
          of: [linkItem(index)],
        },
      ],
      preview: {
        select: {
          linkTitle: 'singleLink.internalLink.title',
          title: 'title',
        },
        prepare(selection) {
          const { title, linkTitle } = selection
          return {
            title: title || linkTitle || 'Unknown',
            media: RiMenuAddLine,
          }
        },
      },
    }
  } else {
    return {
      type: 'object',
      title: 'Menu Item',
      name: 'menuItem',
      fields: [basicSingleLink],
    }
  }
}

export default {
  type: 'document',
  name: 'pageInfiniteMenu',
  title: 'Menu',
  initialValue: {
    title: 'Menu',
  },
  fields: [
    hiddenTitle,
    {
      title: 'Menu',
      type: 'array',
      name: 'menu',
      of: [linkItem(0)],
    },
  ],
}
