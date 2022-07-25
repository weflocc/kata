<template>
  <div class="slice portfolio-4 mx-auto w-r24/24">
    <div class="mb-large text-center lg:px-r4/24">
      <h2 v-if="title" class="fade-up">{{ title }}</h2>
      <p v-if="text" class="mt-small fade-up">{{ text }}</p>
    </div>
    <div
      v-if="list && list != null && list.length"
      class="list mb-large flex flex-wrap justify-evenly -mx-small"
      :class="'list-length-' + list.length"
    >
      <div
        v-for="item in list"
        :key="item._key"
        class="px-small flex-grow fade-up thumbnail mb-medium"
        :class="{
          'md:w-1/2 lg:w-1/3': list.length % 4 !== 0,
          'md:w-1/2': list.length % 4 === 0,
        }"
      >
        <slot name="tease" :item="item">
          <component
            :is="getLinkComponent(item.singleLink)"
            class="thumbnail-inner"
            :to="getSingleLink(item.singleLink)"
            :href="getSingleLink(item.singleLink)"
            :target="
              getLinkComponent(item.singleLink) == 'a' ? '_blank' : '_self'
            "
          >
            <KataImage
              :image="item.image"
              :ratio="3 / 4"
              class="mb-small max-h-[70vh] object-cover"
            />
            <h3
              v-if="item.title"
              v-kata-html="item.title"
              class="mb-small label-1"
            />
            <p v-if="item.text" v-kata-html="item.text" class="para-4" />
          </component>
        </slot>
      </div>
    </div>
    <div v-if="links" class="text-center">
      <KataLinks :links="links" />
    </div>
  </div>
</template>

<script>
import { title, links, list, text } from '../shared'
export default {
  mixins: [title, links, list, text],
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1.2,
        infinite: false,
        centerMode: false,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.thumbnail {
  @include lg-up {
    max-width: 50%;
  }
}
</style>
