"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("@sanity/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import InfoToolTip from 'part:@weflocc/kata/components/InfoToolTip'
var FeaturePreview = _ref => {
  var value = _ref.value;
  var feature = value.feature;
  console.log(feature);
  return /*#__PURE__*/_react.default.createElement(_ui.Container, {
    padding: 3
  }, /*#__PURE__*/_react.default.createElement("p", null, "Double click to add (Text & Image)"));
};

var _default = {
  name: 'textAndImage',
  title: 'Text & Image',
  type: 'object',
  fields: [{
    name: 'reversed',
    title: 'Reverse Columns',
    description: 'By default, text is left and image is right. If you enable this field, the columns will be reversed.',
    type: 'boolean',
    initialValue: false
  }, {
    name: 'noCrop',
    title: 'No Crop?',
    description: 'By default, images are cropped to fit the height of the text. If you enable this field, the image will display at its initial aspect ratio.',
    type: 'boolean',
    initialValue: false
  }, {
    name: 'feature',
    title: 'Text and Image',
    type: 'feature01'
  }],
  preview: {
    select: {
      feature: 'feature'
    },
    component: FeaturePreview
  }
};
exports.default = _default;
//# sourceMappingURL=textAndImage.js.map