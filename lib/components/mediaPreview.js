"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("@sanity/ui");

var _InfoTooltip = _interopRequireDefault(require("./InfoTooltip"));

var _media = require("../partials/media");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaPreview = _ref => {
  var value = _ref.value;
  return /*#__PURE__*/_react.default.createElement(_InfoTooltip.default, null, /*#__PURE__*/_react.default.createElement(_ui.Container, {
    padding: 3
  }, /*#__PURE__*/_react.default.createElement("p", null, "Double click edit. (Media)")));
};

var _default = {
  name: 'mediaPreview',
  title: 'Media',
  type: 'object',
  fields: [{
    type: 'boolean',
    name: 'noCrop',
    title: 'Disable automatic scaling and cropping of this image?',
    description: 'This only applies if you select image or image slideshow from the options below.',
    initialValue: false
  }, (0, _media.media)()],
  preview: {
    select: {
      media: 'media'
    },
    component: MediaPreview
  }
};
exports.default = _default;
//# sourceMappingURL=mediaPreview.js.map