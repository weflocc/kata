<template>
  <div
    v-if="feature"
    class="slice feature-1 feature-1-serializer flex flex-col w-full"
    :class="{
      'md:flex-row-reverse reversed': reversed,
      'md:flex-row ': !reversed,
    }"
  >
    <div
      class="md:w-1/2 order-2 md:order-1 py-medium text"
      :class="{ 'md:mr-large': !reversed, 'md:ml-large': reversed }"
    >
      <div v-if="feature.superHeading">
        <h2
          v-kata-html="feature.superHeading"
          class="label-1 mb-medium fade-up"
        />
        <h3
          v-if="feature.title"
          v-kata-html="feature.title"
          class="heading-2 mb-medium fade-up"
        />
      </div>
      <h2
        v-else
        v-kata-html="feature.title"
        class="heading-2 mb-medium fade-up"
      />
      <!-- Use sanity content to prevent infinite loop of re-including feature01Seralizer again -->
      <SanityContent
        v-if="feature.textBody"
        :blocks="feature.textBody"
        class="embed-content-wrap feature-1-content"
      />
      <KataLinks
        v-if="feature.links"
        :links="feature.links"
        class="fade-up mt-large"
      />
    </div>
    <div class="md:w-1/2 order-1 md:order-2 mb-large md:mb-0 image">
      <KataMedia
        v-if="feature.media"
        :media="feature.media"
        :ratio="ratio"
        :max-width="1500"
        :no-crop="noCrop"
        class="h-full w-full object-cover"
        sizes="(max-width:699px) 90vw, (max-width:1439px) 50vw, 50vw"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feature: {
      type: Object,
      default: null,
    },
    ratio: {
      type: Number,
      default: 685 / 514,
    },
    reversed: {
      type: Boolean,
      default: false,
    },
    noCrop: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
