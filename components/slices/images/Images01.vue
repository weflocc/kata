<template>
  <div class="slice images-1 relative slice-animation">
    <div
      v-if="title"
      class="heading pointer-events-none absolute top-0 right-0 pt-slice w-full h-full -mt-slice"
    >
      <div class="heading-inner">
        <h2 v-kata-html="title" class="text-tertiary heading-1" />
      </div>
    </div>
    <div
      v-if="list && list != null && list.length"
      class="w-r24/24 mx-auto grid grid-cols-2 gap-small"
    >
      <div
        v-for="(item, index) in list"
        :key="item._key"
        class="relative item fade-up"
        :class="thumbnailClass(index + 1)"
      >
        <KataImage
          :image="item.image"
          :max-width="1000"
          :ratio="ratio(index + 1)"
        />
        <div
          v-if="item.title"
          class="overlay absolute top-0 left-0 w-full h-full p-4 sm:p-small opacity-0"
        >
          <p v-kata-html="item.title" class="heading-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { title, list } from '../shared'
export default {
  mixins: [title, list],
  data: () => ({
    portrait: [],
  }),
  mounted() {
    if (this.list?.length) {
      for (let x = 0; x < this.list.length; x++) {
        this.portrait.push(4 * x - 2)
        this.portrait.push(4 * x - 1)
      }
    }
  },
  methods: {
    ratio(index) {
      if (this.portrait.includes(index)) {
        return 402 / 536
      } else {
        return 536 / 402
      }
    },
    thumbnailClass(index) {
      if (this.portrait.includes(index)) {
        return 'portrait'
      } else {
        return 'landscape'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.images-1 {
  max-width: 100vw;
  --slice-move: 0; //backup
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  .heading {
    z-index: 1;

    .heading-inner {
      overflow-x: hidden;
      max-width: 100vw;
      position: sticky;
      top: 40%;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none;
      }
    }

    h2 {
      font-weight: normal;
      margin: 0;
      width: 100vw;
      transition: transform 0.3s linear;
      line-height: 1;
      @include fluid-type(65px, 200px);
      transform: translateX(calc((-70vw * var(--slice-move)) + 50vw));
    }
  }

  .landscape:nth-child(odd) {
    align-self: end;
  }
  .item:nth-of-type(6) {
    margin-top: -58%;
  }
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
