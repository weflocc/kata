import { linkText, linkStyle } from '#partials'
import { GoFileSymlinkFile } from 'react-icons/go'

export default {
  name: 'fileLink',
  type: 'object',
  title: 'File Link',
  fields: [
    {
      type: 'file',
      name: 'fileLink',
    },
    linkText,
    linkStyle,
  ],
  preview: {
    select: {
      title: 'linkText',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title,
        media: GoFileSymlinkFile,
      }
    },
  },
}
