"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thumbnails = exports.portfolio06Slides = exports.imageThumbnails = void 0;

var _kata = _interopRequireDefault(require("config:@weflocc/kata"));

var _index = require("part:@weflocc/kata/partials/index");

var _bi = require("react-icons/bi");

var _shared = require("../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var thumbnails = {
  name: 'list',
  title: 'Thumbnails',
  type: 'array',
  options: {
    collapsable: true
  },
  of: [{
    name: 'item',
    title: 'Item',
    type: 'object',
    fields: [_shared.title, _shared.longerText, _index.basicSingleLink, (0, _index.standardImage)()],
    preview: {
      select: {
        heading: 'title',
        text: 'text',
        image: 'image'
      },

      prepare(selection) {
        var heading = selection.heading,
            text = selection.text,
            image = selection.image;
        return {
          title: heading || text,
          media: image || _bi.BiListPlus
        };
      }

    }
  }]
};
exports.thumbnails = thumbnails;
var imageThumbnails = {
  name: 'list',
  title: 'Thumbnails',
  type: 'array',
  options: {
    collapsable: true
  },
  of: [{
    name: 'item',
    title: 'Item',
    type: 'object',
    fields: [_shared.title, _index.basicSingleLink, (0, _index.standardImage)()],
    preview: {
      select: {
        heading: 'title',
        image: 'image'
      },

      prepare(selection) {
        var heading = selection.heading,
            image = selection.image;
        return {
          title: heading,
          media: image || _bi.BiListPlus
        };
      }

    }
  }]
};
exports.imageThumbnails = imageThumbnails;
var portfolio06Slides = {
  name: 'list',
  title: 'Thumbnails',
  type: 'array',
  options: {
    collapsable: true
  },
  of: [(0, _index.standardImage)()]
};
exports.portfolio06Slides = portfolio06Slides;
//# sourceMappingURL=portfolioFields.js.map