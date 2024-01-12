
import { definePlugin } from 'sanity'
import { hero06, hero10 } from './slices/hero/hero'
import { feature01, feature03, feature05 } from './slices/feature/feature'
import { text01, text07 } from './slices/text/text'
import { portfolio09 } from './slices/portfolio/portfolio'
import { testimonial05 } from './slices/testimonial/testimonial'
import mediaPreview from './components/mediaPreview'
import buttons from './components/buttons'
import globalSlices from "./documents/globalSlices"
import pageInfiniteMenu from "./documents/pageInfiniteMenu"
import pageMenu from "./documents/pageMenu"
import pageTwoMenus from "./documents/pageTwoMenus"
import pageMeta from "./documents/pageMeta"
import pageSocialMedia from "./documents/pageSocialMedia"
import custom from "./documents/custom"

export const KataPlugin = definePlugin(() => {
  return {
    name: 'sanity-plugin-kata',
    schema: {
      types: [
        hero10,
        globalSlices,
        feature01,
        text07,
        text01,
        feature05,
        portfolio09,
        feature03,
        testimonial05,
        hero06,
        mediaPreview,
        buttons,
        pageMenu,
        pageMeta,
        pageInfiniteMenu,
        pageTwoMenus,
        pageSocialMedia,
        custom
      ],
    },
  }
})
