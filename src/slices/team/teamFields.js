import { BiListPlus } from 'react-icons/bi'
import {
  standardImage,
  liteTextEditor,
  basicSingleLink,
} from  '#partials'
import { title, text } from '../shared'

const thumbnails = {
  name: 'list',
  title: 'Thumbnails',
  type: 'array',
  options: {
    collapsable: true,
  },
  of: [
    {
      name: 'item',
      title: 'Item',
      type: 'object',
      fields: [
        standardImage(),
        title,
        text,
        { name: 'linkText', type: 'string' },
        basicSingleLink,
      ],
      preview: {
        select: {
          heading: 'title',
          image: 'image',
        },
        prepare(selection) {
          const { heading, image } = selection
          return {
            title: heading,
            media: image || BiListPlus,
          }
        },
      },
    },
  ],
}

const people = {
  name: 'list',
  title: 'People',
  type: 'array',
  options: {
    collapsable: true,
  },
  of: [
    {
      name: 'item',
      title: 'Item',
      type: 'object',
      fields: [
        standardImage(),
        {
          name: 'title',
          type: 'string',
          title: 'Name',
        },
        {
          name: 'job',
          type: 'string',
        },
        liteTextEditor(),
        basicSingleLink,
      ],
      preview: {
        select: {
          heading: 'title',
          image: 'image',
        },
        prepare(selection) {
          const { heading, image } = selection
          return {
            title: heading,
            media: image || BiListPlus,
          }
        },
      },
    },
  ],
}

const profiles = {
  name: 'list',
  title: 'Profiles',
  type: 'array',
  options: {
    collapsable: true,
  },
  of: [
    {
      name: 'profile',
      type: 'object',
      fields: [
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'job',
          type: 'string',
        },
        {
          name: 'bio',
          type: 'text',
          rows: 3,
        },
        standardImage(),
        {
          name: 'socials',
          type: 'object',
          options: { collapsible: true, collapsed: true },
          fields: [
            {
              title: 'Twitter',
              name: 'twitter',
              type: 'url',
            },
            {
              title: 'Facebook',
              name: 'facebook',
              type: 'url',
            },
            {
              title: 'Instagram',
              name: 'instagram',
              type: 'url',
            },
            {
              title: 'Linked In',
              name: 'linkedIn',
              type: 'url',
            },
            {
              title: 'Youtube',
              name: 'youtube',
              type: 'url',
            },
            {
              title: 'Email',
              name: 'email',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['mailto'],
                }),
            },
          ],
        },
      ],
      preview: {
        select: {
          heading: 'name',
          image: 'image',
        },
        prepare(selection) {
          const { heading, image } = selection
          return {
            title: heading,
            media: image || BiListPlus,
          }
        },
      },
    },
  ],
}

export { thumbnails, profiles, people }
