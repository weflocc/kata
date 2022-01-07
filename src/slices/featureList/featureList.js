import { defaultOptions } from 'part:@weflocc/kata/partials/defaults'

const featureList01 = {
  name: 'featureList01',
  title: 'Feature List #1',
  type: 'object',
  options: defaultOptions,
  fields: [
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        {
          type: 'feature01',
          name: 'feature01',
        },
      ],
    },
  ],
}

export { featureList01 }
