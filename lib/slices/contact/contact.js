"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contact03 = exports.contact02 = exports.contact01 = void 0;

var _contactFields = require("./contactFields");

var _index = require("part:@weflocc/kata/partials/index");

var _shared = require("../shared");

var contact01 = {
  name: 'contact01',
  type: 'object',
  title: 'Contact #1',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)(), _contactFields.address, _contactFields.email, _contactFields.telephone, _contactFields.thanks]
};
exports.contact01 = contact01;
var contact02 = {
  name: 'contact02',
  type: 'object',
  title: 'Contact #2',
  options: _index.defaultOptions,
  fields: [_shared.title, _contactFields.location, (0, _index.basicTextEditor)(), _contactFields.address, _contactFields.openingTimes, _contactFields.email, // website,
  // websiteText,
  _contactFields.telephone, {
    name: 'what3Words',
    type: 'string',
    title: 'What 3 Words',
    description: 'Enter your three words here in the format one.two.three'
  }]
};
exports.contact02 = contact02;
var contact03 = {
  name: 'contact03',
  type: 'object',
  title: 'Contact #3',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)(), _contactFields.address, _contactFields.email, _contactFields.telephone]
};
exports.contact03 = contact03;
//# sourceMappingURL=contact.js.map