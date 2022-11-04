<template>
  <div class="slice cta-7 w-r24/24 mx-auto text-center">
    <div class="title-wrap lg:px-r2/24">
      <h2
        v-if="title"
        v-kata-html="title"
        class="heading-2 mb-medium fade-up"
      />
      <SanityEmbedContent
        v-if="textBody"
        :blocks="textBody"
        class="mb-medium fade-up"
      />
    </div>

    <VueSlickCarousel
      v-if="list && list.length > 0"
      v-bind="settings"
      ref="cta-7-slider"
      class="cta-7-slider fade-up list"
    >
      <component
        :is="item.url ? 'a' : 'div'"
        v-for="item in list"
        :key="item._id"
        class="logo-item block text-center"
        :href="item.url"
        :title="item.title"
        :aria-label="item.title"
      >
        <KataSimpleImage
          v-if="item.logo"
          :image="item.logo"
          :title="item.title"
          width="100"
          height="100"
          class="w-[100px] h-[100px] object-contain mx-auto"
        />
      </component>
    </VueSlickCarousel>
    <KataLinks v-if="links" :links="links" class="mt-medium" />
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { title, textBody, links, list } from '../shared'
export default {
  components: { VueSlickCarousel },
  mixins: [title, textBody, links, list],
  props: {
    settings: {
      type: Object,
      default: () => ({
        arrows: false,
        dots: true,
        slidesToShow: 6,
        centerMode: true,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              autoplaySpeed: 2000,
            },
          },
        ],
      }),
    },
  },
}
</script>

<style lang="scss" scoped>
.cta-7 {
}
</style>
