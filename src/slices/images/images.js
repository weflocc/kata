import {
  defaultOptions,
  basicSingleLink,
  standardImage,
  media,
} from 'part:@weflocc/kata/partials/index'
import { title } from '../shared'
import { BiListPlus } from 'react-icons/bi'

const imageThumbnails = {
  name: 'list',
  title: 'Images',
  type: 'array',
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
            title: heading || image.title || 'Image',
            media: image || BiListPlus,
          }
        },
      },
    },
  ],
}

const imageThumbnailsNoLink = {
  name: 'list',
  title: 'Images',
  type: 'array',
  of: [
    {
      name: 'item',
      title: 'Item',
      type: 'object',
      fields: [title, standardImage()],
      preview: {
        select: {
          heading: 'title',
          image: 'image',
        },
        prepare(selection) {
          const { heading, image } = selection
          return {
            title: heading || image.title || 'Image',
            media: image || BiListPlus,
          }
        },
      },
    },
  ],
}

const images01 = {
  name: 'images01',
  type: 'object',
  title: 'Images #1',
  options: defaultOptions,
  fields: [title, imageThumbnails],
}

const images02 = {
  name: 'images02',
  type: 'object',
  title: 'Images #2',
  options: defaultOptions,
  fields: [title, imageThumbnailsNoLink],
}

const images03 = {
  name: 'images03',
  type: 'object',
  title: 'Images #3',
  options: defaultOptions,
  fields: [media()],
}

const images04 = {
  name: 'images04',
  type: 'object',
  title: 'Images #4',
  options: defaultOptions,
  fields: [imageThumbnailsNoLink],
}

export default { images01, images02, images03, images04 }
