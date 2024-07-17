"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meta = require("../partials/meta");

var _kata = _interopRequireDefault(require("config:@weflocc/kata"));

var _ri = require("react-icons/ri");

var _index = require("part:@weflocc/kata/partials/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linkItem = index => {
  // max of 5 levels deep!
  if (index < 5) {
    index++;
    return {
      type: 'object',
      title: 'Menu Item',
      name: 'menuItem',
      fields: [{
        type: 'string',
        name: 'title',
        title: 'Custom link text'
      }, _index.basicSingleLink, {
        title: 'Children',
        name: 'list',
        type: 'array',
        of: [linkItem(index)]
      }],
      preview: {
        select: {
          linkTitle: 'singleLink.internalLink.title',
          title: 'title'
        },

        prepare(selection) {
          var title = selection.title,
              linkTitle = selection.linkTitle;
          return {
            title: title || linkTitle || 'Unknown',
            media: _ri.RiMenuAddLine
          };
        }

      }
    };
  } else {
    return {
      type: 'object',
      title: 'Menu Item',
      name: 'menuItem',
      fields: [_index.basicSingleLink]
    };
  }
};

var _default = {
  type: 'document',
  name: 'pageInfiniteMenu',
  title: 'Menu',
  initialValue: {
    title: 'Menu'
  },
  fields: [_meta.hiddenTitle, {
    title: 'Menu',
    type: 'array',
    name: 'menu',
    of: [linkItem(0)]
  }]
};
exports.default = _default;
//# sourceMappingURL=pageInfiniteMenu.js.map