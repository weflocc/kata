import { BiListPlus } from 'react-icons/bi'

const title = {
  name: 'title',
  type: 'string',
}

const statistics = {
  title: 'Statistics',
  name: 'statistics',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'listItem',
      fields: [
        {
          title: 'Statistic',
          name: 'stat',
          type: 'string',
        },
        {
          title: 'Title',
          name: 'title',
          type: 'text',
          rows: 3,
        },
      ],
      preview: {
        select: {
          title: 'stat',
          subtitle: 'title',
        },
        prepare(selection) {
          const { title, subtitle } = selection
          let showEllipsis = true
          if (title.length < 50) {
            showEllipsis = false
          }
          const shortenedSubtitle = subtitle.toString().slice(0, 50)
          return {
            title: title,
            subtitle: `${shortenedSubtitle}${showEllipsis ? '...' : ''}`,
            media: BiListPlus,
          }
        },
      },
    },
  ],
}

export { title, statistics }
