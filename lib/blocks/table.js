"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.table = void 0;

var _bi = require("react-icons/bi");

var table = {
  title: 'Table',
  name: 'table',
  type: 'object',
  fields: [{
    name: 'title',
    type: 'string',
    title: 'Table title'
  }, {
    name: 'table',
    type: 'table'
  }],
  preview: {
    select: {
      title: 'title'
    },

    prepare(selection) {
      var title = selection.title;
      return {
        title: title || 'Table',
        media: _bi.BiTable
      };
    }

  }
};
exports.table = table;
//# sourceMappingURL=table.js.map