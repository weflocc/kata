"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.standardImage = void 0;

var _index = require("part:@weflocc/kata/partials/index");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var camelCase = require('lodash.camelcase');

var standardImage = function standardImage() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Image';
  var vars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var required = (vars === null || vars === void 0 ? void 0 : vars.required) || false;
  var title = (vars === null || vars === void 0 ? void 0 : vars.title) || name;
  var description = (vars === null || vars === void 0 ? void 0 : vars.description) || '';
  var hidden = (vars === null || vars === void 0 ? void 0 : vars.hidden) || false;
  return {
    name: camelCase(name),
    title: title,
    type: 'image',
    description: description,
    hidden: hidden,
    options: _objectSpread({
      hotspot: true
    }, _index.defaultOptions),
    validation: required ? Rule => Rule.required('Please select an image.') : null
  };
};

exports.standardImage = standardImage;
//# sourceMappingURL=image.js.map