import config from 'config:@weflocc/kata'
import { standardImage, links } from 'part:@weflocc/kata/partials/index'
import { BiListPlus } from 'react-icons/bi'
import { title, superHeading, text } from '../shared'

const thumbnails = {
  name: 'thumbnails',
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
      fields: [title, text, links('links', 1), standardImage()],
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
  name: 'imageThumbnails',
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
      fields: [title, links('links', 1), standardImage()],
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
  name: 'imageThumbnails',
  title: 'Thumbnails',
  type: 'array',
  options: {
    collapsable: true,
  },
  of: [standardImage()],
}

export {
  title,
  superHeading,
  text,
  thumbnails,
  imageThumbnails,
  portfolio06Slides,
}
