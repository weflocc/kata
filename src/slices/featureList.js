// nb, this uses the fields from featureFields.

// import {features} from './featureFields'
import {
  title,
  superHeading,
  textBody,
  shortFeatures,
  features,
  text,
  featureTabs,
  featureImageTabs,
  locations,
} from './featureFields'
import { standardImage } from '#partials'
import { links } from '#partials'
import { defaultOptions } from '#partials'

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

// const feature05 = {
//   name: 'feature05',
//   type: 'object',
//   title: 'Feature #5',
//   options: defaultOptions,
//   fields: [title, features, links()]
// }

// const feature07 = {
//   name: 'feature07',
//   type: 'object',
//   title: 'Feature #7',
//   options: defaultOptions,
//   fields: [title, features, links()]
// }
export { featureList01 }
