import { links } from 'part:@weflocc/kata/partials/links'

const title = {
  name: 'title',
  type: 'string',
}

const superHeading = {
  name: 'superHeading',
  type: 'string',
}

const text = {
  name: 'text',
  title: 'Text',
  type: 'text',
  rows: 3,
}

const items = {
  name: 'items',
  title: 'Items',
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

export { title, text, superHeading, items }
