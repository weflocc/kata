import config from '../../config.dist.json'
import { RiMenuAddLine } from 'react-icons/ri'
import { basicSingleLink, hiddenTitle } from '../partials'

export default {
  type: 'document',
  name: 'pageTwoMenus',
  title: 'Menus',
  initialValue: {
    title: 'Menus',
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
    {
      title: 'Secondary Menu',
      type: 'array',
      name: 'secondaryMenu',
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
