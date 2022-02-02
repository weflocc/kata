<template>
  <div class="slice portfolio-4 mx-r1/12 w-r10/12">
    <div class="mb-large text-center">
      <h2 v-if="title" class="mb-medium fade-up">{{ title }}</h2>
    </div>
    <div
      v-if="list && list != null && list.length"
      class="mb-large flex flex-wrap justify-evenly -mx-small"
    >
      <div
        v-for="item in list"
        :key="item._key"
        class="px-small md:w-1/3 flex-grow fade-up thumbnail"
      >
        <slot name="tease" :item="item">
          <component
            :is="getLinkComponent(item.singleLink)"
          :to="getSingleLink(item.singleLink)"
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
import { title, links, list } from '../shared'
export default {
  mixins: [title, links, list],
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
