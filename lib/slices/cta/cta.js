"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cta08 = exports.cta07 = exports.cta05 = exports.cta02 = exports.cta01 = void 0;

var _index = require("part:@weflocc/kata/partials/index");

var _shared = require("../shared");

var list = {
  name: 'list',
  title: 'List',
  type: 'array',
  of: [{
    name: 'item',
    title: 'Item',
    type: 'object',
    fields: [_shared.title, _shared.text, (0, _index.links)()]
  }]
};
var cta01 = {
  name: 'cta01',
  type: 'object',
  title: 'Call To Action #01',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)(), (0, _index.links)()]
};
exports.cta01 = cta01;
var cta02 = {
  name: 'cta02',
  type: 'object',
  title: 'Call To Action #02',
  options: _index.defaultOptions,
  fields: [_shared.title, list]
};
exports.cta02 = cta02;
var cta05 = {
  name: 'cta05',
  type: 'object',
  title: 'Call To Action #05',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)(), (0, _index.standardImage)(), (0, _index.links)()]
};
exports.cta05 = cta05;
var cta07 = {
  name: 'cta07',
  type: 'object',
  title: 'Call To Action #07',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)(), {
    name: 'list',
    title: 'Logos',
    type: 'array',
    options: {
      layout: 'grid'
    },
    of: [{
      name: 'item',
      type: 'object',
      title: 'Item',
      fields: [{
        name: 'title',
        type: 'string'
      }, (0, _index.standardImage)('Logo'), {
        name: 'url',
        type: 'url'
      }]
    }],
    preview: {
      select: {
        image: 'image'
      },

      prepare(selection) {
        var image = selection.image;
        return {
          title: 'Logo',
          media: image
        };
      }

    }
  }, (0, _index.links)()]
};
exports.cta07 = cta07;
var cta08 = {
  name: 'cta08',
  type: 'object',
  title: 'Call To Action #08',
  options: _index.defaultOptions,
  fields: [(0, _index.links)()]
};
exports.cta08 = cta08;
//# sourceMappingURL=cta.js.map