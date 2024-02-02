import {
  metaDescription,
  sharingImage,
  schemaOrg,
} from '#partials'

export default {
  name: 'seoMeta',
  type: 'object',
  title: 'SEO & Meta',
  fields: [
    {
      type: 'string',
      name: 'htmlTitle',
      title: 'Prepend Meta Title',
    },
    metaDescription,
    sharingImage,
    schemaOrg,
  ],
}
