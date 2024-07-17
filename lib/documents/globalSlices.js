"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _kata = _interopRequireDefault(require("config:@weflocc/kata"));

var _ri = require("react-icons/ri");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  type: 'document',
  name: 'globalSlices',
  title: 'Global Slices',
  icon: _ri.RiGlobeFill,
  fields: [{
    name: 'title',
    type: 'string',
    title: 'Title'
  }, {
    name: 'slices',
    type: 'array',
    title: 'Add the slice type you require',
    description: 'Normally, you should only add a single slice here. If you are creating dynamic content, add multiple of the same type of slice, and set the target for each.',
    options: {
      editModal: 'fullscreen'
    },
    of: _kata.default.allSlices
  }]
};
exports.default = _default;
//# sourceMappingURL=globalSlices.js.map