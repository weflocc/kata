export default {
  methods: {
    getGlobal(global) {
      if (global.slices && global.slices.length == 1) {
        return global.slices[0]
      }
      // @todo - write the get target slice stuff here? migrate from store.
    },
  },
}