"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quote = exports.name = exports.job = exports.cite = void 0;
Object.defineProperty(exports, "superHeading", {
  enumerable: true,
  get: function get() {
    return _shared.superHeading;
  }
});
exports.testimonialsImage = exports.testimonials = void 0;
Object.defineProperty(exports, "title", {
  enumerable: true,
  get: function get() {
    return _shared.title;
  }
});

var _index = require("part:@weflocc/kata/partials/index");

var _bs = require("react-icons/bs");

var _shared = require("../shared");

var quote = {
  name: 'quote',
  type: 'text',
  rows: 5
};
exports.quote = quote;
var cite = {
  name: 'cite',
  type: 'string'
};
exports.cite = cite;
var name = {
  name: 'name',
  type: 'string'
};
exports.name = name;
var job = {
  name: 'job',
  type: 'string'
};
exports.job = job;
var preview = {
  select: {
    title: 'quote',
    subtitle: 'name'
  },

  prepare(selection) {
    var title = selection.title,
        subtitle = selection.subtitle;
    var showEllipsis = true;

    if (title.length < 50) {
      showEllipsis = false;
    }

    var heading = title.toString().slice(0, 50);
    return {
      title: "".concat(heading).concat(showEllipsis ? '...' : ''),
      subtitle: subtitle,
      media: _bs.BsFillChatQuoteFill
    };
  }

};
var testimonials = {
  name: 'list',
  title: 'Testimonials',
  type: 'array',
  options: {
    collapsable: true
  },
  of: [{
    name: 'item',
    title: 'Item',
    type: 'object',
    fields: [quote, name, job],
    preview: preview
  }]
};
exports.testimonials = testimonials;
var testimonialsImage = {
  name: 'list',
  title: 'Testimonials',
  type: 'array',
  options: {
    collapsable: true
  },
  of: [{
    name: 'item',
    title: 'Item',
    type: 'object',
    fields: [quote, name, job, (0, _index.links)('Links', 1), (0, _index.standardImage)()],
    preview: preview
  }]
};
exports.testimonialsImage = testimonialsImage;
//# sourceMappingURL=testimonialFields.js.map