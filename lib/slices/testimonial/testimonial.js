"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testimonial05 = exports.testimonial04 = exports.testimonial03 = exports.testimonial02 = exports.testimonial01 = void 0;

var _testimonialFields = require("./testimonialFields");

var _index = require("part:@weflocc/kata/partials/index");

var _shared = require("../shared");

var _bi = require("react-icons/bi");

var testimonial01 = {
  name: 'testimonial01',
  type: 'object',
  title: 'Testimonial #1',
  options: _index.defaultOptions,
  fields: [_shared.title, _testimonialFields.testimonialsImage],
  preview: {
    prepare() {
      return {
        title: 'Testimonials',
        media: _bi.BiChat
      };
    }

  }
};
exports.testimonial01 = testimonial01;
var testimonial02 = {
  name: 'testimonial02',
  type: 'object',
  title: 'Testimonial #2',
  options: _index.defaultOptions,
  fields: [_testimonialFields.testimonialsImage],
  preview: {
    prepare() {
      return {
        title: 'Testimonials',
        media: _bi.BiChat
      };
    }

  }
};
exports.testimonial02 = testimonial02;
var testimonial03 = {
  name: 'testimonial03',
  type: 'object',
  title: 'Testimonial #3',
  options: _index.defaultOptions,
  fields: [_shared.title, _testimonialFields.testimonials],
  preview: {
    prepare() {
      return {
        title: 'Testimonials',
        media: _bi.BiChat
      };
    }

  }
};
exports.testimonial03 = testimonial03;
var testimonial04 = {
  name: 'testimonial04',
  type: 'object',
  title: 'Testimonial #4',
  options: _index.defaultOptions,
  fields: [_testimonialFields.testimonials],
  preview: {
    prepare() {
      return {
        title: 'Testimonials',
        media: _bi.BiChat
      };
    }

  }
};
exports.testimonial04 = testimonial04;
var testimonial05 = {
  name: 'testimonial05',
  type: 'object',
  title: 'Testimonial #5',
  options: _index.defaultOptions,
  fields: [_testimonialFields.quote, _testimonialFields.cite, (0, _index.links)()],
  preview: {
    prepare() {
      return {
        title: 'Testimonials',
        media: _bi.BiChat
      };
    }

  }
};
exports.testimonial05 = testimonial05;
//# sourceMappingURL=testimonial.js.map