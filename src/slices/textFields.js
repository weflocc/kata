import { basicTextEditor } from '#partials'
import { BiListPlus } from 'react-icons/bi'

const title = {
  name: 'title',
  type: 'string',
}

const superHeading = {
  name: 'superHeading',
  type: 'string',
}

const textBody = {
  title: 'textBody',
  name: 'textBody',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        // Only allow these decorators
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [],
      },
    },
  ],
}

const list = {
  title: 'List',
  name: 'list',
  type: 'array',
  of: [
    {
      type: 'listItem',
      name: 'listItem',
    },
  ],
}

const listWithButtons = {
  title: 'List',
  name: 'list',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'listItem',
      fields: [title, basicTextEditor('Text Body', null, { buttons: true })],
      preview: {
        select: {
          heading: 'title',
        },
        prepare(selection) {
          const { heading } = selection
          return {
            title: heading || 'List item',
            media: BiListPlus,
          }
        },
      },
    },
  ],
}

export { title, textBody, list, superHeading, listWithButtons }
