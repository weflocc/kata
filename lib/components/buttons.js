"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("@sanity/ui");

var _bi = require("react-icons/bi");

var _go = require("react-icons/go");

var _index = require("part:@weflocc/kata/partials/index");

var _InfoTooltip = _interopRequireDefault(require("./InfoTooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// function linkType(type) {
//     if type
// }
var ButtonsPreview = _ref => {
  var value = _ref.value;

  var links = _objectSpread({}, value);

  delete links._type; //create an object with icon values

  var icons = {
    internal: _bi.BiLink,
    external: _bi.BiLinkExternal,
    file: _go.GoFileSymlinkFile
  };

  if (links) {
    return /*#__PURE__*/_react.default.createElement(_InfoTooltip.default, null, /*#__PURE__*/_react.default.createElement(_ui.Container, {
      padding: 3,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(_ui.Inline, {
      space: [3, 3, 4]
    }, Object.values(links).map(element => {
      if (element) {
        return /*#__PURE__*/_react.default.createElement(_ui.Button, {
          key: element._key,
          padding: 4,
          mode: "ghost",
          icon: icons[element.linkType],
          text: element.linkText ? element.linkText : '...'
        });
      }
    }))));
  } else {
    return /*#__PURE__*/_react.default.createElement(_InfoTooltip.default, null, /*#__PURE__*/_react.default.createElement(_ui.Container, {
      padding: 3,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement("p", null, "Double click to add a button")));
  }
};

var _default = {
  title: 'Buttons',
  name: 'buttons',
  type: 'object',
  fields: [(0, _index.links)()],
  preview: {
    select: {
      link1: 'links.0',
      link2: 'links.1',
      link3: 'links.2',
      link4: 'links.3',
      link5: 'links.4'
    },
    component: ButtonsPreview
  }
};
exports.default = _default;
//# sourceMappingURL=buttons.js.map