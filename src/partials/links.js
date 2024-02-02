import camelCase from 'lodash.camelcase'
import {getKataConfig} from '../kataConfig'

const config = getKataConfig()

const links = (name = 'Links', settings) => {
  return {
    name: camelCase(name),
    title: name,
    ...settings,
    type: 'array',
    editModal: 'popover',
    of: config.buttonTypes,
  }
}

const linkText = {
  type: 'string',
  name: 'linkText',
  title: 'Link text',
}

const linkStyle = {
  title: 'Link style',
  name: 'linkStyle',
  type: 'string',
  options: {
    list: [
      { title: 'Primary CTA', value: 'btn-primary' },
      { title: 'Secondary CTA', value: 'btn-secondary' },
      { title: 'Tertiary CTA', value: 'btn-tertiary' },
      { title: 'None', value: 'btn-plain' },
    ],
    layout: 'radio',
  },
}

export { linkText, linkStyle, links }
