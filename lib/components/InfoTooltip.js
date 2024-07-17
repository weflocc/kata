"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("@sanity/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoToolTip = _ref => {
  var children = _ref.children,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'Double click to edit content' : _ref$message;
  return /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
    content: /*#__PURE__*/_react.default.createElement(_ui.Box, {
      padding: 2
    }, /*#__PURE__*/_react.default.createElement(_ui.Text, {
      muted: true,
      size: 1
    }, message)),
    fallbackPlacements: ['right', 'left'],
    placement: "top",
    portal: true
  }, children);
};

var _default = InfoToolTip;
exports.default = _default;
//# sourceMappingURL=InfoTooltip.js.map