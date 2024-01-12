import { hiddenTitle } from '#partials'

export default {
  type: 'document',
  name: 'pageSocialMedia',
  title: 'Social Media',
  initialValue: {
    title: 'Social Media',
  },
  fields: [
    hiddenTitle,
    {
      title: 'Twitter',
      name: 'twitter',
      type: 'string',
    },
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'string',
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'string',
    },
    {
      title: 'Linked In',
      name: 'linkedIn',
      type: 'string',
    },
    {
      title: 'Youtube',
      name: 'youtube',
      type: 'string',
    },
  ],
}
