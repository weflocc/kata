<template>
  <div class="md:flex" v-if="item">
    <div
      v-if="item.image"
      class="w-full md:w-1/3 md:pr-medium mb-medium md:mb-0"
    >
      <section class="image-wrapper">
        <KataImage
          :image="item.image"
          :max-width="500"
          :ratio="251 / 285"
          data-not-lazy
        />
      </section>
    </div>
    <section :class="{ 'md:w-2/3 md:pl-medium': item.image }">
      <div class="divide-y divide-primary">
        <div class="flex justify-between items-center">
          <p v-if="item.job" v-kata-html="item.job" class="label-2 mb-2" />
          <SocialMedia
            v-if="item.socials"
            :social-links="item.socials"
            :size="15"
          />
        </div>
        <div>
          <p v-if="item.bio" class="para-2 pt-2">{{ item.bio }}</p>
          <p
            v-if="item.name"
            v-kata-html="item.name"
            class="label-1 mt-medium"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style></style>
