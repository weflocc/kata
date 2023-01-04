<template>
  <div class="slice images-2 w-r24/24 mx-auto">
    <div class="small-style-gallery">
      <div
        v-if="imageThumbnails && imageThumbnails.length"
        class="grid grid-cols-2 lg:grid-cols-4 gap-small"
      >
        <div
          v-for="(item, i) in imageThumbnails"
          :key="item._key"
          class="relative item cursor-pointer"
          :class="{ 'col-span-2 row-span-2': i == 0, 'col-span-2': i == 3 }"
          @click="lightboxVisible(i)"
        >
          <KataImage
            :image="item.image"
            :max-width="1000"
            :ratio="i == 3 ? 540 / 270 : 1"
            class="h-full w-full object-cover"
          />
          <div
            class="overlay absolute top-0 left-0 w-full h-full p-4 sm:p-small opacity-0"
          >
            <p v-kata-html="item.title" class="heading-3" />
          </div>
        </div>
      </div>
    </div>

    <GalleryLightbox ref="galleryLightbox" :list="list" />
  </div>
</template>

<script>
import { title, list } from '../shared'

export default {
  mixins: [title, list],
  computed: {
    imageThumbnails() {
      let max = 4
      if (this.list.length > max) {
        // if more then 8 images, don't show them all, just add them to slider
        return this.list.filter((item, i) => i < max)
      } else {
        return this.list
      }
    },
  },
  methods: {
    lightboxVisible(index) {
      this.$nextTick(() => {
        if (this.$refs.galleryLightbox?.showLightbox) {
          this.$refs.galleryLightbox.showLightbox(index)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.images-2 {
  max-width: 100vw;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  .overlay {
    background: rgba($secondary, 0.7);
    color: white;
    transition: 0.5s ease;
  }
  .item:hover {
    .overlay {
      opacity: 1;
    }
  }
  @include sm-down {
    .heading-3 {
      font-size: 16px;
    }
  }
}
</style>
