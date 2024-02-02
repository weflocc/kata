import { standardImage } from '../partials/image'
// import { videoSrcset } from './videoSrcset'
import camelCase from 'lodash.camelcase'

const media = (name = 'Media', vars = {}) => {
  const hidden = vars?.hidden || false
  const desc =
    vars?.description ||
    'Choose image or video media type. You can add multiple images to create a fading `slideshow`. If using a video, you can add a mobile video by adding a second video to the list below.'
  return {
    name: camelCase(name),
    title: name,
    type: 'array',
    editModal: 'popover',
    hidden: hidden,
    description: desc,
    of: [
      standardImage(),
      // videoSrcset(),
      {
        title: 'Video file',
        name: 'video',
        type: 'mux.video',
        description:
          'We recommend you crop and compress your video here before uploading it: https://www.videosmaller.com/.',
      },
    ],
  }
}

export { media }
