<template>
  <component
    :is="singleLink ? getLinkComponent(singleLink) : link ? 'n-link' : 'div'"
    :to="singleLink ? getSingleLink(singleLink) : link"
    :href="singleLink ? getSingleLink(singleLink) : link"
    :target="
      singleLink && getLinkComponent(singleLink) == 'a' ? '_blank' : '_self'
    "
    class="tease-image-overlay"
  >
    <KataImage
      v-if="image"
      :image="image"
      :ratio="ratio"
      :max-width="650"
      sizes="(max-width:699px) 90vw,(max-width:1439px) 50vw,33vw"
      class="bg-img"
    />
    <h3 class="label-1">
      {{ title }}
      <DraftLabel v-if="itemId" :id="itemId" />
    </h3>
  </component>
</template>

<script>
import { image, title, text } from '../../slices/shared'
export default {
  mixins: [image, title, text],
  props: {
    itemId: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    singleLink: {
      type: Object,
      default: null,
    },
    ratio: {
      type: Number,
      default: 4 / 3,
    },
  },
}
</script>

<style lang="scss" scoped>
.tease-image-overlay {
  position: relative;
  display: inline-block;

  .bg-img {
    border-radius: 15px;
    opacity: 0.7 !important;
    z-index: 2;
    position: relative;
  }

  h3 {
    position: absolute;
    bottom: 5%;
    left: 5%;
    right: 5%;
    z-index: 4;
    color: white;
  }

  &:before {
    content: '';
    background: black;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: block;
    border-radius: 15px;
  }
}
a.tease-image-overlay:hover {
  .bg-img {
    opacity: 0.2 !important;
  }
}
</style>
