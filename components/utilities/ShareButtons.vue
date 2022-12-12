<template>
  <div>
    <div class="social-share para-2">
      <a
        id="facebookShare"
        class="share-button"
        :href="`https://www.facebook.com/sharer/sharer.php?u=${link}`"
        target="_blank"
        title="Facebook"
      >
        <svg
          id="facebook"
          viewBox="0 0 24 24"
          fill="#fff"
          preserveAspectRatio="xMinYMin slice"
          :width="size"
          :height="size"
        >
          <path
            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
          ></path>
        </svg>
      </a>

      <a
        id="twitterShare"
        class="share-button"
        :href="`https://twitter.com/intent/tweet?original_referer=${link}&ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&text=${title}&tw_p=tweetbutton&url=${link}`"
        target="_blank"
        title="Twitter"
      >
        <svg
          id="twitter"
          viewBox="0 0 24 24"
          fill="#fff"
          preserveAspectRatio="xMinYMin slice"
          :width="size"
          :height="size"
        >
          <path
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
          ></path>
        </svg>
      </a>

      <!-- <a
        id="linkedinShare"
        class="share-button"
        :href="`https://www.linkedin.com/shareArticle?mini=true&url=${link}&title=${title}&summary=${text}&source=`"
        target="_blank"
        title="LinkedIn"
      >
        <svg
          id="linkedin"
          viewBox="0 0 24 24"
          fill="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-linkedin"
        >
          <path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          ></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a> -->

      <a
        id="emailShare"
        class="share-button no-loader"
        :href="`mailto:info@example.com?&subject=${title}&body=${link} ${text}`"
        title="Email"
      >
        <svg
          id="email"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          preserveAspectRatio="xMinYMin slice"
          :width="size"
          :height="size"
        >
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          ></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </a>

      <!-- <button
        ref="copyLink"
        class="share-button copy-link"
        rel="noopener noreferrer"
        @click="copyURL(link)"
      >
        <svg
          viewBox="0 0 353 353"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#prefix__clip0_538_2)">
            <path
              d="M318.54 57.282h-47.652V15c0-8.284-6.716-15-15-15H34.264c-8.284 0-15 6.716-15 15v265.522c0 8.284 6.716 15 15 15h47.651v42.281c0 8.284 6.716 15 15 15H318.54c8.284 0 15-6.716 15-15V72.282c0-8.284-6.716-15-15-15zM49.264 265.522V30h191.623v27.282H96.916c-8.284 0-15 6.716-15 15v193.24H49.264zm254.276 57.282H111.916V87.282H303.54v235.522z"
              fill="#fff"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_538_2">
              <path fill="#fff" d="M0 0h352.804v352.804H0z" />
            </clipPath>
          </defs>
        </svg>
       <span v-kata-html="copyText"></span>
      </button> -->
    </div>
  </div>
</template>

<script>
import { title, text } from '../slices/shared'
export default {
  mixins: [title, text],
  props: {
    link: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 30,
    },
  },
  data: () => ({ copyText: 'Copy link' }),
  methods: {
    async copyURL(text) {
      try {
        await navigator.clipboard.writeText(text)
        this.copyText = 'Link Copied'
      } catch ($e) {
        this.copyText = 'Error'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.social-share {
  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none !important;
    transition: 0.5s ease;
    appearance: none;
  }
  .share-button {
    text-align: center;
    background: $primary;
    color: white;
    padding: 10px;
    border-radius: 100%;
    display: inline-block;
    line-height: 1;
    @apply mr-small;
    transition: 0.4s ease;
    svg {
      margin: 0 auto;
    }
    &:hover {
      background: $secondary;
    }
  }
  .share-button:last-of-type {
    margin-right: 0;
  }
}
</style>
