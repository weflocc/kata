import config from 'config:@weflocc/kata'
import { BiLinkExternal, BiLink, BiAnchor } from 'react-icons/bi'
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
          {
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
          },
        ],
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
