"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.feature12 = exports.feature11 = exports.feature10 = exports.feature09 = exports.feature08 = exports.feature07 = exports.feature06 = exports.feature05 = exports.feature04 = exports.feature03 = exports.feature02 = exports.feature01 = void 0;

var _shared = require("../shared");

var _featureFields = require("./featureFields");

var _index = require("part:@weflocc/kata/partials/index");

var _bi = require("react-icons/bi");

var feature01 = {
  name: 'feature01',
  type: 'object',
  title: 'Feature #1',
  options: _index.defaultOptions,
  fields: [_shared.superHeading, _shared.title, (0, _index.basicTextEditor)(), (0, _index.links)(), (0, _index.media)()],
  preview: {
    select: {
      superHeading: 'superHeading',
      heading: 'title'
    },

    prepare(selection) {
      var superHeading = selection.superHeading,
          heading = selection.heading;
      return {
        title: superHeading || heading,
        subtitle: superHeading ? heading : '',
        media: _bi.BiListPlus
      };
    }

  }
};
exports.feature01 = feature01;
var feature02 = {
  name: 'feature02',
  type: 'object',
  title: 'Feature #2',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)(), (0, _featureFields.shortFeatures)(), (0, _index.media)()]
};
exports.feature02 = feature02;
var feature03 = {
  name: 'feature03',
  type: 'object',
  title: 'Feature #3',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)(), (0, _index.links)(), (0, _index.media)()]
};
exports.feature03 = feature03;
var feature04 = {
  name: 'feature04',
  type: 'object',
  title: 'Feature #4',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)(), (0, _index.links)()]
};
exports.feature04 = feature04;
var feature05 = {
  name: 'feature05',
  type: 'object',
  title: 'Feature #5',
  options: _index.defaultOptions,
  fields: [_shared.title, _shared.text, _featureFields.features, (0, _index.links)()]
};
exports.feature05 = feature05;
var feature06 = {
  name: 'feature06',
  type: 'object',
  title: 'Feature #6',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)(), (0, _index.links)(), _featureFields.features]
};
exports.feature06 = feature06;
var feature07 = {
  name: 'feature07',
  type: 'object',
  title: 'Feature #7',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)(), _featureFields.features, (0, _index.links)()]
};
exports.feature07 = feature07;
var feature08 = {
  name: 'feature08',
  type: 'object',
  title: 'Feature #8',
  options: _index.defaultOptions,
  fields: [_shared.title, (0, _index.basicTextEditor)(), (0, _index.media)(), (0, _index.links)()]
};
exports.feature08 = feature08;
var feature09 = {
  name: 'feature09',
  type: 'object',
  title: 'Feature #9',
  options: _index.defaultOptions,
  fields: [_shared.title, _featureFields.featureTabs]
};
exports.feature09 = feature09;
var feature10 = {
  name: 'feature10',
  type: 'object',
  title: 'Feature #10',
  options: _index.defaultOptions,
  fields: [_shared.title, _featureFields.locations]
};
exports.feature10 = feature10;
var feature11 = {
  name: 'feature11',
  type: 'object',
  title: 'Feature #11',
  options: _index.defaultOptions,
  fields: [_featureFields.featureImageTabs]
};
exports.feature11 = feature11;
var feature12 = {
  name: 'feature12',
  type: 'object',
  title: 'Feature #12',
  options: _index.defaultOptions,
  fields: [_shared.title, _shared.text, (0, _featureFields.shortFeatures)(), (0, _index.links)(), (0, _index.media)()]
};
exports.feature12 = feature12;
//# sourceMappingURL=feature.js.map