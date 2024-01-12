import {
  thumbnails,
  imageThumbnails,
  portfolio06Slides,
} from './portfolioFields'
import {
  defaultOptions,
  links,
  basicTextEditor,
} from  '#partials'
import { title, superHeading, text } from '../shared'

const portfolio01 = {
  name: 'portfolio01',
  type: 'object',
  title: 'Portfolio #1',
  options: defaultOptions,
  fields: [superHeading, title, thumbnails],
}

const portfolio03 = {
  name: 'portfolio03',
  type: 'object',
  title: 'Portfolio #3',
  options: defaultOptions,
  fields: [title, text, thumbnails, links()],
}

const portfolio04 = {
  name: 'portfolio04',
  type: 'object',
  title: 'Portfolio #4',
  options: defaultOptions,
  fields: [title, thumbnails, links()],
}

const portfolio05 = {
  name: 'portfolio05',
  type: 'object',
  title: 'Portfolio #5',
  options: defaultOptions,
  fields: [title, thumbnails],
}

const portfolio06 = {
  name: 'portfolio06',
  type: 'object',
  title: 'Portfolio #6',
  options: defaultOptions,
  fields: [title, portfolio06Slides, basicTextEditor(), links()],
}

const portfolio07 = {
  name: 'portfolio07',
  type: 'object',
  title: 'Portfolio #7',
  options: defaultOptions,
  fields: [title, imageThumbnails],
}

const portfolio08 = {
  name: 'portfolio08',
  type: 'object',
  title: 'Portfolio #8',
  options: defaultOptions,
  fields: [title, thumbnails],
}

const portfolio09 = {
  name: 'portfolio09',
  type: 'object',
  title: 'Portfolio #9',
  options: defaultOptions,
  fields: [title, text, thumbnails],
}

const portfolio10 = {
  name: 'portfolio10',
  type: 'object',
  title: 'Portfolio #10',
  options: defaultOptions,
  fields: [title, thumbnails],
}

export {
  portfolio01,
  portfolio03,
  portfolio04,
  portfolio05,
  portfolio06,
  portfolio07,
  portfolio08,
  portfolio09,
  portfolio10,
}
