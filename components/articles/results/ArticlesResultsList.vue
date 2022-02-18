<template>
  <div
    v-if="articles && articles.length > 0"
    class="py-slice-half w-r24/24 mx-auto md:px-r2/24 lg:px-r2/12 sm:flex relative"
  >
    <transition-group tag="ul" name="fade" mode="out-in" class="w-full">
      <li v-for="item in articles" :key="item._id || item._key">
        <slot name="tease" :item="item"></slot>
      </li>
    </transition-group>
  </div>
  <div v-else class="py-slice-half px-5 sm:flex sm:space-x-5">
    <p>No results found.</p>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      default: null,
      type: Array,
    },
  },
}
</script>
