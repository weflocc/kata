import { BiTable } from 'react-icons/bi'

const table = {
  title: 'Table',
  name: 'table',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Table title',
    },
    {
      name: 'table',
      type: 'table',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      let { title } = selection
      return {
        title: title || 'Table',
        media: BiTable,
      }
    },
  },
}

export { table }
