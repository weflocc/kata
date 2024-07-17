"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("part:@weflocc/kata/partials/index");

var _bi = require("react-icons/bi");

var _default = {
  title: 'External Link',
  name: 'externalLink',
  type: 'object',
  fields: [_index.linkText, _index.linkStyle, {
    type: 'url',
    name: 'url',
    title: 'URL',
    validation: Rule => Rule.uri({
      scheme: ['http', 'https', 'mailto', 'tel', 'sms']
    })
  }],
  preview: {
    select: {
      title: 'linkText',
      subtitle: 'url'
    },

    prepare(selection) {
      var title = selection.title,
          subtitle = selection.subtitle;
      return {
        title: title,
        subtitle: subtitle,
        media: _bi.BiLinkExternal
      };
    }

  }
};
exports.default = _default;
//# sourceMappingURL=externalLink.js.map