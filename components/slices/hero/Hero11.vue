<template>
  <div class="hero-11 slice">
    <div class="top mb-slice-half w-r10/12 mx-r1/12">
      <div class="left mb-large md:mb-0">
        <h1 v-if="title" v-html="title" />
        <a href="#main" class="side-link">{{ sideLinkText }}</a>
      </div>
      <div class="right">
        <p v-if="text" v-html="text" />
        <KataLinks v-if="links" :links="links" class="mt-medium" />
      </div>
    </div>
    <div class="bottom">
      <p
        v-if="subtitle"
        class="pull-out w-r11/12 sm:w-r8/12 lg:w-r6/12 p-screen-border"
        v-html="subtitle"
      ></p>
      <div class="media-wrap hero-animation border-animate">
        <KataMedia v-if="media" :media="media" />
      </div>
    </div>
  </div>
</template>

<script>
import { title, text, links, media } from '../shared'

export default {
  mixins: [title, text, links, media],
  props: {
    sideLinkText: {
      type: String,
      default: 'Discover',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
//scoped styles
.hero-11 {
  .top {
    position: relative;
    min-height: 50vh;

    @media (min-width: 600px) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        position: relative;
        padding-right: 15px;
        padding-left: 5%;
      }

      .right {
        padding-left: 15px;
      }

      > div {
        min-width: 50%;
      }

      .side-link {
        position: absolute;
        left: -var(--r1_12);
        transform: translateX(100%);
        top: 0;
        bottom: 0;
        writing-mode: vertical-lr;
        text-decoration: none;
        color: black;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: height 0.7s ease;
        overflow: visible;
        height: 100%;
        z-index: 2;

        &:after {
          content: '';
          width: 1px;
          background: black;
          height: 100%;
          display: inline-block;
          margin-top: 35px;
          transition: 0.3s ease;
        }

        &:hover {
          height: 30vh;
        }
      }
    }
    @include md-down {
      flex-direction: column;
      padding-left: 12%;
      min-height: 60vh;
      justify-content: center;

      .left,
      .right {
        padding: 0;
      }
    }
    @include sm-down {
      padding-left: 0;

      .side-link {
        display: none;
      }
    }
  }

  .bottom {
    position: relative;
  }
}
</style>

<style lang="scss">
//unscoped styles
.hero-11 .bottom {
  img,
  video {
    width: 100%;
    max-height: 80vh;
    object-fit: cover;
    object-position: center;
  }
}
</style>
