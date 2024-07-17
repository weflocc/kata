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
  name: 'internalLink',
  type: 'object',
  title: 'Internal Link',
  fields: [{
    type: 'reference',
    name: 'internalLink',
    to: _kata.default.allTypes,
    options: {
      disableNew: true // we don't want people to be able to create new pages here!

    }
  }, _index.linkText, _index.linkStyle, {
    name: 'anchor',
    type: 'string',
    title: 'Anchor link or Query string',
    instructions: 'Please set internal link to the page you want to anchor on, even if that is the same page as you are currently on.'
  }],
  preview: {
    select: {
      title: 'linkText',
      subtitle: 'internalLink.title'
    },

    prepare(selection) {
      var title = selection.title,
          subtitle = selection.subtitle;
      return {
        title: title,
        subtitle: subtitle,
        media: _bi.BiLink
      };
    }

  }
};
exports.default = _default;
//# sourceMappingURL=internalLink.js.map