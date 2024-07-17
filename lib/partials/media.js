"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = void 0;

var _index = require("part:@weflocc/kata/partials/index");

var _bs = require("react-icons/bs");

// import { videoSrcset } from './videoSrcset'
var camelCase = require('lodash.camelcase');

var media = function media() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Media';
  var required = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var vars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var hidden = (vars === null || vars === void 0 ? void 0 : vars.hidden) || false;
  return {
    name: camelCase(name),
    title: name,
    type: 'object',
    options: _index.defaultOptions,
    hidden: hidden,
    fields: [{
      type: 'string',
      name: 'mediaType',
      title: 'Media Type',
      initialValue: 'image',
      validation: Rule => Rule.required(),
      options: {
        list: [{
          title: 'Image',
          value: 'image'
        }, {
          title: 'Video',
          value: 'video'
        }, {
          title: 'Embed Video',
          value: 'embed'
        }, {
          title: 'Image Slideshow',
          value: 'slideshow'
        }, {
          title: 'Lottie Js',
          value: 'lottie'
        }]
      }
    }, (0, _index.standardImage)('Image', {
      hidden: _ref => {
        var parent = _ref.parent;
        return (parent === null || parent === void 0 ? void 0 : parent.mediaType) != 'image' || (parent === null || parent === void 0 ? void 0 : parent.mediaType) == '';
      }
    }), {
      title: 'Video file',
      name: 'video',
      type: 'mux.video',
      description: 'We recommend you crop and compress your video here before uploading it: https://www.videosmaller.com/.',
      hidden: _ref2 => {
        var parent = _ref2.parent;
        return (parent === null || parent === void 0 ? void 0 : parent.mediaType) != 'video' || (parent === null || parent === void 0 ? void 0 : parent.mediaType) == '';
      }
    }, {
      title: 'Mobile Video (Optional)',
      name: 'mobileVideo',
      type: 'mux.video',
      description: 'For screens smaller than 700px. We recommend you crop and compress your video here before uploading it: https://www.videosmaller.com/.',
      hidden: _ref3 => {
        var parent = _ref3.parent;
        return (parent === null || parent === void 0 ? void 0 : parent.mediaType) != 'video' || (parent === null || parent === void 0 ? void 0 : parent.mediaType) == '';
      }
    }, {
      title: 'Embed Video',
      name: 'embedUrl',
      type: 'url',
      description: 'Please paste in your video url here.',
      hidden: _ref4 => {
        var parent = _ref4.parent;
        return (parent === null || parent === void 0 ? void 0 : parent.mediaType) != 'embed' || (parent === null || parent === void 0 ? void 0 : parent.mediaType) == '';
      }
    }, {
      title: 'Lottie JSON',
      name: 'lottieJson',
      type: 'text',
      description: 'Please paste in your Lottie animation data here, in JSON format. Please contact Flocc if you would like to use this setting.',
      hidden: _ref5 => {
        var parent = _ref5.parent;
        return (parent === null || parent === void 0 ? void 0 : parent.mediaType) != 'lottie' || (parent === null || parent === void 0 ? void 0 : parent.mediaType) == '';
      }
    }, {
      title: 'Image Slideshow',
      name: 'slideshow',
      type: 'array',
      of: [(0, _index.standardImage)()],
      options: {
        layout: 'grid'
      },
      hidden: _ref6 => {
        var parent = _ref6.parent;
        return (parent === null || parent === void 0 ? void 0 : parent.mediaType) != 'slideshow' || (parent === null || parent === void 0 ? void 0 : parent.mediaType) == '';
      },
      preview: {
        select: {
          image: 'image'
        },

        prepare(selection) {
          var image = selection.image;
          var icon = _bs.BsFillImageFill;
          return {
            title: 'Image',
            media: image || icon
          };
        }

      }
    }],
    validation: required ? Rule => Rule.required('Please select an media item.') : null
  };
};

exports.media = media;
//# sourceMappingURL=media.js.map