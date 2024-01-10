import { defaultOptions, links } from '../partials'

const feedSelector = ({
  field,
  title,
  selectedTitle,
  articleType,
  categoryTitle,
  categoryType,
  description,
  sliceTitle,
  noShowAll,
  filter,
  filterParams,
  hidden,
  showLinks,
}) => {
  // Defaults
  selectedTitle = selectedTitle || 'Choose manually'
  categoryTitle = categoryTitle || 'Or, Select a category to show automatically'
  description =
    description ||
    'You can manually select one or more items, or else choose a category to display.'
  sliceTitle = sliceTitle || false
  noShowAll = noShowAll || false
  filter = filter || false
  filterParams = filterParams || false
  hidden = hidden || false
  showLinks = showLinks || false

  let options = {}
  if (filter) {
    options.filter = filter
  }
  if (filterParams) {
    options.filterParams = filterParams
  }

  const selected = {
    name: 'selected',
    type: 'array',
    title: selectedTitle,
    of: [
      {
        type: 'reference',
        to: [{ type: articleType }],
        options: options,
      },
    ],
  }

  const categories = {
    name: 'categories',
    type: 'array',
    title: categoryTitle,
    of: [
      {
        type: 'reference',
        to: [{ type: categoryType }],
      },
    ],
  }

  // add this on the page vue file, so clients can't control
  // const max = {
  //   name: 'max',
  //   title: 'Maximum number of articles to display',
  //   type: 'number',
  //   validation: Rule => Rule.integer().positive().min(1)
  // }

  const show = {
    name: 'show',
    title: `Display all ${articleType} articles?`,
    type: 'boolean',
  }

  const fields = []

  if (sliceTitle) {
    const title = {
      name: 'title',
      title: 'Title',
      type: 'string',
    }
    fields.push(title)
  }

  if (!noShowAll) {
    fields.push(show)
  }

  if (selected) {
    if (!noShowAll) {
      // hide if display all is selected
      selected.hidden = ({ parent }) => parent?.show
    }
    fields.push(selected)
  }

  if (categoryType) {
    if (!noShowAll) {
      // hide if display all is selected
      categories.hidden = ({ parent }) => parent?.show
    }
    fields.push(categories)
  }

  if (showLinks) {
    fields.push(links())
  }

  return {
    name: field,
    title: title || null,
    type: 'object',
    description: description,
    fields: fields,
    options: defaultOptions,
    hidden: hidden,
  }
}

const feedSelector2 = ({
  name,
  articleTypes,
  title = false,
  manualTitle = 'Manual selection',
  categoryTitle = 'All pages/articles with this category',
  categoryType = false,
  description = '',
  noShowAll = false,
  filter = false,
  filterParams = false,
  hidden = false,
  heading = false,
  text = false,
  showLinks = false,
}) => {
  let options = {}
  if (filter) {
    options.filter = filter
  }
  if (filterParams) {
    options.filterParams = filterParams
  }

  let types = []

  if (!noShowAll) {
    types.push({ title: 'Automatic', value: 'all' })
  }
  if (categoryType) {
    types.push({ title: 'By category', value: 'category' })
  }
  types.push({ title: 'Manual', value: 'manual' })

  const type = {
    name: 'type',
    type: 'string',
    description:
      'Select the way to add to this list. If unselected, the list will remain empty',
    options: {
      list: types,
    },
  }

  let to = []
  if (articleTypes) {
    articleTypes.forEach((element) => {
      to.push({ type: element })
    })
  }

  const manual = {
    name: 'selected',
    type: 'array',
    title: manualTitle,
    hidden: ({ parent }) => parent.type != 'manual',
    of: [
      {
        type: 'reference',
        to: to,
        options: options,
      },
    ],
  }

  const categories = {
    name: 'categories',
    type: 'array',
    description: 'This will show everything assigned to this category',
    title: categoryTitle,
    hidden: ({ parent }) => parent.type != 'category',
    of: [
      {
        type: 'reference',
        to: [{ type: categoryType }],
      },
    ],
  }

  const fields = []

  if (heading) {
    const title = {
      name: 'title',
      title: 'Title',
      type: 'string',
    }
    fields.push(title)
  }

  if (text) {
    const text = {
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 3,
    }
    fields.push(text)
  }

  fields.push(type)
  fields.push(manual)

  if (categoryType) {
    fields.push(categories)
  }

  if (showLinks) {
    fields.push(links())
  }

  return {
    name: name,
    title: title || null,
    type: 'object',
    description: description,
    fields: fields,
    options: defaultOptions,
    hidden: hidden,
  }
}

export { feedSelector, feedSelector2 }
