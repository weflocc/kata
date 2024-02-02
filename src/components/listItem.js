import { BiListPlus } from 'react-icons/bi'

export default {
  type: 'object',
  name: 'listItem',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'text',
      rows: 3,
    },
  ],
  preview: {
    select: {
      heading: 'title',
      text: 'text',
    },
    prepare(selection) {
      const { heading, text } = selection
      let subtitle = ''
      if (text) {
        let showEllipsis = true
        if (text.length < 50) {
          showEllipsis = false
        }
        subtitle = text.toString().slice(0, 50)
        subtitle += showEllipsis ? '...' : ''
      }
      return {
        title: heading || 'List item',
        subtitle: text ? subtitle : '',
        media: BiListPlus,
      }
    },
  },
}
