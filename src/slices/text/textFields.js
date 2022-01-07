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

export { title, textBody, list, superHeading }
