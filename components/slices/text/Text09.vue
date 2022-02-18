<template>
  <div class="slice text-9 w-r24/24 mx-auto">
    <div class="sticky md:w-1/2 md:mr-medium">
      <h2 v-if="title" v-kata-html="title" class="mb-medium fade-up"></h2>
    </div>
    <div ref="content" class="content md:w-1/2 md:ml-medium">
      <!-- <h3 v-if="superHeading" class="mb-medium fade-up" v-kata-html="superHeading" /> -->
      <div v-if="list" class="sticky-content">
        <div v-for="(item, i) in list" :key="i" class="fade-up mb-slice">
          <h3 v-if="item.title" v-kata-html="item.title" class="mb-small" />
          <p v-if="item.text" v-kata-html="item.text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { superHeading, title, list } from '../shared'
export default {
  mixins: [superHeading, title, list],
  data() {
    return {
      loading: true,
      imgList: [],
      contentVisible: false,
    }
  },
  // mounted() {
  //   if (process.client) {
  //     window.addEventListener('scroll', this.handleScroll)
  //   }
  // },
  // beforeDestroy() {
  //   if (process.client) {
  //     window.removeEventListener('scroll', this.handleScroll)
  //   }
  // },
  // methods: {
  //   handleScroll() {
  //     if (!this.contentVisible) {
  //       let top = this.$refs.sticky360.offsetTop
  //       if (top - 100 < window.pageYOffset) {
  //         this.$refs.content.style.opacity = 1
  //         this.contentVisible = true
  //       }
  //     }
  //   },
  // },
}
</script>

<style lang="scss" scoped>
.text-9 {
  @include md-down {
    .content,
    .sticky {
      padding-bottom: 5%;
    }
  }
  @include md-up {
    display: flex;
    position: relative;
    align-items: flex-start;
    min-height: 100vh;

    .content {
      margin-top: calc(var(--header-height) + var(--spacing-large));
      // margin-bottom: 20%;
    }

    .sticky {
      display: flex;
      align-items: center;
      position: sticky; //overflow-x hidden on body breaks this
      top: calc(var(--header-height) + var(--spacing-slice));
      // top: 50%;
      // transform: translateY(-50%);
    }
  }
}
</style>
