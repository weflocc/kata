"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.portfolio10 = exports.portfolio09 = exports.portfolio08 = exports.portfolio07 = exports.portfolio06 = exports.portfolio05 = exports.portfolio04 = exports.portfolio03 = exports.portfolio01 = void 0;

var _portfolioFields = require("./portfolioFields");

var _index = require("part:@weflocc/kata/partials/index");

var _shared = require("../shared");

var portfolio01 = {
  name: 'portfolio01',
  type: 'object',
  title: 'Portfolio #1',
  options: _index.defaultOptions,
  fields: [_shared.superHeading, _shared.title, _portfolioFields.thumbnails]
};
exports.portfolio01 = portfolio01;
var portfolio03 = {
  name: 'portfolio03',
  type: 'object',
  title: 'Portfolio #3',
  options: _index.defaultOptions,
  fields: [_shared.title, _shared.text, _portfolioFields.thumbnails, (0, _index.links)()]
};
exports.portfolio03 = portfolio03;
var portfolio04 = {
  name: 'portfolio04',
  type: 'object',
  title: 'Portfolio #4',
  options: _index.defaultOptions,
  fields: [_shared.title, _portfolioFields.thumbnails, (0, _index.links)()]
};
exports.portfolio04 = portfolio04;
var portfolio05 = {
  name: 'portfolio05',
  type: 'object',
  title: 'Portfolio #5',
  options: _index.defaultOptions,
  fields: [_shared.title, _portfolioFields.thumbnails]
};
exports.portfolio05 = portfolio05;
var portfolio06 = {
  name: 'portfolio06',
  type: 'object',
  title: 'Portfolio #6',
  options: _index.defaultOptions,
  fields: [_shared.title, _portfolioFields.portfolio06Slides, (0, _index.basicTextEditor)(), (0, _index.links)()]
};
exports.portfolio06 = portfolio06;
var portfolio07 = {
  name: 'portfolio07',
  type: 'object',
  title: 'Portfolio #7',
  options: _index.defaultOptions,
  fields: [_shared.title, _portfolioFields.imageThumbnails]
};
exports.portfolio07 = portfolio07;
var portfolio08 = {
  name: 'portfolio08',
  type: 'object',
  title: 'Portfolio #8',
  options: _index.defaultOptions,
  fields: [_shared.title, _portfolioFields.thumbnails]
};
exports.portfolio08 = portfolio08;
var portfolio09 = {
  name: 'portfolio09',
  type: 'object',
  title: 'Portfolio #9',
  options: _index.defaultOptions,
  fields: [_shared.title, _shared.text, _portfolioFields.thumbnails]
};
exports.portfolio09 = portfolio09;
var portfolio10 = {
  name: 'portfolio10',
  type: 'object',
  title: 'Portfolio #10',
  options: _index.defaultOptions,
  fields: [_shared.title, _portfolioFields.thumbnails]
};
exports.portfolio10 = portfolio10;
//# sourceMappingURL=portfolio.js.map