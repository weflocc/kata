<template>
  <transition-group
    v-if="articles"
    class="w-full grid gap-medium five-featured-grid md:pr-container-margin"
    tag="ul"
    name="fade"
    mode="out-in"
  >
    <li v-for="(item, i) in articles" :key="item._id">
      <slot v-if="i != 0" name="tease" :item="item">
        <NuxtLink
          :to="getLink(item._id) ? getLink(item._id) : ''"
          :class="{ 'large-thumb': i == 0, 'px-r2/24 block md:px-0': i != 0 }"
        >
          <KataImage
            :image="item.image"
            :max-width="650"
            :ratio="i == 0 ? 3 / 4 : 4 / 3"
            sizes="md:90vw lg:50vw"
            :class="{
              'mb-small': i != 0,
              'md:h-full object-cover max-h-screen': i == 0,
            }"
            class="w-full"
          />
          <div class="title">
            <p
              v-if="item.category && item.category.length"
              class="category mt-0 mb-[7px] text-center label-2"
            >
              <span v-for="(cat, catIndex) in item.category" :key="cat._key">
                {{ getCategoryTitle(cat._ref) }}
                <span v-if="catIndex != item.category.length - 1">|</span>
              </span>
            </p>
            <p v-if="item.date" class="text-center">
              {{ item.date | formatDate }}
            </p>
            <h3 :class="{ 'label-1': i != 0 }" class="text-center">
              {{ item.title }}
              <DraftLabel :id="item._id" />
            </h3>
          </div>
        </NuxtLink>
      </slot>
      <NuxtLink
        v-else
        :to="getLink(item._id)"
        :class="{ 'large-thumb': i == 0 }"
      >
        <KataImage
          :image="item.image"
          :max-width="650"
          :ratio="i == 0 ? 3 / 4 : 4 / 3"
          sizes="sm:90vw lg:50vw xl:33vw"
          :class="{
            'md:h-full object-cover max-h-screen': i == 0,
          }"
          class="w-full"
        />
        <div class="title">
          <p
            v-if="item.category && item.category.length"
            class="category mt-0 mb-[7px] text-center label-2"
          >
            <span v-for="(cat, catIndex) in item.category" :key="cat._key">
              {{ getCategoryTitle(cat._ref) }}
              <span v-if="catIndex != item.category.length - 1">|</span>
            </span>
          </p>
          <p v-if="item.date" class="text-center">
            {{ item.date | formatDate }}
          </p>
          <h3 class="text-center">
            {{ item.title }}
            <DraftLabel :id="item._id" />
          </h3>
        </div>
      </NuxtLink>
    </li>
  </transition-group>
  <p v-else>No results found, try changing your filters</p>
</template>

<script>
export default {
  props: {
    cols: {
      type: String,
      default: '3',
    },
    articles: {
      default: function () {
        return []
      },
      type: Array,
    },
  },
  methods: {
    getCategoryTitle(id) {
      return this.$store.getters['references/getFieldByRef']({
        ref: id,
        field: 'title',
      })
    },
  },
}
</script>

<style lang="scss">
.five-featured-grid {
  grid-template-columns: 1fr;

  @include md-up {
    grid-template-columns: 2fr 1fr;
  }

  @include lg-up {
    grid-template-columns: 2fr 1fr 1fr;

    li:nth-child(3),
    li:nth-child(5) {
      margin-top: var(--spacing-large);
    }
  }

  li:first-child {
    grid-row-start: 1;
    grid-row-end: span 2;

    // @include md-up {
    //   grid-row-end: span 4;
    // }

    // @include lg-up {
    //   grid-row-end: span 2;
    // }

    a {
      display: grid;
      grid-template-areas: 'stack';
      position: relative;

      > * {
        grid-area: stack;
      }
    }

    .title {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      @apply text-white;
      @apply p-medium;
      z-index: 5;
      position: relative;

      p,
      h3 {
        z-index: 5;
        position: relative;
      }

      &:after {
        content: '';
        background-image: linear-gradient(transparent, black);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.5;
        z-index: 1;
      }
    }
  }
}
</style>
