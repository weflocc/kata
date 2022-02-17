<template>
  <div class="slice feature-6 w-r10/12 mx-auto md:flex md:justify-between">
    <div class="w-full md:w-r5/12 mb-large md:mb-0 md:mr-r2/12 left">
      <h2
        v-if="title"
        v-kata-html="title"
        class="mb-medium fade-up heading-2"
      />
      <SanityEmbedContent
        v-if="textBody"
        :blocks="textBody"
        class="mb-medium fade-up"
      />
      <KataLinks v-if="links" :links="links" class="fade-up" />
    </div>
    <div class="w-full md:w-r3/12 right">
      <ul v-if="list">
        <li
          v-for="(item, index) in list"
          :key="item.title ? item.title : index"
          class="mb-large fade-up item flex items-start"
        >
          <KataSimpleImage
            v-if="item.icon"
            :image="item.icon"
            width="50"
            height="50"
            class="mb-small mx-auto"
          />
          <div class="pl-small">
            <h3
              v-if="item.title"
              v-kata-html="item.title"
              class="label-1 mb-[5px]"
            />
            <p v-if="item.text" v-kata-html="item.text" class="para-2" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { title, links, textBody, list } from '../shared'
export default {
  mixins: [title, links, textBody, list],
}
</script>
