const title = {
  name: 'title',
  title: 'Title',
  type: 'string',
  validation: (Rule) => Rule.required('Please set a title.'),
}

const hiddenTitle = {
  name: 'title',
  type: 'string',
  description: 'Only studio@flocc.co can see this',
  hidden: ({ currentUser }) => {
    return currentUser.email != 'studio@flocc.co'
  },
}

const slug = {
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 96,
  },
  validation: (Rule) =>
    Rule.required('A slug is required before you can publish.'),
}

const hiddenSlug = {
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 96,
  },
  description: 'Only studio@flocc.co can see this',
  validation: (Rule) =>
    Rule.required('A slug is required before you can publish.'),
  hidden: ({ currentUser }) => {
    return currentUser.email != 'studio@flocc.co'
  },
}

const schemaOrg = {
  name: 'schemaOrg',
  title: 'Schema.org JS',
  description: 'Leave out the opening and closing script tags, JSON only here',
  type: 'text',
  rows: 5,
}

const sharingImage = {
  title: 'Social Sharing Image',
  name: 'socialImage',
  type: 'image',
  description: '1200px x 630px',
}

const metaTitle = {
  name: 'metaTitle',
  title: 'Global Meta Title',
  type: 'string',
}

const metaDescription = {
  name: 'metaDescription',
  title: 'Global Meta Description',
  type: 'text',
  rows: 3,
}

const metaFields = {
  name: 'meta',
  title: 'SEO & Meta',
  options: {
    collapsed: true,
    collapsible: true,
  },
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'metaTitle',
      title: 'Prepend Meta Title',
    },
    metaDescription,
    sharingImage,
    schemaOrg,
  ],
}

export {
  title,
  slug,
  hiddenTitle,
  hiddenSlug,
  schemaOrg,
  sharingImage,
  metaTitle,
  metaDescription,
  metaFields,
}
