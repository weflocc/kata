"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text10 = exports.text09 = exports.text08 = exports.text07 = exports.text06 = exports.text05 = exports.text04 = exports.text03 = exports.text02 = exports.text01 = void 0;

var _shared = require("../shared");

var _textFields = require("./textFields");

var _index = require("part:@weflocc/kata/partials/index");

var text01 = {
  name: 'text01',
  type: 'object',
  title: 'Text #1',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)(), (0, _index.links)()]
};
exports.text01 = text01;
var text02 = {
  name: 'text02',
  type: 'object',
  title: 'Text #2',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)()]
};
exports.text02 = text02;
var text03 = {
  name: 'text03',
  type: 'object',
  title: 'Text #3',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)()]
};
exports.text03 = text03;
var text04 = {
  name: 'text04',
  type: 'object',
  title: 'Text #4',
  options: _index.defaultOptions,
  fields: [_shared.superHeading, _shared.title, _textFields.list, (0, _index.standardImage)()]
};
exports.text04 = text04;
var text05 = {
  name: 'text05',
  type: 'object',
  title: 'Text #5',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)(), (0, _index.standardImage)()]
};
exports.text05 = text05;
var text06 = {
  name: 'text06',
  type: 'object',
  title: 'Text #6',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)()]
};
exports.text06 = text06;
var text07 = {
  name: 'text07',
  type: 'object',
  title: 'Text #7',
  options: _index.defaultOptions,
  fields: [_shared.title, _textFields.simpleList]
};
exports.text07 = text07;
var text08 = {
  name: 'text08',
  type: 'object',
  title: 'Text #8',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)(), (0, _index.links)()]
};
exports.text08 = text08;
var text09 = {
  name: 'text09',
  type: 'object',
  title: 'Text #9',
  options: _index.defaultOptions,
  fields: [_shared.title, _textFields.list]
};
exports.text09 = text09;
var text10 = {
  name: 'text10',
  type: 'object',
  title: 'Text #10',
  options: _index.defaultOptions,
  fields: [_shared.title, _textFields.listWithButtons]
};
exports.text10 = text10;
//# sourceMappingURL=text.js.map