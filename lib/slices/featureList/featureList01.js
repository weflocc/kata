"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("part:@weflocc/kata/partials/index");

var featureList01 = {
  name: 'featureList01',
  title: 'Feature List #1',
  type: 'object',
  options: _index.defaultOptions,
  fields: [{
    name: 'list',
    type: 'array',
    title: 'Features',
    of: [{
      type: 'feature01',
      name: 'feature01'
    }]
  }]
};
var _default = featureList01;
exports.default = _default;
//# sourceMappingURL=featureList01.js.map