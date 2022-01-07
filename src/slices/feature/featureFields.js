import { standardImage } from 'part:@weflocc/kata/partials/image'
import { basicTextEditor } from 'part:@weflocc/kata/partials/textEditor'
import { BiListPlus } from 'react-icons/bi'
import config from 'config:@weflocc/kata'

const title = {
  name: 'title',
  type: 'string',
}
const superHeading = {
  title: 'Super Heading',
  name: 'superHeading',
  type: 'string',
}

const features = {
  title: 'Features',
  name: 'features',
  type: 'array',
  of: [
    {
      type: 'object',
      title: 'Feature',
      name: 'feature',
      fields: [
        {
          type: 'image',
          name: 'icon',
          title: 'Icon',
        },
        {
          type: 'string',
          name: 'title',
          title: 'Title',
        },
        {
          type: 'text',
          name: 'text',
          title: 'Text',
          rows: 3,
        },
        {
          type: 'reference',
          name: 'link',
          title: 'Link',
          to: config.allTypes,
          description: 'Optional',
          options: {
            disableNew: true, // we don't want people to be able to create new pages here!
          },
        },
      ],
      preview: {
        select: {
          heading: 'title',
          subheading: 'text',
          image: 'icon',
        },
        prepare(selection) {
          const { heading, image, subheading } = selection
          return {
            title: heading || subheading,
            media: image || BiListPlus,
          }
        },
      },
    },
  ],
}

const shortFeatures = {
  title: 'Short Features',
  name: 'shortFeatures',
  type: 'array',
  of: [
    {
      type: 'object',
      title: 'Feature',
      name: 'feature',
      fields: [
        {
          type: 'image',
          name: 'icon',
          title: 'Icon',
        },
        {
          type: 'string',
          name: 'title',
          title: 'Title',
        },
        {
          type: 'reference',
          name: 'link',
          title: 'Link',
          to: config.allTypes,
          description: 'Optional',
          disableNew: true, // we don't want people to be able to create new pages here!
        },
      ],
      preview: {
        select: {
          heading: 'title',
        },
        prepare(selection) {
          const { heading } = selection
          return {
            title: heading,
            media: BiListPlus,
          }
        },
      },
    },
  ],
}

const featureImageTabs = {
  title: 'Feature Tabs',
  name: 'featureTabs',
  type: 'array',
  of: [
    {
      type: 'object',
      title: 'Feature',
      name: 'feature',
      fields: [
        {
          type: 'string',
          name: 'tabName',
          title: 'Tab Name',
        },
        standardImage(),
        {
          type: 'string',
          name: 'title',
          title: 'Title',
        },
        basicTextEditor(),
        {
          name: 'links',
          type: 'link',
          title: 'Buttons',
        },
      ],
      preview: {
        select: {
          heading: 'tabName',
        },
        prepare(selection) {
          const { heading } = selection
          return {
            title: heading,
            media: BiListPlus,
          }
        },
      },
    },
  ],
}

const featureTabs = {
  title: 'Feature Tabs',
  name: 'featureTabs',
  type: 'array',
  of: [
    {
      type: 'object',
      title: 'Feature',
      name: 'feature',
      fields: [
        {
          type: 'string',
          name: 'tabName',
          title: 'Tab Name',
        },
        {
          type: 'array',
          name: 'features',
          of: [
            {
              type: 'object',
              title: 'Item',
              name: 'item',
              fields: [
                {
                  type: 'string',
                  name: 'title',
                  title: 'Title',
                },
                basicTextEditor(),
              ],
              preview: {
                select: {
                  heading: 'title',
                },
                prepare(selection) {
                  const { heading } = selection
                  return {
                    title: heading,
                    media: BiListPlus,
                  }
                },
              },
            },
          ],
        },
        {
          name: 'links',
          type: 'link',
          title: 'Links',
        },
      ],
      preview: {
        select: {
          heading: 'tabName',
        },
        prepare(selection) {
          const { heading } = selection
          return {
            title: heading,
            media: BiListPlus,
          }
        },
      },
    },
  ],
}

const text = {
  name: 'text',
  title: 'Text',
  type: 'text',
  rows: 4,
}

const textBody = {
  title: 'Text Body',
  name: 'textBody',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        // Only allow these decorators
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        // annotations: []
      },
    },
  ],
}

const locations = {
  title: 'Locations',
  name: 'locations',
  type: 'array',
  of: [
    {
      title: 'Location',
      name: 'location',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Location',
          name: 'location',
          type: 'geopoint',
        },
      ],
      preview: {
        select: {
          heading: 'title',
        },
        prepare(selection) {
          const { heading } = selection
          return {
            title: heading,
            media: BiListPlus,
          }
        },
      },
    },
  ],
}

export {
  superHeading,
  title,
  features,
  text,
  textBody,
  shortFeatures,
  featureImageTabs,
  featureTabs,
  locations,
}
