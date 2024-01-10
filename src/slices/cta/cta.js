import {
  standardImage,
  defaultOptions,
  links,
  basicTextEditor,
} from '../../partials'
import { title, text } from '../shared'

const list = {
  name: 'list',
  title: 'List',
  type: 'array',
  of: [
    {
      name: 'item',
      title: 'Item',
      type: 'object',
      fields: [title, text, links()],
    },
  ],
}

const cta01 = {
  name: 'cta01',
  type: 'object',
  title: 'Call To Action #01',
  options: defaultOptions,
  fields: [title, basicTextEditor(), links()],
}

const cta02 = {
  name: 'cta02',
  type: 'object',
  title: 'Call To Action #02',
  options: defaultOptions,
  fields: [title, list],
}

const cta05 = {
  name: 'cta05',
  type: 'object',
  title: 'Call To Action #05',
  options: defaultOptions,
  fields: [title, basicTextEditor(), standardImage(), links()],
}

const cta07 = {
  name: 'cta07',
  type: 'object',
  title: 'Call To Action #07',
  options: defaultOptions,
  fields: [
    title,
    basicTextEditor(),
    {
      name: 'list',
      title: 'Logos',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        {
          name: 'item',
          type: 'object',
          title: 'Item',
          fields: [
            { name: 'title', type: 'string' },
            standardImage('Logo'),
            { name: 'url', type: 'url' },
          ],
        },
      ],
      preview: {
        select: {
          image: 'image',
        },
        prepare(selection) {
          const { image } = selection
          return {
            title: 'Logo',
            media: image,
          }
        },
      },
    },
    links(),
  ],
}

const cta08 = {
  name: 'cta08',
  type: 'object',
  title: 'Call To Action #08',
  options: defaultOptions,
  fields: [links()],
}

export { cta01, cta02, cta05, cta07, cta08 }
