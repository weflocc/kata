"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.standoutText = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("@sanity/ui");

var _InfoTooltip = _interopRequireDefault(require("./InfoTooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StandoutTextPreview = _ref => {
  var value = _ref.value;
  var text = value.text,
      cite = value.cite;

  if (text || cite) {
    return /*#__PURE__*/_react.default.createElement(_InfoTooltip.default, null, /*#__PURE__*/_react.default.createElement(_ui.Container, {
      padding: 3
    }, /*#__PURE__*/_react.default.createElement(_ui.Card, {
      padding: 4,
      shadow: 1
    }, /*#__PURE__*/_react.default.createElement(_ui.Stack, {
      space: [3, 3, 4, 5]
    }, /*#__PURE__*/_react.default.createElement(_ui.Text, {
      size: [2, 2, 3, 4],
      weight: 'semibold'
    }, "".concat(text)), /*#__PURE__*/_react.default.createElement(_ui.Text, {
      muted: true,
      size: [1, 1, 2]
    }, '- ' + cite)))));
  } else {
    return /*#__PURE__*/_react.default.createElement(_InfoTooltip.default, null, /*#__PURE__*/_react.default.createElement(_ui.Container, {
      padding: 3
    }, /*#__PURE__*/_react.default.createElement("p", null, "Double click to add")));
  }
};

var standoutText = {
  name: 'standoutText',
  type: 'object',
  fields: [{
    type: 'text',
    name: 'text',
    title: 'Standout text'
  }, {
    name: 'cite',
    title: 'Cite',
    type: 'string',
    instructions: 'Underneath the standout text'
  }],
  preview: {
    select: {
      text: 'text',
      cite: 'cite'
    },
    component: StandoutTextPreview
  }
};
exports.standoutText = standoutText;
//# sourceMappingURL=standoutText.js.map