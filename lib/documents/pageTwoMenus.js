"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _kata = _interopRequireDefault(require("config:@weflocc/kata"));

var _ri = require("react-icons/ri");

var _index = require("part:@weflocc/kata/partials/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  type: 'document',
  name: 'pageTwoMenus',
  title: 'Menus',
  initialValue: {
    title: 'Menus'
  },
  fields: [_index.hiddenTitle, {
    title: 'Menu',
    type: 'array',
    name: 'menu',
    of: [{
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
        of: [{
          type: 'object',
          title: 'Menu Item',
          name: 'menuItem',
          fields: [{
            type: 'string',
            name: 'title',
            title: 'Custom link text'
          }, _index.basicSingleLink],
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
        }]
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
    }]
  }, {
    title: 'Secondary Menu',
    type: 'array',
    name: 'secondaryMenu',
    of: [{
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
        of: [{
          type: 'object',
          title: 'Menu Item',
          name: 'menuItem',
          fields: [{
            type: 'string',
            name: 'title',
            title: 'Custom link text'
          }, _index.basicSingleLink],
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
        }]
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
    }]
  }]
};
exports.default = _default;
//# sourceMappingURL=pageTwoMenus.js.map