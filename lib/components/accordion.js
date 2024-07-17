"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _bs = require("react-icons/bs");

var _ui = require("@sanity/ui");

var _index = require("part:@weflocc/kata/partials/index");

var _InfoTooltip = _interopRequireDefault(require("./InfoTooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AccordionPreview = _ref => {
  var value = _ref.value;
  var accordions = value.accordions;

  if (accordions) {
    return /*#__PURE__*/_react.default.createElement(_InfoTooltip.default, null, /*#__PURE__*/_react.default.createElement(_ui.Container, {
      padding: 3
    }, accordions.items.map(element => /*#__PURE__*/_react.default.createElement(_ui.Card, {
      key: element._key,
      border: true,
      marginTop: 2,
      padding: 4,
      radius: 2
    }, /*#__PURE__*/_react.default.createElement(_ui.Heading, null, element.title)))));
  } else {
    return /*#__PURE__*/_react.default.createElement(_InfoTooltip.default, null, /*#__PURE__*/_react.default.createElement(_ui.Container, {
      padding: 3
    }, /*#__PURE__*/_react.default.createElement("p", null, "Double click to add (Accordion)")));
  }
};

var _default = {
  name: 'accordion',
  type: 'object',
  title: 'Accordion',
  fields: [{
    name: 'wrapper',
    title: 'Accordion Content',
    type: 'object',
    fields: [{
      name: 'items',
      type: 'array',
      of: [{
        name: 'accordionItem',
        type: 'object',
        fields: [{
          name: 'title',
          type: 'string'
        }, (0, _index.fullTextEditor)()]
      }]
    }]
  }],
  preview: {
    select: {
      accordions: 'wrapper'
    },
    component: AccordionPreview
  }
};
exports.default = _default;
//# sourceMappingURL=accordion.js.map