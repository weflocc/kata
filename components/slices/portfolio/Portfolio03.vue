<template>
  <div
    class="slice portfolio-3 mx-auto w-r24/24 md:flex md:justify-between md:space-x-r1/24 md:items-start"
  >
    <div class="mb-large text-center md:sticky content md:w-r11/24">
      <h2 v-if="title" v-kata-html="title" class="mb-medium fade-up" />
      <p v-if="text" v-kata-html="text" class="mb-medium fade-up" />
      <div v-if="links" class="text-center">
        <KataLinks :links="links" />
      </div>
    </div>
    <div
      v-if="list && list != null && list.length"
      class="mb-large grid grid-cols-1 lg:grid-cols-2 gap-medium md:w-r12/24"
    >
      <div v-for="item in list" :key="item._key" class="fade-up thumbnail">
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
              :ratio="4 / 3"
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
  </div>
</template>

<script>
import { title, text, links, list } from '../shared'
export default {
  mixins: [title, text, links, list],
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
.portfolio-3 {
  .content {
    @include md-up {
      top: calc(var(--header-height) + var(--spacing-slice));
    }
  }
}
</style>
