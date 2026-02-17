import {getKataConfig} from '../kataConfig'
import { BiLinkExternal, BiLink, BiParagraph, BiAnchor } from 'react-icons/bi'
import { GoFileSymlinkFile } from 'react-icons/go'

const config = getKataConfig()

const paragraph = {
  title: 'Paragraph',
  name: 'paragraph',
  type: 'object',
  fields: [
    {
      title: 'Content',
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
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean',
                    layout: 'checkbox',
                    initialValue: false,
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
              {
                name: 'anchor',
                type: 'object',
                title: 'Anchor link',
                icon: BiAnchor,
                fields: [
                  {
                    type: 'string',
                    name: 'anchor',
                    title: 'Anchor',
                    description:
                      "An anchor is the id of a section on this page. On a page builder, each block has the id 'block-1', 'block-2', etc",
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
      let title = block.children
        .filter((child) => child._type === 'span')
        .map((span) => span.text)
        .join('')
      return {
        title: title || 'Paragraph Text',
        media: BiParagraph,
      }
    },
  },
}

export { paragraph }
