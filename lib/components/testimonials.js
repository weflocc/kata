"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("@sanity/ui");

var _InfoTooltip = _interopRequireDefault(require("./InfoTooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestimonialsPreview = _ref => {
  var value = _ref.value;
  var testimonialsParent = value.testimonialsParent;
  var testimonials = testimonialsParent === null || testimonialsParent === void 0 ? void 0 : testimonialsParent.list;

  if (testimonials) {
    return /*#__PURE__*/_react.default.createElement(_InfoTooltip.default, null, /*#__PURE__*/_react.default.createElement(_ui.Container, {
      padding: 3
    }, /*#__PURE__*/_react.default.createElement(_ui.Stack, {
      space: [2, 2, 3, 4]
    }, testimonials.map(element => {
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
        }, "\"".concat(element.quote, "\"")), /*#__PURE__*/_react.default.createElement(_ui.Text, {
          muted: true,
          size: [1, 1, 2]
        }, '- ' + element.name)));
      }
    }))));
  } else {
    return /*#__PURE__*/_react.default.createElement(_InfoTooltip.default, null, /*#__PURE__*/_react.default.createElement(_ui.Container, {
      padding: 3
    }, /*#__PURE__*/_react.default.createElement("p", null, "Double click to add (Testimonials)")));
  }
};

var _default = {
  title: 'Testimonials',
  name: 'testimonials',
  type: 'object',
  fields: [{
    name: 'testimonial04',
    title: 'Testimonials',
    type: 'testimonial04',
    options: {
      collapsible: false
    }
  }],
  preview: {
    select: {
      testimonialsParent: 'testimonial04'
    },
    component: TestimonialsPreview
  }
};
exports.default = _default;
//# sourceMappingURL=testimonials.js.map