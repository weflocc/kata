import {definePlugin} from 'sanity'

import {hero01, hero04, hero05, hero06, hero07, hero09, hero10, hero11} from './slices/hero'
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
} from './slices/feature'
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
} from './slices/text'
import {
  portfolio01,
  portfolio04,
  portfolio05,
  portfolio06,
  portfolio07,
  portfolio08,
  portfolio09,
  portfolio10,
} from './slices/portfolio'
import {
  testimonial01,
  testimonial02,
  testimonial03,
  testimonial04,
  testimonial05,
} from './slices/testimonial'
import {contact01, contact02, contact03} from './slices/contact'
import {cta01, cta02, cta05, cta08} from './slices/cta'
import featureList01 from './slices/featureList/featureList01'
import {news02, news03, news05} from './slices/news'
import {stats01} from './slices/stats'
import {team03, team04} from './slices/team'
import {timeline01} from './slices/timeline'

import accordion from './components/accordion'
import anchor from './components/anchor'
import externalLink from './components/externalLink'
import fileLink from './components/fileLink'
import InfoTooltip from './components/InfoTooltip'
import internalLink from './components/internalLink'
import lightboxButton from './components/lightboxButton'
import link from './components/link'
import listItem from './components/listItem'
import seoMeta from './components/seoMeta'
import TablePreview from './components/TablePreview'
import youtube from './components/youtube'

import custom from './documents/custom'
import globalSlices from './documents/globalSlices'
import pageFloccCredit from './documents/pageFloccCredit'
import pageMenu from './documents/pageMenu'
import pageMeta from './documents/pageMeta'
import pageSimpleMenu from './documents/pageSimpleMenu'
import pageSocialMedia from './documents/pageSocialMedia'
import pageTwoMenus from './documents/pageTwoMenus'

export const KataPlugin = definePlugin(() => {
  const types = [
    accordion,
    anchor,
    externalLink,
    fileLink,
    internalLink,
    lightboxButton,
    link,
    listItem,
    seoMeta,
    youtube,

    hero01,
    hero04,
    hero05,
    hero06,
    hero07,
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
    cta08,
    featureList01,
    news02,
    news03,
    news05,
    stats01,
    team03,
    team04,
    timeline01,

    custom,
    globalSlices,
    pageFloccCredit,
    pageMenu,
    pageMeta,
    pageSimpleMenu,
    pageSocialMedia,
    pageTwoMenus,
  ]

  return {
    name: 'sanity-plugin-kata',
    schema: {
      types: types,
    },
  }
})
