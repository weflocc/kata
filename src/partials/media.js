import {
  standardImage,
  defaultOptions,
} from 'part:@weflocc/kata/partials/index'
// import { videoSrcset } from './videoSrcset'
const camelCase = require('lodash.camelcase')
import { BsFillImageFill } from 'react-icons/bs'

const media = (name = 'Media', required = false, vars = {}) => {
  const hidden = vars?.hidden || false
  return {
    name: camelCase(name),
    title: name,
    type: 'object',
    options: defaultOptions,
    hidden: hidden,
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
            { title: 'Lottie Js', value: 'lottie' },
          ],
        },
      },
      standardImage('Image', {
        hidden: ({ parent }) =>
          parent?.mediaType != 'image' || parent?.mediaType == '',
      }),
      {
        title: 'Video file',
        name: 'video',
        type: 'mux.video',
        description:
          'We recommend you crop and compress your video here before uploading it: https://www.videosmaller.com/.',
        hidden: ({ parent }) =>
          parent?.mediaType != 'video' || parent?.mediaType == '',
      },
      {
        title: 'Embed Video',
        name: 'embedUrl',
        type: 'url',
        description: 'Please paste in your video url here.',
        hidden: ({ parent }) =>
          parent?.mediaType != 'embed' || parent?.mediaType == '',
      },
      {
        title: 'Lottie JSON',
        name: 'lottieJson',
        type: 'text',
        description:
          'Please paste in your Lottie animation data here, in JSON format. Please contact Flocc if you would like to use this setting.',
        hidden: ({ parent }) =>
          parent?.mediaType != 'lottie' || parent?.mediaType == '',
      },
      {
        title: 'Image Slideshow',
        name: 'slideshow',
        type: 'array',
        of: [standardImage()],
        hidden: ({ parent }) =>
          parent?.mediaType != 'slideshow' || parent?.mediaType == '',
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
