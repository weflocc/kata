import config from 'config:@weflocc/kata'
import {
  standardImage,
  links,
  basicSingleLink,
} from 'part:@weflocc/kata/partials/index'
import { BiListPlus } from 'react-icons/bi'
import { title, text } from '../shared'

const thumbnails = {
  name: 'list',
  title: 'Thumbnails',
  type: 'array',
  options: {
    collapsable: true,
  },
  of: [
    {
      name: 'item',
      title: 'Item',
      type: 'object',
      fields: [title, text, basicSingleLink, standardImage()],
      preview: {
        select: {
          heading: 'title',
          image: 'image',
        },
        prepare(selection) {
          const { heading, image } = selection
          return {
            title: heading,
            media: image || BiListPlus,
          }
        },
      },
    },
  ],
}

const imageThumbnails = {
  name: 'list',
  title: 'Thumbnails',
  type: 'array',
  options: {
    collapsable: true,
  },
  of: [
    {
      name: 'item',
      title: 'Item',
      type: 'object',
      fields: [title, basicSingleLink, standardImage()],
      preview: {
        select: {
          heading: 'title',
          image: 'image',
        },
        prepare(selection) {
          const { heading, image } = selection
          return {
            title: heading,
            media: image || BiListPlus,
          }
        },
      },
    },
  ],
}

const portfolio06Slides = {
  name: 'list',
  title: 'Thumbnails',
  type: 'array',
  options: {
    collapsable: true,
  },
  of: [standardImage()],
}

export { thumbnails, imageThumbnails, portfolio06Slides }
