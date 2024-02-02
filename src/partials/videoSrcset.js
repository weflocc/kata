import camelCase from 'lodash.camelcase'

const videoSrcset = (name = 'Video Srcset', vars = {}) => {
  const title = vars?.title || name
  return {
    name: camelCase(name),
    title: title,
    type: 'object',
    fields: [
      {
        name: 'video1920',
        title: 'Video 1920 Width',
        type: 'file',
      },
      {
        name: 'video1280',
        title: 'Video 1280 Width',
        type: 'file',
      },
      {
        name: 'video960',
        title: 'Video 960 Width',
        type: 'file',
      },
      {
        name: 'video640',
        title: 'Video 640 Width',
        type: 'file',
      },
      {
        name: 'mobileImage',
        title: 'Mobile Image',
        type: 'image',
      },
    ],
  }
}

export { videoSrcset }
