import { links } from 'part:@weflocc/kata/partials/links'
import { defaultOptions } from 'part:@weflocc/kata/partials/defaults'
import { title, text, items } from './ctaFields'
import { standardImage } from 'part:@weflocc/kata/partials/image'

const cta01 = {
  name: 'cta01',
  type: 'object',
  title: 'Call To Action #01',
  options: defaultOptions,
  fields: [title, text, links()],
}

const cta02 = {
  name: 'cta02',
  type: 'object',
  title: 'Call To Action #02',
  options: defaultOptions,
  fields: [title, items],
}

const cta05 = {
  name: 'cta05',
  type: 'object',
  title: 'Call To Action #05',
  options: defaultOptions,
  fields: [title, text, standardImage(), links()],
}

const cta08 = {
  name: 'cta08',
  type: 'object',
  title: 'Call To Action #08',
  options: defaultOptions,
  fields: [links()],
}

export { cta01, cta02, cta05, cta08 }
