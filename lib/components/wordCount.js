"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _components = require("@sanity/base/components");

var _ui = require("@sanity/ui");

var _PatchEvent = _interopRequireWildcard(require("@sanity/form-builder/PatchEvent"));

var _autoId = require("@reach/auto-id");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// hook to generate unique IDs
var WordCount = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  var type = props.type,
      value = props.value,
      readOnly = props.readOnly,
      placeholder = props.placeholder,
      markers = props.markers,
      presence = props.presence,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onChange = props.onChange; // Creates a unique ID for our input

  var inputId = (0, _autoId.useId)();

  var MaxConstraint = type.validation[0]._rules.filter(rule => rule.flag == 'max')[0].constraint;

  var handleChange = _react.default.useCallback(event => {
    var inputValue = event.currentTarget.value;
    onChange(_PatchEvent.default.from(inputValue ? (0, _PatchEvent.set)(inputValue) : (0, _PatchEvent.unset)()));
  }, [onChange]);

  return /*#__PURE__*/_react.default.createElement(_ui.Stack, {
    space: 1
  }, /*#__PURE__*/_react.default.createElement(_components.FormField, {
    description: type.description // Creates description from schema
    ,
    title: type.title // Creates label from schema title
    ,
    __unstable_markers: markers // Handles all markers including validation
    ,
    __unstable_presence: presence // Handles presence avatars
    ,
    inputId: inputId // Allows the label to connect to the input field

  }, /*#__PURE__*/_react.default.createElement(_ui.TextArea, {
    id: inputId // A unique ID for this input
    ,
    onChange: handleChange // A function to call when the input value changes
    ,
    value: value || '' // Current field value
    ,
    readOnly: readOnly // If "readOnly" is defined make this field read only
    ,
    placeholder: placeholder // If placeholder is defined, display placeholder text
    ,
    onFocus: onFocus // Handles focus events
    ,
    onBlur: onBlur // Handles blur events
    ,
    ref: ref
  }), ' '), ' ', /*#__PURE__*/_react.default.createElement(_ui.Text, {
    muted: true,
    size: 1
  }, ' ', value ? value.length : '0', "/ ", MaxConstraint));
});

var _default = WordCount;
exports.default = _default;
//# sourceMappingURL=wordCount.js.map