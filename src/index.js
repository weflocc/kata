import {definePlugin} from 'sanity'

import {
  hero01,
  hero04,
  hero05,
  hero06,
  hero07,
  hero08,
  hero09,
  hero10,
  hero11,
} from './slices/hero/hero'
import {
  feature01,
  feature02,
  feature03,
  feature04,
  feature05,
  feature06,
  feature07,
  feature08,
  feature09,
  feature10,
  feature11,
  feature12,
} from './slices/feature/feature'
import {
  text01,
  text02,
  text03,
  text04,
  text05,
  text06,
  text07,
  text08,
  text09,
  text10,
} from './slices/text/text'
import {
  portfolio01,
  portfolio03,
  portfolio04,
  portfolio05,
  portfolio06,
  portfolio07,
  portfolio08,
  portfolio09,
  portfolio10,
} from './slices/portfolio/portfolio'
import {
  testimonial01,
  testimonial02,
  testimonial03,
  testimonial04,
  testimonial05,
} from './slices/testimonial/testimonial'

import {contact01, contact02, contact03} from './slices/contact/contact'
import {cta01, cta02, cta05, cta07, cta08} from './slices/cta/cta'
import featureList01 from './slices/featureList/featureList01'
import {images01, images02, images03, images04} from './slices/images/images'
import {news02, news03, news05, news06} from './slices/news/news'
import {stats01} from './slices/stats/stats'
import {team01, team03, team04} from './slices/team/team'
import {timeline01} from './slices/timeline/timeline'

import accordion from './components/accordion'
import buttons from './components/buttons'
import logos from './components/logos'
import mediaPreview from './components/mediaPreview'
import {standoutText} from './components/standoutText'
import tableField from './components/tableField'
import testimonials from './components/testimonials'
import textAndImage from './components/textAndImage'
import youtube from './components/youtube'

import anchor from './links/anchor'
import externalLink from './links/externalLink'
import fileLink from './links/fileLink'
import internalLink from './links/internalLink'
import lightboxButton from './links/lightboxButton'
import link from './links/link'

import globalSlices from './documents/globalSlices'
import pageInfiniteMenu from './documents/pageInfiniteMenu'
import pageMenu from './documents/pageMenu'
import pageTwoMenus from './documents/pageTwoMenus'
import pageMeta from './documents/pageMeta'
import pageSocialMedia from './documents/pageSocialMedia'
import custom from './documents/custom'

export const KataPlugin = definePlugin(() => {
  const types = [
    accordion,
    buttons,
    logos,
    mediaPreview,
    standoutText,
    tableField,
    testimonials,
    textAndImage,
    youtube,
    globalSlices,
    pageInfiniteMenu,
    pageMenu,
    pageTwoMenus,
    pageMeta,
    pageSocialMedia,
    custom,
    hero01,
    hero04,
    hero05,
    hero06,
    hero07,
    hero08,
    hero09,
    hero10,
    hero11,
    feature01,
    feature02,
    feature03,
    feature04,
    feature05,
    feature06,
    feature07,
    feature08,
    feature09,
    feature10,
    feature11,
    feature12,
    text01,
    text02,
    text03,
    text04,
    text05,
    text06,
    text07,
    text08,
    text09,
    text10,
    portfolio01,
    portfolio03,
    portfolio04,
    portfolio05,
    portfolio06,
    portfolio07,
    portfolio08,
    portfolio09,
    portfolio10,
    testimonial01,
    testimonial02,
    testimonial03,
    testimonial04,
    testimonial05,
    contact01,
    contact02,
    contact03,
    cta01,
    cta02,
    cta05,
    cta07,
    cta08,
    featureList01,
    images01,
    images02,
    images03,
    images04,
    news02,
    news03,
    news05,
    news06,
    stats01,
    team01,
    team03,
    team04,
    timeline01,
    anchor,
    externalLink,
    fileLink,
    internalLink,
    lightboxButton,
    link,
  ]

  return {
    name: 'sanity-plugin-kata',
    schema: {
      types: types,
    },
  }
})
