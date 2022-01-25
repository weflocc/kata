<template>
  <nav class="kata-menu">
    <ul class="kata-menu-list p-0">
      <li v-for="item in menu" :key="item._key" class="nav-link-wrap mb-0">
        <template v-if="typeof item.link == 'object'">
          <n-link
            v-if="item.link._ref && link(item.link._ref)"
            v-kata-html="
              item.noLinkJustTitle
                ? item.noLinkJustTitle
                : link(item.link._ref).title
            "
            :to="link(item.link._ref).path"
            class="nav-link inline-block"
            @click.native="clickFn"
          />
        </template>
        <template v-else>
          <n-link
            v-if="item._ref && link(item._ref)"
            v-kata-html="
              item.noLinkJustTitle
                ? item.noLinkJustTitle
                : link(item._ref).title
            "
            :to="link(item._ref).path"
            class="nav-link inline-block"
            @click.native="clickFn"
          />
          <a
            v-else
            v-kata-html="
              item.noLinkJustTitle ? item.noLinkJustTitle : item.title
            "
            :href="item.link"
            class="nav-link inline-block"
            @click="clickFn"
          />
        </template>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
    clickFn: {
      type: Function,
      default: () => {
        console.log('no click function available')
      },
    },
  },
  methods: {
    link(ref) {
      return this.$store.getters['references/getLinkFromReference'](ref)
    },
  },
}
</script>
