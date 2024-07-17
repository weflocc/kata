"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.images04 = exports.images03 = exports.images02 = exports.images01 = void 0;

var _index = require("part:@weflocc/kata/partials/index");

var _shared = require("../shared");

var _bi = require("react-icons/bi");

var imageThumbnails = {
  name: 'list',
  title: 'Images',
  type: 'array',
  of: [{
    name: 'item',
    title: 'Item',
    type: 'object',
    fields: [{
      name: 'title',
      title: 'Image Caption',
      type: 'string'
    }, _index.basicSingleLink, (0, _index.standardImage)()],
    preview: {
      select: {
        heading: 'title',
        image: 'image'
      },

      prepare(selection) {
        var heading = selection.heading,
            image = selection.image;
        return {
          title: heading || image.title || 'Image',
          media: image || _bi.BiListPlus
        };
      }

    }
  }]
};
var imageThumbnailsNoLink = {
  name: 'list',
  title: 'Images',
  type: 'array',
  options: {
    layout: 'grid'
  },
  of: [{
    name: 'item',
    title: 'Item',
    type: 'object',
    fields: [{
      name: 'title',
      title: 'Image Caption',
      type: 'string'
    }, (0, _index.standardImage)()],
    preview: {
      select: {
        heading: 'title',
        image: 'image'
      },

      prepare(selection) {
        var heading = selection.heading,
            image = selection.image;
        return {
          title: heading || image.title || 'Image',
          media: image || _bi.BiListPlus
        };
      }

    }
  }]
};
var images01 = {
  name: 'images01',
  type: 'object',
  title: 'Images #1',
  options: _index.defaultOptions,
  fields: [_shared.title, imageThumbnails]
};
exports.images01 = images01;
var images02 = {
  name: 'images02',
  type: 'object',
  title: 'Images #2',
  options: _index.defaultOptions,
  fields: [_shared.title, imageThumbnailsNoLink]
};
exports.images02 = images02;
var images03 = {
  name: 'images03',
  type: 'object',
  title: 'Images #3',
  options: _index.defaultOptions,
  fields: [(0, _index.media)()]
};
exports.images03 = images03;
var images04 = {
  name: 'images04',
  type: 'object',
  title: 'Images #4',
  options: _index.defaultOptions,
  fields: [imageThumbnailsNoLink]
};
exports.images04 = images04;
//# sourceMappingURL=images.js.map