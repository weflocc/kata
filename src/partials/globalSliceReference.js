import camelCase from 'lodash.camelcase'

const globalSliceReference = (name) => {
  return {
    name: camelCase(name),
    title: name,
    description:
      'This slice is shown on multiple pages. Click the link icon to see/edit it. This will affect all instances.',
    type: 'reference',
    to: [{ type: 'globalSlices' }],
  }
}

export { globalSliceReference }
