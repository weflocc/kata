import DiscriminatedUnion from '../../custom/discriminated-union';
const allTypesFallback = [{type: 'page'}]


const sanityLink = (allTypes = allTypesFallback) => {
    return {
        name: 'sanityLink',
        title: 'Link',
        type: 'object',
        // preview: {
        //     select: { title: 'title', to: 'to' },
        //     prepare: ({ title, to }) => ({
        //         title,
        //         subtitle:
        //             to?.[0]?._type === 'reference'
        //                 ? 'Internal Link'
        //                 : 'External Link',
        //     }),
        // },
        fields: [
            {
                name: 'to',
                type: 'array',
                validation: (Rule) => Rule.length(1).required(),
                inputComponent: DiscriminatedUnion,
                description:
                    'Define a URL or select a reference to another page or post.',
                of: [
                    {
                        title: 'Internal Link',
                        name: 'internalLink',
                        description: 'Add a reference to an existing page or post.',
                        type: 'reference',
                        to: allTypes,
                        validation: (Rule) => Rule.required(),
                    },
                    {
                        title: 'External Link',
                        name: 'externalLink',
                        type: 'object',
                        fields: [
                            {
                                name: 'url',
                                type: 'url',
                                description: 'Add a link to an external site.',
                                title: 'URL',
                                validation: (Rule) =>
                                    Rule.uri({
                                        scheme: ['http', 'https', 'mailto'],
                                        allowRelative: true,
                                    }).required(),
                            },
                            {
                                name: 'openInNewTab',
                                type: 'boolean',
                            },
                        ],
                    },
                    {
                        title: 'File Link',
                        name: 'fileLink',
                        description: 'Add a reference to an uploaded document.',
                        type: 'file',
                        validation: (Rule) => Rule.required(),
                    },
                ],
            },
        ],
    }
}

export {sanityLink}