"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("@sanity/ui");

var _InfoTooltip = _interopRequireDefault(require("./InfoTooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogosPreview = _ref => {
  var value = _ref.value;
  var cta07 = value.cta07;
  var logos = cta07 === null || cta07 === void 0 ? void 0 : cta07.list;

  if (logos) {
    return /*#__PURE__*/_react.default.createElement(_InfoTooltip.default, null, /*#__PURE__*/_react.default.createElement(_ui.Container, {
      padding: 3
    }, /*#__PURE__*/_react.default.createElement(_ui.Stack, {
      space: [2, 2, 3, 4]
    }, logos.map(element => {
      if (element) {
        return /*#__PURE__*/_react.default.createElement(_ui.Card, {
          key: element._key,
          padding: 4,
          shadow: 1
        }, /*#__PURE__*/_react.default.createElement(_ui.Stack, {
          space: [3, 3, 4, 5]
        }, /*#__PURE__*/_react.default.createElement(_ui.Text, {
          size: [2, 2, 3, 4],
          weight: 'semibold'
        }, "\"".concat(element.title, "\""))));
      }
    }))));
  } else {
    return /*#__PURE__*/_react.default.createElement(_InfoTooltip.default, null, /*#__PURE__*/_react.default.createElement(_ui.Container, {
      padding: 3
    }, /*#__PURE__*/_react.default.createElement("p", null, "Double click to add (Logos)")));
  }
};

var _default = {
  title: 'Logos',
  name: 'logos',
  type: 'object',
  fields: [{
    name: 'cta07',
    title: 'Logos',
    type: 'cta07',
    options: {
      collapsible: false
    }
  }],
  preview: {
    select: {
      cta07: 'cta07'
    },
    component: LogosPreview
  }
};
exports.default = _default;
//# sourceMappingURL=logos.js.map