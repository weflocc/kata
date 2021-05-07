import S from '@sanity/desk-tool/structure-builder'
import {FaFolder} from 'react-icons/fa'
import PreviewIFrame from './previewIFrame'

function folderStructure ({documentType, plural, icon = FaFolder}) {
  return S.listItem()
    .title(plural)
    .icon(icon)
    .child(
      S.documentTypeList(documentType)
        .title(plural)
        .child(
          S.document()
            .views([S.view.form(), PreviewIFrame()])
        )
    )
}

export default folderStructure
