import { title, superHeading, text } from '../shared'
import {
  features,
  shortFeatures,
  featureImageTabs,
  featureTabs,
  locations,
} from './featureFields'
import {
  standardImage,
  media,
  links,
  defaultOptions,
  basicTextEditor,
} from  '#partials'
import { BiListPlus } from 'react-icons/bi'

const feature01 = {
  name: 'feature01',
  type: 'object',
  title: 'Feature #1',
  options: defaultOptions,
  fields: [superHeading, title, basicTextEditor(), links(), media()],
  preview: {
    select: {
      superHeading: 'superHeading',
      heading: 'title',
    },
    prepare(selection) {
      const { superHeading, heading } = selection
      return {
        title: superHeading || heading,
        subtitle: superHeading ? heading : '',
        media: BiListPlus,
      }
    },
  },
}

const feature02 = {
  name: 'feature02',
  type: 'object',
  title: 'Feature #2',
  options: defaultOptions,
  fields: [title, basicTextEditor(), shortFeatures(), media()],
}

const feature03 = {
  name: 'feature03',
  type: 'object',
  title: 'Feature #3',
  options: defaultOptions,
  fields: [title, basicTextEditor(), links(), media()],
}

const feature04 = {
  name: 'feature04',
  type: 'object',
  title: 'Feature #4',
  options: defaultOptions,
  fields: [title, basicTextEditor(), links()],
}

const feature05 = {
  name: 'feature05',
  type: 'object',
  title: 'Feature #5',
  options: defaultOptions,
  fields: [title, text, features, links()],
}
const feature06 = {
  name: 'feature06',
  type: 'object',
  title: 'Feature #6',
  options: defaultOptions,
  fields: [title, basicTextEditor(), links(), features],
}
const feature07 = {
  name: 'feature07',
  type: 'object',
  title: 'Feature #7',
  options: defaultOptions,
  fields: [title, basicTextEditor(), features, links()],
}
const feature08 = {
  name: 'feature08',
  type: 'object',
  title: 'Feature #8',
  options: defaultOptions,
  fields: [title, basicTextEditor(), media(), links()],
}
const feature09 = {
  name: 'feature09',
  type: 'object',
  title: 'Feature #9',
  options: defaultOptions,
  fields: [title, featureTabs],
}
const feature10 = {
  name: 'feature10',
  type: 'object',
  title: 'Feature #10',
  options: defaultOptions,
  fields: [title, locations],
}
const feature11 = {
  name: 'feature11',
  type: 'object',
  title: 'Feature #11',
  options: defaultOptions,
  fields: [featureImageTabs],
}
const feature12 = {
  name: 'feature12',
  type: 'object',
  title: 'Feature #12',
  options: defaultOptions,
  fields: [title, text, shortFeatures(), links(), media()],
}

export {
  feature01,
  feature02,
  feature03,
  feature04,
  feature05,
  feature06,
  feature07,
  feature08,
  feature09,
  feature10,
  feature11,
  feature12,
}
