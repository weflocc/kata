import camelCase from 'lodash.camelcase'

const globalSliceReference = (name, hidden = false) => {
  return {
    name: camelCase(name),
    title: name,
    hidden: hidden,
    description:
      'This slice is shown on multiple pages. Click below to see/edit it. Editing it will affect all instances.',
    type: 'reference',
    to: [{ type: 'globalSlices' }],
  }
}

export { globalSliceReference }
