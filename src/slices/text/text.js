import { title, list, superHeading } from './textFields'
import { basicTextEditor } from 'part:@weflocc/kata/partials/textEditor'
import { media } from 'part:@weflocc/kata/partials/media'
import { defaultOptions } from 'part:@weflocc/kata/partials/defaults'
import { standardImage } from 'part:@weflocc/kata/partials/image'
import { links } from 'part:@weflocc/kata/partials/links'

const text01 = {
  name: 'text01',
  type: 'object',
  title: 'Text #1',
  options: defaultOptions,
  fields: [title, basicTextEditor(), links()],
}

const text02 = {
  name: 'text02',
  type: 'object',
  title: 'Text #2',
  options: defaultOptions,
  fields: [title, basicTextEditor()],
}

const text03 = {
  name: 'text03',
  type: 'object',
  title: 'Text #3',
  options: defaultOptions,
  fields: [title, basicTextEditor()],
}

const text04 = {
  name: 'text04',
  type: 'object',
  title: 'Text #4',
  options: defaultOptions,
  fields: [superHeading, title, list, standardImage()],
}

const text05 = {
  name: 'text05',
  type: 'object',
  title: 'Text #5',
  options: defaultOptions,
  fields: [title, basicTextEditor(), standardImage()],
}

const text06 = {
  name: 'text06',
  type: 'object',
  title: 'Text #6',
  options: defaultOptions,
  fields: [title, basicTextEditor()],
}

const text07 = {
  name: 'text07',
  type: 'object',
  title: 'Text #7',
  options: defaultOptions,
  fields: [title, list],
}

const text08 = {
  name: 'text08',
  type: 'object',
  title: 'Text #8',
  options: defaultOptions,
  fields: [title, basicTextEditor()],
}

const text09 = {
  name: 'text09',
  type: 'object',
  title: 'Text #9',
  options: defaultOptions,
  fields: [title, list],
}

export {
  text01,
  text02,
  text03,
  text04,
  text05,
  text06,
  text07,
  text08,
  text09,
}
