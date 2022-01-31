import {
  hiddenTitle,
  sharingImage,
  schemaOrg,
} from 'part:@weflocc/kata/partials/index'

export default {
  type: 'document',
  name: 'pageMeta',
  title: 'Global Meta',
  initialValue: {
    title: 'Global Meta',
  },
  fields: [
    hiddenTitle,
    {
      name: 'metaTitle',
      title: 'Global Meta Title',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Global Meta Description',
      type: 'text',
      rows: 3,
    },
    sharingImage,
    schemaOrg,
  ],
}
