import {
  basicTextEditor,
  liteTextEditor,
  fullTextEditor,
} from '../../partials'
import { BiListPlus } from 'react-icons/bi'
import { title } from '../shared'

function listSchema(fields) {
  return {
    title: 'List',
    name: 'list',
    type: 'array',
    of: [
      {
        type: 'object',
        name: 'listItem',
        fields: [...fields],
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
}
// list schemas
const list = listSchema([title, basicTextEditor()])
const listWithButtons = listSchema([
  title,
  basicTextEditor('Text Body', null, { buttons: true }),
])
const fullTextList = listSchema([title, fullTextEditor()])
const simpleList = listSchema([title, liteTextEditor()])

export { list, listWithButtons, simpleList, fullTextList }
