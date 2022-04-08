import config from 'config:@weflocc/kata'
import { RiMenuAddLine } from 'react-icons/ri'
import { basicSingleLink, hiddenTitle } from 'part:@weflocc/kata/partials/index'

export default {
  type: 'document',
  name: 'pageMenu',
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
      of: [
        {
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
              of: [
                {
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
                },
              ],
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
        },
      ],
    },
  ],
}
