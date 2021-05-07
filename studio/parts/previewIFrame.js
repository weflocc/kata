import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import resolveUrl from './resolvePreviewUrl'

const env = process.env.NODE_ENV || 'development'

const PreviewIFrame = (kataConfig) =>
  S.view
    .component(({document}) => {
      console.log('document')
      console.log(document)
      const {displayed} = document
      console.log('displayed')
      console.log(displayed)
      if (!displayed) {
        // return <p>Nothing to display</p>
        return React.createElement("p", null, "Nothing to display.");
      }
      const url = resolveUrl(displayed, kataConfig)
      // return (
      //   <React.Fragment>
      //     {
      //       env !== 'development' && <div style={{padding: '0 0.5em'}}>
      //         <p>Click refresh below to see changes even without publishing</p>
      //       </div>
      //     }
      //     <iframe
      //       style={{
      //         width: '100%',
      //         height: '100%'
      //       }}
      //       frameBorder={'0'}
      //       src={url}
      //     />
      //   </React.Fragment>
      // )

      return React.createElement(React.Fragment, null, env !== 'development' && /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '0 0.5em'
        }
      }, /*#__PURE__*/React.createElement("p", null, "Click refresh below to see changes even without publishing")), /*#__PURE__*/React.createElement("iframe", {
        style: {
          width: '50%',
          height: '50%'
        },
        frameBorder: '0',
        src: url
      }))

    })
    .title('Web preview')

export default PreviewIFrame
