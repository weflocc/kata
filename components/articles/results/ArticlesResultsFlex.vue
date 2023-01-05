<template>
  <transition-group
    v-if="articles"
    class="flex flex-wrap article-results-flex"
    tag="ul"
    name="fade"
    mode="out-in"
  >
    <li
      v-for="(item, i) in articles"
      :key="item._id || item._key"
      class="mb-medium"
    >
      <slot name="tease" :item="item" :index="i">
        <NuxtLink :to="getLink(item._id)">
          <KataImage
            :image="item.image"
            :max-width="650"
            :ratio="6 / 4"
            sizes="sm:90vw md:50vw lg:50vw xl:50vw"
            class="mb-small mx-auto"
          />

          <div class="title">
            <p
              v-if="item.category && item.category.length"
              class="category mt-0 text-center label-2"
            >
              <span v-for="(cat, catIndex) in item.category" :key="cat._key">
                {{ getCategoryTitle(cat._ref) }}
                <span v-if="catIndex != item.category.length - 1">|</span>
              </span>
            </p>
            <h3 class="text-center">
              {{ item.title }}
              <DraftLabel :id="item._id" />
            </h3>
          </div>
        </NuxtLink>
      </slot>
    </li>
  </transition-group>
  <p v-else class="no-results">No results found, try changing your filters</p>
</template>

<script>
export default {
  props: {
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
.article-results-flex {
  margin: 0 calc(-1 * (var(--spacing-medium) / 2));
  li {
    flex-basis: calc(50% - var(--spacing-medium));
    flex-grow: 1;
    max-width: 50%;
    padding: 0 calc(var(--spacing-medium) / 2);
  }
  li:nth-child(10n + 3),
  li:nth-child(10n + 6),
  li:nth-child(10n + 9),
  li:nth-child(10n + 10) {
    flex-basis: 100%;
    max-width: 100%;
  }

  @include md-up {
    li {
      flex-basis: calc(50% - var(--spacing-medium));
      flex-grow: 1;
      max-width: 50% !important;
    }
    li:nth-child(10n + 1),
    li:nth-child(10n + 2),
    li:nth-child(10n + 3),
    li:nth-child(10n + 6),
    li:nth-child(10n + 7),
    li:nth-child(10n + 8) {
      flex-basis: calc(33% - var(--spacing-medium));
    }
  }
  @include xl-up {
    li,
    li:nth-child(10n + 6),
    li:nth-child(10n + 7) {
      flex-basis: calc(33% - var(--spacing-medium));
      min-width: calc(33% - var(--spacing-medium));
      max-width: 34% !important;
    }
    li:nth-child(10n + 1),
    li:nth-child(10n + 2),
    li:nth-child(10n + 3),
    li:nth-child(10n + 4),
    li:nth-child(10n + 8),
    li:nth-child(10n + 9),
    li:nth-child(10n + 10) {
      flex-basis: calc(25% - var(--spacing-medium));
      min-width: calc(25% - var(--spacing-medium));
    }
  }
}
</style>
