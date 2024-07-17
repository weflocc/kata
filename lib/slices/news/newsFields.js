"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = void 0;

var _index = require("part:@weflocc/kata/partials/index");

var _bi = require("react-icons/bi");

var _shared = require("../shared");

var list = {
  title: 'List',
  name: 'list',
  type: 'array',
  of: [{
    type: 'object',
    title: 'Item',
    name: 'item',
    fields: [_shared.title, _shared.superHeading, _shared.text, (0, _index.links)('Links', 1), (0, _index.standardImage)()],
    preview: {
      select: {
        heading: 'title'
      },

      prepare(selection) {
        var heading = selection.heading;
        return {
          title: heading,
          media: _bi.BiListPlus
        };
      }

    }
  }]
};
exports.list = list;
//# sourceMappingURL=newsFields.js.map