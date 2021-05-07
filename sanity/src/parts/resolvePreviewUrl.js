import kataConfig from 'config:kata'

const ENV = process.env.NODE_ENV || 'development'
const WEB_URL = kataConfig.domain.production
const PATHS = kataConfig.paths

export default function resolvePreviewUrl (document) {
  const baseUrl = ENV === 'development' ? 'http://localhost:3000' : WEB_URL
  const append = '?preview=true'
  let path = ''
  let slug = ''

  PATHS.forEach(element => {
    if (document._type === element.type) {
      path = element.path
    }
  })

  if (document.slug) {
    slug = `/${document.slug.current}`
  }

  if (document._type === 'pageHome') {
    slug = ''
  }

  const url = `${baseUrl}${path}${slug}${append}`
  return url
}
