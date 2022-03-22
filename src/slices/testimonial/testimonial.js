import {
  testimonials,
  quote,
  cite,
  testimonialsImage,
} from './testimonialFields'
import { defaultOptions, links } from 'part:@weflocc/kata/partials/index'
import { superHeading, title } from '../shared'
import { BiChat } from 'react-icons/bi'

const testimonial01 = {
  name: 'testimonial01',
  type: 'object',
  title: 'Testimonial #1',
  options: defaultOptions,
  fields: [title, testimonialsImage],
  preview: {
    prepare() {
      return {
        title: 'Testimonials',
        media: BiChat,
      }
    },
  },
}

const testimonial02 = {
  name: 'testimonial02',
  type: 'object',
  title: 'Testimonial #2',
  options: defaultOptions,
  fields: [testimonialsImage],
  preview: {
    prepare() {
      return {
        title: 'Testimonials',
        media: BiChat,
      }
    },
  },
}

const testimonial03 = {
  name: 'testimonial03',
  type: 'object',
  title: 'Testimonial #3',
  options: defaultOptions,
  fields: [title, testimonials],
  preview: {
    prepare() {
      return {
        title: 'Testimonials',
        media: BiChat,
      }
    },
  },
}

const testimonial04 = {
  name: 'testimonial04',
  type: 'object',
  title: 'Testimonial #4',
  options: defaultOptions,
  fields: [testimonials],
  preview: {
    prepare() {
      return {
        title: 'Testimonials',
        media: BiChat,
      }
    },
  },
}

const testimonial05 = {
  name: 'testimonial05',
  type: 'object',
  title: 'Testimonial #5',
  options: defaultOptions,
  fields: [quote, cite, links()],
  preview: {
    prepare() {
      return {
        title: 'Testimonials',
        media: BiChat,
      }
    },
  },
}

export {
  testimonial01,
  testimonial02,
  testimonial03,
  testimonial04,
  testimonial05,
}
