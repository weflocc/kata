import camelCase from 'lodash.camelcase'
import { BiLink, BiListPlus, BiLinkExternal } from 'react-icons/bi'
import { BsCardText } from 'react-icons/bs'
import { media, links } from   '#partials'
import { accordion } from '../blocks/accordion'
import { paragraph } from '../blocks/paragraph'
import { map } from '../blocks/map'
import { table } from '../blocks/table'
import { textAndImage } from '../blocks/textAndImage'
import { getKataConfig } from '../kataConfig'
import { GoFileSymlinkFile } from 'react-icons/go'

const config = getKataConfig()

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
const richText = {
  name: 'richText',
  title: 'Rich Text',
  type: 'object',
  fields: [
    {
      title: 'Text Body',
      name: 'textBody',
      type: 'array',
      of: [
        {
          type: 'block',
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                icon: BiLinkExternal,
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel', 'sms'],
                      }),
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean',
                    layout: 'checkbox',
                    initialValue: true,
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                icon: BiLink,
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: config.allTypes,
                  },
                ],
              },
              {
                name: 'file',
                type: 'object',
                title: 'File',
                icon: GoFileSymlinkFile,
                fields: [
                  {
                    name: 'file',
                    type: 'file',
                    title: 'File',
                    to: config.allTypes,
                  },
                ],
              },
            ],
          },
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading', value: 'h2' },
            { title: 'Subheading', value: 'h3' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      blocks: 'textBody',
    },
    prepare(value) {
      const block = (value.blocks || []).find(
        (block) => block._type === 'block'
      )
      return {
        title: block
          ? block.children
              .filter((child) => child._type === 'span')
              .map((span) => span.text)
              .join('')
          : 'No title',
        media: BiListPlus,
      }
    },
  },
}

const contentBlocks = (name = 'Content Blocks', includes) => {
  let customEditor = [richText, buttons, media()]
  if (includes) {
    if (includes.feature01 || includes.textAndImage)
      customEditor.push(textAndImage)

    if (includes.accordion || includes.dropdown) customEditor.push(accordion)

    if (includes.tableField || includes.table) customEditor.push(table)

    if (includes.map) customEditor.push(map)

    if (includes.testimonials || includes.quotes)
      customEditor.push({
        name: 'testimonial04',
        title: 'Testimonials',
        type: 'testimonial04',
      })

    if (includes.features) {
      customEditor.push({
        name: 'feature05',
        title: 'Features',
        type: 'feature05',
      })
    }

    if (includes.cta07 || includes.logos) {
      customEditor.push({
        type: 'logos',
      })
    }

    if (includes.standoutText)
      customEditor.push({
        name: 'standoutText',
        type: 'object',
        fields: [
          {
            type: 'text',
            name: 'text',
            title: 'Standout text',
          },
          {
            name: 'cite',
            title: 'Cite',
            type: 'string',
            instructions: 'Underneath the standout text',
          },
        ],
        preview: {
          select: {
            text: 'text',
            cite: 'cite',
          },
          prepare(selection) {
            const { text, cite } = selection
            return {
              title: text,
              subtitle: cite,
              media: BsCardText,
            }
          },
        },
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
