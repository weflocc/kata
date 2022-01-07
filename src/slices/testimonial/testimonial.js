import {
  superHeading,
  title,
  testimonials,
  quote,
  cite,
  testimonialsImage,
} from './testimonialFields'
import { defaultOptions } from 'part:@weflocc/kata/partials/defaults'
import { links } from 'part:@weflocc/kata/partials/links'

const testimonial01 = {
  name: 'testimonial01',
  type: 'object',
  title: 'Testimonial #1',
  options: defaultOptions,
  fields: [title, testimonialsImage],
}

const testimonial02 = {
  name: 'testimonial02',
  type: 'object',
  title: 'Testimonial #2',
  options: defaultOptions,
  fields: [testimonialsImage],
}

const testimonial03 = {
  name: 'testimonial03',
  type: 'object',
  title: 'Testimonial #3',
  options: defaultOptions,
  fields: [title, testimonials],
}

const testimonial04 = {
  name: 'testimonial04',
  type: 'object',
  title: 'Testimonial #4',
  options: defaultOptions,
  fields: [testimonials],
}

const testimonial05 = {
  name: 'testimonial05',
  type: 'object',
  title: 'Testimonial #5',
  options: defaultOptions,
  fields: [quote, cite, links()],
}

export {
  testimonial01,
  testimonial02,
  testimonial03,
  testimonial04,
  testimonial05,
}
