"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleList = exports.listWithButtons = exports.list = exports.fullTextList = void 0;

var _index = require("part:@weflocc/kata/partials/index");

var _bi = require("react-icons/bi");

var _shared = require("../shared");

function listSchema(fields) {
  return {
    title: 'List',
    name: 'list',
    type: 'array',
    of: [{
      type: 'object',
      name: 'listItem',
      fields: [...fields],
      preview: {
        select: {
          heading: 'title'
        },

        prepare(selection) {
          var heading = selection.heading;
          return {
            title: heading || 'List item',
            media: _bi.BiListPlus
          };
        }

      }
    }]
  };
} // list schemas


var list = listSchema([_shared.title, (0, _index.basicTextEditor)()]);
exports.list = list;
var listWithButtons = listSchema([_shared.title, (0, _index.basicTextEditor)('Text Body', null, {
  buttons: true
})]);
exports.listWithButtons = listWithButtons;
var fullTextList = listSchema([_shared.title, (0, _index.fullTextEditor)()]);
exports.fullTextList = fullTextList;
var simpleList = listSchema([_shared.title, (0, _index.liteTextEditor)()]);
exports.simpleList = simpleList;
//# sourceMappingURL=textFields.js.map