"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("part:@weflocc/kata/partials/index");

var _go = require("react-icons/go");

var _default = {
  name: 'fileLink',
  type: 'object',
  title: 'File Link',
  fields: [{
    type: 'file',
    name: 'fileLink'
  }, _index.linkText, _index.linkStyle],
  preview: {
    select: {
      title: 'linkText'
    },

    prepare(selection) {
      var title = selection.title;
      return {
        title: title,
        media: _go.GoFileSymlinkFile
      };
    }

  }
};
exports.default = _default;
//# sourceMappingURL=fileLink.js.map