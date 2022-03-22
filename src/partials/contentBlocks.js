const camelCase = require('lodash.camelcase')
import { BiLink } from 'react-icons/bi'
import { media, links } from './index'
import { accordion } from '../blocks/accordion'
import { paragraph } from '../blocks/paragraph'
import { table } from '../blocks/table'
import { textAndImage } from '../blocks/textAndImage'

const buttons = {
  name: 'buttons',
  type: 'object',
  fields: [links()],
  preview: {
    select: {
      links: 'links',
    },
    prepare(selection) {
      const { links } = selection
      let subTitle = ''
      if (links) {
        links.forEach((elem) => {
          if (subTitle.length > 0) {
            subTitle += ', '
          }
          subTitle += elem.linkText
        })
      }
      return {
        title: 'Buttons',
        subtitle: subTitle,
        media: BiLink,
      }
    },
  },
}

const contentBlocks = (name = 'Content Blocks', includes) => {
  let customEditor = [paragraph, buttons, media()]
  if (includes) {
    if (includes.feature01 || includes.textAndImage)
      customEditor.push(textAndImage)

    if (includes.accordion || includes.dropdown) customEditor.push(accordion)

    if (includes.tableField || includes.table) customEditor.push(table)

    if (includes.testimonials || includes.quotes)
      customEditor.push({
        name: 'testimonial04',
        title: 'Testimonials',
        type: 'testimonial04',
      })
  }
  return {
    title: name,
    name: camelCase(name),
    type: 'array',
    of: customEditor,
  }
}

export { contentBlocks }
