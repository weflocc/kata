"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalSliceReference = void 0;

var camelCase = require('lodash.camelcase');

var globalSliceReference = function globalSliceReference(name) {
  var hidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return {
    name: camelCase(name),
    title: name,
    hidden: hidden,
    description: 'This slice is shown on multiple pages. Click below to see/edit it. Editing it will affect all instances.',
    type: 'reference',
    to: [{
      type: 'globalSlices'
    }]
  };
};

exports.globalSliceReference = globalSliceReference;
//# sourceMappingURL=globalSliceReference.js.map