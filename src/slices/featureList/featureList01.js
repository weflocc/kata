import { defaultOptions } from  '#partials'

const featureList01 = {
  name: 'featureList01',
  title: 'Feature List #1',
  type: 'object',
  options: defaultOptions,
  fields: [
    {
      name: 'list',
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

export default featureList01
