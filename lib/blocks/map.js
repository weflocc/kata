"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = void 0;

var _gr = require("react-icons/gr");

var map = {
  title: 'Map',
  name: 'map',
  type: 'object',
  fields: [{
    title: 'Location',
    name: 'location',
    type: 'geopoint',
    validation: Rule => Rule.required('Please enter a location.')
  }],
  preview: {
    // select: {
    //   location: 'location',
    // },
    prepare(value) {
      return {
        title: 'Map',
        media: _gr.GrMap
      };
    }

  }
};
exports.map = map;
//# sourceMappingURL=map.js.map