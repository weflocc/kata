import config from '../../config.dist.json'
import { RiGlobeFill } from 'react-icons/ri'

export default {
  type: 'document',
  name: 'globalSlices',
  title: 'Global Slices',
  icon: RiGlobeFill,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slices',
      type: 'array',
      title: 'Add the slice type you require',
      description:
        'Normally, you should only add a single slice here. If you are creating dynamic content, add multiple of the same type of slice, and set the target for each.',
      options: {
        editModal: 'fullscreen',
      },
      of: config.allSlices,
    },
  ],
}
