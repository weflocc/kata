import { standardImage, links } from 'part:@weflocc/kata/partials/index'
import { BsFillChatQuoteFill } from 'react-icons/bs'
import { title, superHeading, text } from '../shared'

const quote = {
  name: 'quote',
  type: 'text',
  rows: 5,
}

const cite = {
  name: 'cite',
  type: 'string',
}

const name = {
  name: 'name',
  type: 'string',
}

const job = {
  name: 'job',
  type: 'string',
}

const preview = {
  select: {
    title: 'quote',
    subtitle: 'name',
  },
  prepare(selection) {
    const { title, subtitle } = selection
    let showEllipsis = true
    if (title.length < 50) {
      showEllipsis = false
    }
    const heading = title.toString().slice(0, 50)
    return {
      title: `${heading}${showEllipsis ? '...' : ''}`,
      subtitle: subtitle,
      media: BsFillChatQuoteFill,
    }
  },
}

const testimonials = {
  name: 'list',
  title: 'Testimonials',
  type: 'array',
  options: {
    collapsable: true,
  },
  of: [
    {
      name: 'item',
      title: 'Item',
      type: 'object',
      fields: [quote, name, job],
      preview: preview,
    },
  ],
}

const testimonialsImage = {
  name: 'list',
  title: 'Testimonials',
  type: 'array',
  options: {
    collapsable: true,
  },
  of: [
    {
      name: 'item',
      title: 'Item',
      type: 'object',
      fields: [quote, name, job, links('Links', 1), standardImage()],
      preview: preview,
    },
  ],
}

export {
  superHeading,
  title,
  testimonials,
  testimonialsImage,
  quote,
  cite,
  name,
  job,
}
