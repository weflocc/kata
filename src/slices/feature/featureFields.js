import {
  basicTextEditor,
  links,
  media,
  basicSingleLink,
  standardImage,
} from 'part:@weflocc/kata/partials/index'
import { BiListPlus } from 'react-icons/bi'
import config from 'config:@weflocc/kata'
import { title, text } from '../shared'

const features = {
  title: 'Features',
  name: 'list',
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
        title,
        text,
        basicSingleLink,
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

const shortFeatures = (vars) => {
  // let title = vars.title ? vars.title : 'Icon'
  return {
    title: 'Features',
    name: 'list',
    type: 'array',
    of: [
      {
        type: 'object',
        title: 'Feature',
        name: 'feature',
        fields: [
          {
            type: 'image',
            name: 'image',
            title: 'Image or Icon',
          },
          title,
          basicSingleLink,
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
}

const featureImageTabs = {
  title: 'Tabs',
  name: 'list',
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
        media(),
        title,
        basicTextEditor(),
        basicSingleLink,
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
  title: 'Tabs',
  name: 'list',
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
              fields: [title, basicTextEditor()],
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
        basicSingleLink,
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

const locations = {
  title: 'Locations',
  name: 'list',
  type: 'array',
  of: [
    {
      title: 'Location',
      name: 'location',
      type: 'object',
      fields: [
        title,
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

export { features, shortFeatures, featureImageTabs, featureTabs, locations }
