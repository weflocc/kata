// import S from '@sanity/desk-tool/structure-builder'
import {MdInfo} from 'react-icons/md'
import {RiStarSFill, RiDraftFill, RiArticleFill, RiGlobeFill, RiPriceTag3Fill, RiPagesLine} from 'react-icons/ri'
import {AiOutlineExclamationCircle} from 'react-icons/ai'
import PreviewIFrame from './previewIFrame'

function articlesStructureBuilder (S,  {documentType, plural, indexPageId = null, categoryDocumentType, categoryName, showFeatured, indexPageType = 'listingPage', icon = RiArticleFill, instance}) {
  let featured
  let theInstance = instance || documentType
  if (showFeatured) {
    featured = S.listItem()
      .title('Featured')
      .icon(RiStarSFill)
      .child(
        S.document()
          .schemaType(`${theInstance}Featured`)
          .documentId(`${instance}Featured`)
          .views([S.view.form()])
      )
    S.divider()
  } else {
    featured = S.divider()
  }

  function categories () {
    if (categoryDocumentType) {
      return S.documentTypeListItem(categoryDocumentType)
    } else {
      return S.divider()
    }
  }

  function articlesByCategory () {
    if (categoryDocumentType) {
      return S.listItem()
        .title(plural + ' by ' + categoryName)
        .icon(RiArticleFill)
        .child(
        // List out all categories
          S.documentTypeList(categoryDocumentType)
            .title(plural + ' by ' + categoryName)
            .child(id =>
            // List out articles where the _id for the selected
            // category appear as a _ref in the article's category array
              S.documentList()
                .schemaType(documentType)
                .title(plural)
                .filter(`_type == '${documentType}' && $id in ${categoryDocumentType}[]._ref`)
                .params({id})
            )
        )
    } else {
      return S.divider()
    }
  }

  function uncategorisedArticles () {
    if (categoryDocumentType) {
      return S.listItem()
        .title('Uncategorised ' + plural)
        .icon(AiOutlineExclamationCircle)
        .schemaType(documentType)
        .child(
          S.documentList(documentType)
            .title('Uncategorised ' + plural)
            .menuItems(S.documentTypeList(documentType).getMenuItems())
          // Only show posts with publish date earlier than now and that is not drafts
            .filter(`_type == '${documentType}' && !defined(${categoryDocumentType})`)
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType(documentType)
                .views([S.view.form()])
            )
        )
    } else {
      return S.divider()
    }
  }

  function indexPage () {
    if (indexPageId) {
      return S.listItem()
        .title('Index Page')
        .icon(RiPagesLine)
        .child(
          S.document()
            .schemaType(indexPageType)
            .documentId(indexPageId)
            .views([S.view.form(), PreviewIFrame()])
        )
    } else {
      return S.divider()
    }
  }

  return S.listItem()
    .title(plural)
    .icon(icon)
    .child(
      S.list()
        .title(plural)
        .items([
          S.listItem()
            .title('Published ' + plural)
            .icon(RiArticleFill)
            .schemaType(documentType)
            .child(
              S.documentList(documentType)
                .title('Published ' + plural)
                .menuItems(S.documentTypeList(documentType).getMenuItems())
              // Only show posts with publish date earlier than now and that is not drafts
                .filter(`_type == '${documentType}' && !(_id in path("drafts.**"))`)
                .child((documentId) =>
                  S.document()
                    .documentId(documentId)
                    .schemaType(documentType)
                    .views([S.view.form(), PreviewIFrame()])
                )
            ),
          S.listItem()
            .title('Drafts')
            .icon(RiDraftFill)
            .schemaType(documentType)
            .child(
              S.documentList(documentType)
                .title('Drafts')
                .menuItems(S.documentTypeList(documentType).getMenuItems())
              // Only show posts with publish date earlier than now and that is not drafts
                .filter(`_type == '${documentType}' && (_id in path("drafts.**"))`)
                .child((documentId) =>
                  S.document()
                    .documentId(documentId)
                    .schemaType(documentType)
                    .views([S.view.form(), PreviewIFrame()])
                )
            ),
          featured,
          // S.divider(),
          indexPage(),
          categories(),
          articlesByCategory(),
          uncategorisedArticles()
        ])
    )
}

export  {articlesStructureBuilder}
