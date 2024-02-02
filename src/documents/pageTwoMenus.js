import { hiddenTitle } from '../partials/meta'
import { RiMenuAddLine } from 'react-icons/ri'
import {getKataConfig} from '../kataConfig'

const config = getKataConfig()

export default {
  type: 'document',
  name: 'pageTwoMenus',
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
              title: 'Custom Title',
              name: 'noLinkJustTitle',
              description:
                'You can use this instead of choosing a link, to make a menu item that is just a parent, not a link to something.',
              type: 'string',
            },
            {
              title: 'Link',
              name: 'link',
              type: 'reference',
              to: config.allTypes,
              options: {
                disableNew: true, // we don't want people to be able to create new pages here!
              },
            },
            {
              title: 'Children',
              name: 'children',
              type: 'array',
              of: [
                {
                  type: 'object',
                  title: 'Menu Item',
                  name: 'menu',
                  fields: [
                    {
                      title: 'Custom Title (optional)',
                      name: 'customTitle',
                      type: 'string',
                    },
                    {
                      title: 'Link',
                      name: 'link',
                      type: 'reference',
                      to: config.allTypes,
                      options: {
                        disableNew: true, // we don't want people to be able to create new pages here!
                      },
                    },
                  ],
                  preview: {
                    select: {
                      title: 'customTitle',
                      link: 'link.title',
                    },
                    prepare(selection) {
                      const { title, link } = selection
                      return {
                        title: title || link || 'Unknown',
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
              title: 'link.title',
              noLinkJustTitle: 'noLinkJustTitle',
            },
            prepare(selection) {
              const { title, noLinkJustTitle } = selection
              return {
                title: title || noLinkJustTitle || 'Unknown',
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
              title: 'Custom Title',
              name: 'noLinkJustTitle',
              description:
                'You can use this instead of choosing a link, to make a menu item that is just a parent, not a link to something.',
              type: 'string',
            },
            {
              title: 'Link',
              name: 'link',
              type: 'reference',
              to: config.allTypes,
              options: {
                disableNew: true, // we don't want people to be able to create new pages here!
              },
            },
            {
              title: 'Children',
              name: 'children',
              type: 'array',
              of: [
                {
                  type: 'object',
                  title: 'Menu Item',
                  name: 'menu',
                  fields: [
                    {
                      title: 'Custom Title (optional)',
                      name: 'customTitle',
                      type: 'string',
                    },
                    {
                      title: 'Link',
                      name: 'link',
                      type: 'reference',
                      to: config.allTypes,
                      options: {
                        disableNew: true, // we don't want people to be able to create new pages here!
                      },
                    },
                  ],
                  preview: {
                    select: {
                      title: 'customTitle',
                      link: 'link.title',
                    },
                    prepare(selection) {
                      const { title, link } = selection
                      return {
                        title: title || link || 'Unknown',
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
              title: 'link.title',
              noLinkJustTitle: 'noLinkJustTitle',
            },
            prepare(selection) {
              const { title, noLinkJustTitle } = selection
              return {
                title: title || noLinkJustTitle || 'Unknown',
                media: RiMenuAddLine,
              }
            },
          },
        },
      ],
    },
  ],
}
