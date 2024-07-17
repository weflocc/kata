"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.liteTextEditor = exports.fullTextEditor = exports.basicTextEditor = void 0;

var _kata = _interopRequireDefault(require("config:@weflocc/kata"));

var _bi = require("react-icons/bi");

var _go = require("react-icons/go");

var _standoutText = require("../components/standoutText");

var _ai = require("react-icons/ai");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var camelCase = require('lodash.camelcase');

var basicTextEditor = function basicTextEditor() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Text Body';
  var settings = arguments.length > 1 ? arguments[1] : undefined;
  var includes = arguments.length > 2 ? arguments[2] : undefined;
  var customEditor = [];

  if (includes && includes.buttons) {
    customEditor.push({
      type: 'buttons'
    });
  }

  return _objectSpread(_objectSpread({
    title: name,
    name: camelCase(name),
    type: 'array'
  }, settings), {}, {
    of: [{
      type: 'block',
      lists: [{
        title: 'Bullet',
        value: 'bullet'
      }, {
        title: 'Numbered',
        value: 'number'
      }],
      styles: [],
      marks: {
        decorators: [{
          title: 'Strong',
          value: 'strong'
        }, {
          title: 'Emphasis',
          value: 'em'
        }, {
          title: 'Underline',
          value: 'underline'
        }],
        annotations: [{
          name: 'link',
          type: 'object',
          title: 'External link',
          blockEditor: {
            icon: _bi.BiLinkExternal
          },
          fields: [{
            name: 'href',
            type: 'url',
            title: 'URL',
            validation: Rule => Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel', 'sms']
            })
          }, {
            title: 'Open in new tab',
            name: 'blank',
            type: 'boolean',
            layout: 'checkbox'
          }]
        }, {
          name: 'internalLink',
          type: 'object',
          title: 'Internal link',
          blockEditor: {
            icon: _bi.BiLink
          },
          fields: [{
            name: 'reference',
            type: 'reference',
            title: 'Reference',
            to: _kata.default.allTypes,
            options: {
              disableNew: true // we don't want people to be able to create new pages here!

            }
          }]
        }]
      }
    }, ...customEditor]
  });
};

exports.basicTextEditor = basicTextEditor;

var fullTextEditor = function fullTextEditor() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Text Body';
  var includes = arguments.length > 1 ? arguments[1] : undefined;
  var settings = arguments.length > 2 ? arguments[2] : undefined;
  var annotations = [{
    name: 'link',
    type: 'object',
    title: 'External link',
    blockEditor: {
      icon: _bi.BiLinkExternal
    },
    fields: [{
      name: 'href',
      type: 'url',
      title: 'URL',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel', 'sms']
      })
    }, {
      title: 'Open in new tab',
      name: 'blank',
      type: 'boolean',
      layout: 'checkbox',
      initialValue: true
    }]
  }, {
    name: 'internalLink',
    type: 'object',
    title: 'Internal link',
    blockEditor: {
      icon: _bi.BiLink
    },
    fields: [{
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: _kata.default.allTypes
    }]
  }, {
    name: 'file',
    type: 'object',
    title: 'File',
    blockEditor: {
      icon: _go.GoFileSymlinkFile
    },
    fields: [{
      name: 'file',
      type: 'file',
      title: 'File',
      to: _kata.default.allTypes
    }]
  }];

  if (includes && includes.idAndAnchor) {
    annotations.push({
      name: 'id',
      type: 'object',
      title: 'ID',
      blockEditor: {
        icon: _bi.BiKey
      },
      fields: [{
        type: 'string',
        name: 'id',
        title: 'Id',
        validation: Rule => Rule.custom(name => {
          if (typeof name === 'undefined') {
            return true; // Allow undefined values
          } // This would crash if we didn't check
          // for undefined values first


          return name.includes(' ') ? 'No spaces allowed, please use hyphens (-) instead.' : true;
        }).required(),
        description: 'Set an id on a section of a page, with no spaces. An anchor link can scroll to this id.'
      }]
    });
    annotations.push({
      name: 'anchor',
      type: 'object',
      title: 'Anchor link',
      blockEditor: {
        icon: _bi.BiAnchor
      },
      fields: [{
        type: 'string',
        name: 'anchor',
        title: 'Anchor',
        description: 'Without the #. An anchor is the id of a section on this page.'
      }]
    });
  }

  var customEditor = [{
    type: 'block',
    lists: [{
      title: 'Bullet',
      value: 'bullet'
    }, {
      title: 'Numbered',
      value: 'number'
    }],
    marks: {
      decorators: [{
        title: 'Strong',
        value: 'strong'
      }, {
        title: 'Emphasis',
        value: 'em'
      }, {
        title: 'Underline',
        value: 'underline'
      }],
      annotations: annotations
    },
    styles: [{
      title: 'Normal',
      value: 'normal'
    }, {
      title: 'Heading',
      value: 'h2'
    }, {
      title: 'Subheading',
      value: 'h3'
    }]
  }, {
    type: 'mediaPreview'
  }, {
    type: 'buttons'
  }];

  if (includes) {
    if (includes.feature01 || includes.textAndImage) {
      customEditor.push({
        type: 'textAndImage'
      });
    }

    if (includes.cta07 || includes.logos) {
      customEditor.push({
        type: 'logos'
      });
    }

    if (includes.accordion || includes.dropdown) {
      customEditor.push({
        type: 'accordion'
      });
    }

    if (includes.tableField || includes.table) {
      customEditor.push({
        type: 'tableField'
      });
    }

    if (includes.testimonials || includes.quotes) {
      customEditor.push({
        type: 'testimonials'
      });
    }

    if (includes.twitter) {
      customEditor.push({
        type: 'object',
        name: 'twitterEmbed',
        fields: [{
          type: 'string',
          name: 'tweetId',
          title: 'Tweet ID',
          validation: Rule => Rule.required(),
          description: 'To find your tweet ID, click on the three dots and select embed tweet. This will open a new tab. Scroll up the new page, and at the top there will be a heading saying "What would you like to embed?" with a url. Your tweet ID is the number at the end of the URL.'
        }],
        preview: {
          select: {
            tweetId: 'tweetId'
          },

          prepare(_ref) {
            var tweetId = _ref.tweetId;
            return {
              title: 'Tweet embed',
              subtitle: tweetId,
              media: _ai.AiFillTwitterCircle
            };
          }

        }
      });
    }

    if (includes.standoutText) {
      customEditor.push(_standoutText.standoutText);
    }
  }

  return _objectSpread(_objectSpread({
    title: name,
    name: camelCase(name),
    type: 'array'
  }, settings), {}, {
    of: customEditor
  });
};

exports.fullTextEditor = fullTextEditor;

var liteTextEditor = function liteTextEditor() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Text Body';
  var settings = arguments.length > 1 ? arguments[1] : undefined;
  return _objectSpread(_objectSpread({
    title: name,
    name: camelCase(name),
    type: 'array'
  }, settings), {}, {
    of: [{
      type: 'block',
      lists: [],
      styles: [],
      marks: {
        decorators: [{
          title: 'Strong',
          value: 'strong'
        }, {
          title: 'Emphasis',
          value: 'em'
        }, {
          title: 'Underline',
          value: 'underline'
        }],
        annotations: []
      }
    }]
  });
};

exports.liteTextEditor = liteTextEditor;
//# sourceMappingURL=textEditor.js.map