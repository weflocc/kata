import config from 'config:@weflocc/kata'
import { BiLinkExternal, BiLink, BiAnchor, BiKey } from 'react-icons/bi'
import { GoFileSymlinkFile } from 'react-icons/go'
import { standoutText } from '../components/standoutText'
const camelCase = require('lodash.camelcase')

const basicTextEditor = (name = 'Text Body', settings) => {
  return {
    title: name,
    name: camelCase(name),
    type: 'array',
    ...settings,
    of: [
      {
        type: 'block',
        lists: [
          { title: 'Bullet', value: 'bullet' },
          { title: 'Numbered', value: 'number' },
        ],
        styles: [],
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
                  options: {
                    disableNew: true, // we don't want people to be able to create new pages here!
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  }
}

const fullTextEditor = (name = 'Text Body', includes, settings) => {
  let annotations = [
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
  ]
  if (includes && includes.idAndAnchor) {
    annotations.push({
      name: 'id',
      type: 'object',
      title: 'ID',
      blockEditor: {
        icon: BiKey,
      },
      fields: [
        {
          type: 'string',
          name: 'id',
          title: 'Id',
          validation: (Rule) =>
            Rule.custom((name) => {
              if (typeof name === 'undefined') {
                return true // Allow undefined values
              }

              // This would crash if we didn't check
              // for undefined values first
              return name.includes(' ')
                ? 'No spaces allowed, please use hyphens (-) instead.'
                : true
            }).required(),
          description:
            'Set an id on a section of a page, with no spaces. An anchor link can scroll to this id.',
        },
      ],
    })
    annotations.push({
      name: 'anchor',
      type: 'object',
      title: 'Anchor link',
      blockEditor: {
        icon: BiAnchor,
      },
      fields: [
        {
          type: 'string',
          name: 'anchor',
          title: 'Anchor',
          description:
            'Without the #. An anchor is the id of a section on this page.',
        },
      ],
    })
  }
  let customEditor = [
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
        annotations: annotations,
      },
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading', value: 'h2' },
        { title: 'Subheading', value: 'h3' },
      ],
    },
    {
      type: 'mediaPreview',
    },
    {
      type: 'buttons',
    },
  ]
  if (includes) {
    if (includes.feature01 || includes.textAndImage) {
      customEditor.push({
        type: 'textAndImage',
      })
    }
    if (includes.cta07 || includes.logos) {
      customEditor.push({
        type: 'logos',
      })
    }
    if (includes.accordion || includes.dropdown) {
      customEditor.push({
        type: 'accordion',
      })
    }
    if (includes.tableField || includes.table) {
      customEditor.push({
        type: 'tableField',
      })
    }
    if (includes.testimonials || includes.quotes) {
      customEditor.push({
        type: 'testimonials',
      })
    }
    if (includes.standoutText) {
      customEditor.push(standoutText)
    }
  }
  return {
    title: name,
    name: camelCase(name),
    type: 'array',
    ...settings,
    of: customEditor,
  }
}

const liteTextEditor = (name = 'Text Body', settings) => {
  return {
    title: name,
    name: camelCase(name),
    type: 'array',
    ...settings,
    of: [
      {
        type: 'block',
        lists: [],
        styles: [],
        marks: {
          decorators: [
            { title: 'Strong', value: 'strong' },
            { title: 'Emphasis', value: 'em' },
            { title: 'Underline', value: 'underline' },
          ],
          annotations: [],
        },
      },
    ],
  }
}

export { basicTextEditor, fullTextEditor, liteTextEditor }
