import { hiddenTitle } from '../partials/meta'
import {getKataConfig} from '../kataConfig'
import { RiMenuAddLine } from 'react-icons/ri'

const config = getKataConfig()

export default {
  type: 'document',
  name: 'pageSimpleMenu',
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