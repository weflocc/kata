"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("part:@weflocc/kata/partials/index");

var _default = {
  type: 'document',
  name: 'pageSocialMedia',
  title: 'Social Media',
  initialValue: {
    title: 'Social Media'
  },
  fields: [_index.hiddenTitle, {
    title: 'Twitter',
    name: 'twitter',
    type: 'string'
  }, {
    title: 'Facebook',
    name: 'facebook',
    type: 'string'
  }, {
    title: 'Instagram',
    name: 'instagram',
    type: 'string'
  }, {
    title: 'Linked In',
    name: 'linkedIn',
    type: 'string'
  }, {
    title: 'Youtube',
    name: 'youtube',
    type: 'string'
  }]
};
exports.default = _default;
//# sourceMappingURL=pageSocialMedia.js.map