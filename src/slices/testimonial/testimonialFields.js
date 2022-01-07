import { standardImage } from 'part:@weflocc/kata/partials/image'
import { BsFillChatQuoteFill } from 'react-icons/bs'

const quote = {
  name: 'quote',
  type: 'text',
  rows: 3,
}

const cite = {
  name: 'cite',
  type: 'string',
}

const superHeading = {
  name: 'superHeading',
  type: 'string',
}

const title = {
  name: 'title',
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

const links = {
  name: 'links',
  type: 'link',
  title: 'Buttons',
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
  name: 'testimonials',
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
  name: 'testimonials',
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
      fields: [standardImage(), quote, name, job, links],
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
