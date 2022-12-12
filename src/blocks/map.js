import { GrMap } from 'react-icons/gr'

const map = {
  title: 'Map',
  name: 'map',
  type: 'object',
  fields: [
    {
      title: 'Location',
      name: 'location',
      type: 'geopoint',
      validation: (Rule) => Rule.required('Please enter a location.'),
    },
  ],
  preview: {
    // select: {
    //   location: 'location',
    // },
    prepare(value) {
      return {
        title: 'Map',
        media: GrMap,
      }
    },
  },
}

export { map }
