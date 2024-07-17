"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.news06 = exports.news05 = exports.news03 = exports.news02 = void 0;

var _newsFields = require("./newsFields");

var _index = require("part:@weflocc/kata/partials/index");

var _shared = require("../shared");

var news02 = {
  name: 'news02',
  type: 'object',
  title: 'News #2',
  options: _index.defaultOptions,
  fields: [_shared.title]
};
exports.news02 = news02;
var news03 = {
  name: 'news03',
  type: 'object',
  title: 'News #3',
  options: _index.defaultOptions,
  fields: [_shared.title]
};
exports.news03 = news03;
var news05 = {
  name: 'news05',
  type: 'object',
  title: 'News #5',
  options: _index.defaultOptions,
  fields: [_shared.title, _newsFields.list]
};
exports.news05 = news05;
var news06 = {
  name: 'news06',
  type: 'object',
  title: 'News #6',
  options: _index.defaultOptions,
  fields: [_shared.title]
};
exports.news06 = news06;
//# sourceMappingURL=news.js.map