"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _kata = _interopRequireDefault(require("config:@weflocc/kata"));

var _index = require("part:@weflocc/kata/partials/index");

var _bi = require("react-icons/bi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  name: 'anchor',
  type: 'object',
  title: 'Page Anchor',
  description: 'Scroll to section on same page',
  fields: [{
    name: 'anchor',
    type: 'string',
    title: 'Anchor link (id)'
  }, _index.linkText, _index.linkStyle],
  preview: {
    select: {
      title: 'linkText',
      subtitle: 'anchor'
    },

    prepare(selection) {
      var title = selection.title,
          subtitle = selection.subtitle;
      return {
        title: title || subtitle,
        subtitle: title ? subtitle : '',
        media: _bi.BiAnchor
      };
    }

  }
};
exports.default = _default;
//# sourceMappingURL=anchor.js.map