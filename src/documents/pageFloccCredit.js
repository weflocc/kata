import { linkText } from '#partials'
import { hiddenTitle } from '#partials'

export default {
  type: 'document',
  name: 'pageFloccCredit',
  title: 'Flocc Credit',
  initialValue: {
    title: 'Flocc Credit',
    linkText: 'Digital Marketing by flocc',
    url: 'https://flocc.co',
  },
  fields: [
    hiddenTitle,
    linkText,
    {
      type: 'url',
      name: 'url',
      title: 'URL',
    },
  ],
}
