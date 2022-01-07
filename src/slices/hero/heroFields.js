const title = {
  name: 'title',
  type: 'string',
}

const superHeading = {
  name: 'superHeading',
  type: 'string',
}

const textBody = {
  title: 'Text Body',
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

// const image = {
//   name: 'image',
//   title: 'Media',
//   type: 'media'
// }

const text = {
  name: 'text',
  title: 'Text',
  type: 'text',
  rows: 4,
}

export { title, superHeading, textBody, text }
