export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  description: 'Add one or two call-to-action links',
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'array',
      validation: (Rule) =>
        Rule.max(2).warning('The maximum number of CTAs on this slice is 2'),
      editModal: 'popover',
      of: [
        { type: 'internalLink' },
        { type: 'fileLink' },
        { type: 'externalLink' },
      ],
    },
  ],
}
