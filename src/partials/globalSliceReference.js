const camelCase = require('lodash.camelcase')

const globalSliceReference = (name, hidden = '') => {
  return {
    name: camelCase(name),
    title: name,
    hidden: hidden,
    description:
      'This slice is shown on multiple pages. Click the link icon to see/edit it. This will affect all instances.',
    type: 'reference',
    to: [{ type: 'globalSlices' }],
  }
}

export { globalSliceReference }
