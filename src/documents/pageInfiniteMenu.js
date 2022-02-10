import { hiddenTitle } from '../partials/meta'
import config from 'config:@weflocc/kata'
import { RiMenuAddLine } from 'react-icons/ri'
import { basicSingleLink } from 'part:@weflocc/kata/partials/index'

const linkItem = (index) => {
  // max of 4 levels deep!
  if (index < 4) {
    index++
    return {
      type: 'object',
      title: 'Menu Item',
      name: 'menuItem',
      fields: [
        basicSingleLink,
        {
          title: 'Children',
          name: 'list',
          type: 'array',
          of: [linkItem(index)],
        },
      ],
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
