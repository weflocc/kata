"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accordion = void 0;

var _bi = require("react-icons/bi");

var _index = require("part:@weflocc/kata/partials/index");

var accordion = {
  name: 'accordion',
  title: 'Dropdown (Accordion)',
  type: 'object',
  fields: [{
    name: 'list',
    type: 'array',
    of: [{
      name: 'item',
      type: 'object',
      fields: [{
        name: 'title',
        type: 'string'
      }, (0, _index.basicTextEditor)()],
      preview: {
        select: {
          title: 'title'
        },

        prepare(selection) {
          var title = selection.title;
          return {
            title: title || 'Accordion',
            media: _bi.BiDownArrowCircle
          };
        }

      }
    }]
  }],
  preview: {
    select: {
      list: 'list'
    },

    prepare(selection) {
      var list = selection.list;
      var length = list ? list.length : 0;
      return {
        title: 'Dropdown (Accordion)',
        subtitle: 'Number of accordions: ' + length,
        media: _bi.BiDownArrowCircle
      };
    }

  }
};
exports.accordion = accordion;
//# sourceMappingURL=accordion.js.map