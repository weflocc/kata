import { BiNews } from 'react-icons/bi'

const textAndImage = {
  name: 'textAndImage',
  title: 'Text & Image',
  type: 'object',
  fields: [
    {
      name: 'reversed',
      title: 'Reverse Columns',
      description:
        'By default, text is left and image is right. If you enable this field, the columns will be reversed.',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'noCrop',
      title: 'No Crop?',
      description:
        'By default, images are scaled and cropped to fit the height of the text. If you enable this field, the image will display at its initial aspect ratio.',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'feature',
      title: 'Text and Image',
      type: 'feature01',
    },
  ],
  preview: {
    select: {
      feature01: 'feature',
    },
    prepare(selection) {
      const { feature01 } = selection
      console.log(feature01.media)
      return {
        title: feature01.title || feature01.superHeading || 'Text and Image',
        media: feature01.media?.image || BiNews,
      }
    },
  },
}

export { textAndImage }
