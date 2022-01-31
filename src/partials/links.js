const camelCase = require('lodash.camelcase')
import config from 'config:@weflocc/kata'
import { BiLink, BiLinkExternal } from 'react-icons/bi'
import { GoFileSymlinkFile } from 'react-icons/go'
import { BsFilePost } from 'react-icons/bs'

const linkText = {
  type: 'string',
  name: 'linkText',
  title: 'Link text',
}

const linkStyle = {
  title: 'Link style',
  name: 'linkStyle',
  type: 'string',
  description:
    'Please select a button style. If you are unsure, select Primary CTA',
  validation: (Rule) => Rule.required(),
  initialValue: 'btn-primary',
  options: {
    list: [
      { title: 'Primary CTA', value: 'btn-primary' },
      { title: 'Secondary CTA', value: 'btn-secondary' },
      { title: 'Tertiary CTA', value: 'btn-tertiary' },
    ],
  },
}

const singleLink = {
  title: 'Link',
  name: 'singleLink',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'linkType',
      title: 'Type of link',
      validation: (Rule) => Rule.required(),
      // initialValue: config.buttonTypes[0].value,
      options: { list: config.buttonTypes },
    },
    {
      type: 'string',
      name: 'linkText',
      title: 'Link text',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'url',
      name: 'url',
      title: 'URL',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel', 'sms', 'www'],
        }),
      hidden: ({ parent }) => parent?.linkType != 'external',
    },
    {
      type: 'file',
      name: 'file',
      title: 'File',
      hidden: ({ parent }) => parent?.linkType != 'file',
    },
    {
      type: 'reference',
      name: 'internalLink',
      to: config.allTypes,
      options: {
        // disableNew: true, // do we want people to be able to create new pages here?
      },
      hidden: ({ parent }) => parent?.linkType != 'internal',
    },
    {
      name: 'anchor',
      type: 'string',
      title: 'Anchor link or Query string',
      hidden: ({ parent }) => parent?.linkType != 'internal',
    },
    {
      type: 'string',
      name: 'query',
      title: 'Query',
      description:
        'For developer use only. If you edit this, your lightbox will break.',
      hidden: ({ parent }) => parent?.linkType != 'lightbox',
    },
    linkStyle,
  ],
  preview: {
    select: {
      title: 'linkText',
      type: 'linkType',
    },
    prepare(selection) {
      const { title, type } = selection
      let icon = BiLink
      if (type == 'external') {
        icon = BiLinkExternal
      } else if (type == 'file') {
        icon = GoFileSymlinkFile
      } else if (type == 'lightbox') {
        icon = BsFilePost
      }
      return {
        title: title,
        media: icon,
      }
    },
  },
}

const links = (name = 'Links', max = '') => {
  return {
    name: camelCase(name),
    title: name,
    type: 'array',
    of: [singleLink],
    validation: max ? (Rule) => Rule.max(max) : '',
  }
}

export { linkText, linkStyle, links }
