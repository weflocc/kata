import { defaultOptions } from '../partials'
const camelCase = require('lodash.camelcase')

const standardImage = (name = 'Image', vars = {}) => {
  const required = vars?.required || false
  const title = vars?.title || name
  const description = vars?.description || ''
  const hidden = vars?.hidden || false
  return {
    name: camelCase(name),
    title: title,
    type: 'image',
    description: description,
    hidden: hidden,
    options: {
      hotspot: true,
      ...defaultOptions,
    },
    validation: required
      ? (Rule) => Rule.required('Please select an image.')
      : null,
  }
}

export { standardImage }
