import {
  metaDescription,
  sharingImage,
  schemaOrg,
} from 'part:@weflocc/kata/partials/index'

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
