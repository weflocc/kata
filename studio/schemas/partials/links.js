const allTypesFallback = [{type: 'page'}]
const camelCase = require('lodash.camelcase')

const links = (name = 'Links') => {
  return {
    name: camelCase(name),
    title: name,
    type: 'array',
    validation: Rule => Rule.max(2).warning('The maximum number of CTA links on this slice is 2'),
    editModal: 'popover',
    of: [
      {type: 'internalLink'},
      {type: 'fileLink'},
      {type: 'externalLink'}
    ]
  }
}

const internalLink = (name = 'internalLink', allTypes = allTypesFallback) => {
  return {
      name: name,
      type: 'reference',
      to: allTypes
  }
}

const linkText = {
  type: 'string',
  name: 'linkText',
  title: 'Link text'
}

const linkStyle = {
  title: 'Link style',
  name: 'linkStyle',
  type: 'string',
  options: {
    list: [
      {title: 'Primary CTA', value: 'btn-primary'},
      {title: 'Secondary CTA', value: 'btn-secondary'},
      {title: 'Tertiary CTA', value: 'btn-tertiary'},
      {title: 'None', value: 'btn-plain'}
    ],
    layout: 'radio'
  }
}

export {linkText, linkStyle, links, internalLink}
