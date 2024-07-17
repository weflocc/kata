"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("part:@weflocc/kata/partials/index");

var _default = {
  type: 'document',
  name: 'pageMeta',
  title: 'Global Meta',
  initialValue: {
    title: 'Global Meta'
  },
  fields: [_index.hiddenTitle, {
    name: 'metaTitle',
    title: 'Global Meta Title',
    type: 'string'
  }, {
    name: 'metaDescription',
    title: 'Global Meta Description',
    type: 'text',
    rows: 3
  }, _index.sharingImage, _index.twitterSharingImage, _index.schemaOrg]
};
exports.default = _default;
//# sourceMappingURL=pageMeta.js.map