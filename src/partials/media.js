import { standardImage, defaultOptions } from 'part:@weflocc/kata/partials/index'
// import { videoSrcset } from './videoSrcset'
const camelCase = require('lodash.camelcase')
import { BsFillImageFill } from 'react-icons/bs'

const media = (name = 'Media', required = false) => {
  return {
    name: camelCase(name),
    title: name,
    type: 'object',
    options: defaultOptions,
    fields: [
      {
        type: 'string',
        name: 'mediaType',
        title: 'Media Type',
        initialValue: 'image',
        validation: (Rule) => Rule.required(),
        options: {
          list: [
            { title: 'Image', value: 'image' },
            { title: 'Video', value: 'video' },
            { title: 'Embed Video', value: 'embed' },
            { title: 'Image Slideshow', value: 'slideshow' },
          ],
        },
      },
      standardImage('Image', {
        hidden: ({ parent }) => parent.mediaType != 'image',
      }),
      {
        title: 'Video file',
        name: 'video',
        type: 'mux.video',
        description:
          'We recommend you crop and compress your video here before uploading it: https://www.videosmaller.com/.',
        hidden: ({ parent }) => parent.mediaType != 'video',
      },
      {
        title: 'Embed Video',
        name: 'embedUrl',
        type: 'url',
        description: 'Please paste in your video url here.',
        hidden: ({ parent }) => parent.mediaType != 'embed',
      },
      {
        title: 'Image Slideshow',
        name: 'slideshow',
        type: 'array',
        of: [standardImage()],
        hidden: ({ parent }) => parent.mediaType != 'slideshow',
        preview: {
          select: {
            image: 'image',
          },
          prepare(selection) {
            const { image } = selection
            let icon = BsFillImageFill
            return {
              title: 'Image',
              media: image || icon,
            }
          },
        },
      },
    ],
    validation: required
      ? (Rule) => Rule.required('Please select an media item.')
      : null,
  }
}

export { media }
