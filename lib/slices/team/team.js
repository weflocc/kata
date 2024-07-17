"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.team04 = exports.team03 = exports.team01 = void 0;

var _teamFields = require("./teamFields");

var _index = require("part:@weflocc/kata/partials/index");

var _shared = require("../shared");

var team01 = {
  name: 'team01',
  type: 'object',
  title: 'Team #1',
  options: _index.defaultOptions,
  fields: [_shared.title, _shared.text, _teamFields.people, (0, _index.links)()]
};
exports.team01 = team01;
var team03 = {
  name: 'team03',
  type: 'object',
  options: _index.defaultOptions,
  fields: [_shared.title, _shared.text, _teamFields.profiles]
};
exports.team03 = team03;
var team04 = {
  name: 'team04',
  type: 'object',
  title: 'Team #4',
  options: _index.defaultOptions,
  fields: [_shared.title, _shared.text, _teamFields.thumbnails]
};
exports.team04 = team04;
//# sourceMappingURL=team.js.map