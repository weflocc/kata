"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("part:@weflocc/kata/partials/index");

var _bs = require("react-icons/bs");

var _default = {
  name: 'lightboxButton',
  type: 'object',
  title: 'Lightbox Button',
  fields: [{
    type: 'string',
    name: 'query',
    title: 'Query',
    hidden: _ref => {
      var currentUser = _ref.currentUser;
      return currentUser.email != 'studio@flocc.co';
    },
    description: 'For developer use only. If you edit this, your lightbox will break.'
  }, _index.linkText, _index.linkStyle],
  preview: {
    select: {
      title: 'linkText'
    },

    prepare(selection) {
      var title = selection.title,
          subtitle = selection.subtitle;
      return {
        title: title,
        subtitle: subtitle,
        media: _bs.BsFilePost
      };
    }

  }
};
exports.default = _default;
//# sourceMappingURL=lightboxButton.js.map