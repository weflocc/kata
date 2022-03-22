import config from 'config:@weflocc/kata'
import { BiLinkExternal, BiLink, BiParagraph } from 'react-icons/bi'
import { GoFileSymlinkFile } from 'react-icons/go'

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
                blockEditor: {
                  icon: BiLinkExternal,
                },
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
                blockEditor: {
                  icon: BiLink,
                },
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
                blockEditor: {
                  icon: GoFileSymlinkFile,
                },
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
