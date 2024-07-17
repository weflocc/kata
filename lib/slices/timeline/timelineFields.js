"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = void 0;

var _bi = require("react-icons/bi");

var _kata = _interopRequireDefault(require("config:@weflocc/kata"));

var _shared = require("../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = {
  title: 'List',
  name: 'list',
  type: 'array',
  of: [{
    type: 'object',
    title: 'Item',
    name: 'item',
    fields: [{
      type: 'image',
      name: 'icon',
      title: 'Icon'
    }, _shared.title, {
      type: 'date',
      name: 'tickDate',
      title: 'Tick Date',
      description: 'The tick will appear for this item after this date.',
      options: {
        dateFormat: 'DD MMM YYYY'
      }
    }, {
      type: 'string',
      name: 'displayDate',
      title: 'Display Date'
    }, _shared.text],
    preview: {
      select: {
        heading: 'title',
        image: 'icon'
      },

      prepare(selection) {
        var heading = selection.heading,
            image = selection.image;
        return {
          title: heading,
          media: image || _bi.BiListPlus
        };
      }

    }
  }]
};
exports.list = list;
//# sourceMappingURL=timelineFields.js.map