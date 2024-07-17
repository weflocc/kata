"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.links = exports.linkText = exports.linkStyle = exports.basicSingleLinkFn = exports.basicSingleLink = void 0;

var _kata = _interopRequireDefault(require("config:@weflocc/kata"));

var _bi = require("react-icons/bi");

var _go = require("react-icons/go");

var _bs = require("react-icons/bs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var camelCase = require('lodash.camelcase');

var linkText = {
  type: 'string',
  name: 'linkText',
  title: 'Link text',
  validation: Rule => Rule.required()
};
exports.linkText = linkText;
var linkStyle = {
  title: 'Link style',
  name: 'linkStyle',
  type: 'string',
  description: 'Please select a button style. If you are unsure, select Primary CTA',
  validation: Rule => Rule.required(),
  initialValue: 'btn-primary',
  options: {
    list: [{
      title: 'Primary CTA',
      value: 'btn-primary'
    }, {
      title: 'Secondary CTA',
      value: 'btn-secondary'
    }, {
      title: 'Tertiary CTA',
      value: 'btn-tertiary'
    }]
  }
};
exports.linkStyle = linkStyle;
var singleLink = {
  title: 'Link',
  name: 'singleLink',
  type: 'object',
  fields: [{
    type: 'string',
    name: 'linkType',
    title: 'Type of link',
    validation: Rule => Rule.required(),
    // initialValue: config.buttonTypes[0].value,
    options: {
      list: _kata.default.buttonTypes
    }
  }, linkText, {
    type: 'url',
    name: 'url',
    title: 'URL',
    validation: Rule => Rule.uri({
      scheme: ['http', 'https', 'mailto', 'tel', 'sms', 'www']
    }),
    hidden: _ref => {
      var parent = _ref.parent;
      return (parent === null || parent === void 0 ? void 0 : parent.linkType) != 'external';
    }
  }, {
    type: 'file',
    name: 'file',
    title: 'File',
    hidden: _ref2 => {
      var parent = _ref2.parent;
      return (parent === null || parent === void 0 ? void 0 : parent.linkType) != 'file';
    }
  }, {
    type: 'reference',
    name: 'internalLink',
    to: _kata.default.allTypes,
    options: {// disableNew: true, // do we want people to be able to create new pages here?
    },
    hidden: _ref3 => {
      var parent = _ref3.parent;
      return (parent === null || parent === void 0 ? void 0 : parent.linkType) != 'internal';
    }
  }, {
    name: 'anchor',
    type: 'string',
    title: 'Anchor link or Query string',
    hidden: _ref4 => {
      var parent = _ref4.parent;
      return (parent === null || parent === void 0 ? void 0 : parent.linkType) != 'internal';
    }
  }, {
    type: 'string',
    name: 'query',
    title: 'Query',
    description: 'For developer use only. If you edit this, your lightbox will break.',
    hidden: _ref5 => {
      var parent = _ref5.parent;
      return (parent === null || parent === void 0 ? void 0 : parent.linkType) != 'lightbox';
    }
  }, linkStyle],
  preview: {
    select: {
      title: 'linkText',
      type: 'linkType'
    },

    prepare(selection) {
      var title = selection.title,
          type = selection.type;
      var icon = _bi.BiLink;

      if (type == 'external') {
        icon = _bi.BiLinkExternal;
      } else if (type == 'file') {
        icon = _go.GoFileSymlinkFile;
      } else if (type == 'lightbox') {
        icon = _bs.BsFilePost;
      }

      return {
        title: title,
        media: icon
      };
    }

  }
};
var basicSingleLink = {
  title: 'Link',
  name: 'singleLink',
  type: 'object',
  fields: [{
    type: 'string',
    name: 'linkType',
    title: 'Type of link',
    validation: Rule => Rule.required(),
    // initialValue: config.buttonTypes[0].value,
    options: {
      list: _kata.default.buttonTypes
    }
  }, {
    type: 'url',
    name: 'url',
    title: 'URL',
    validation: Rule => Rule.uri({
      scheme: ['http', 'https', 'mailto', 'tel', 'sms', 'www']
    }),
    hidden: _ref6 => {
      var parent = _ref6.parent;
      return (parent === null || parent === void 0 ? void 0 : parent.linkType) != 'external';
    }
  }, {
    type: 'file',
    name: 'file',
    title: 'File',
    hidden: _ref7 => {
      var parent = _ref7.parent;
      return (parent === null || parent === void 0 ? void 0 : parent.linkType) != 'file';
    }
  }, {
    type: 'reference',
    name: 'internalLink',
    to: _kata.default.allTypes,
    options: {// disableNew: true, // do we want people to be able to create new pages here?
    },
    hidden: _ref8 => {
      var parent = _ref8.parent;
      return (parent === null || parent === void 0 ? void 0 : parent.linkType) != 'internal';
    }
  }, {
    name: 'anchor',
    type: 'string',
    title: 'Anchor link or Query string',
    hidden: _ref9 => {
      var parent = _ref9.parent;
      return (parent === null || parent === void 0 ? void 0 : parent.linkType) != 'internal';
    }
  }, {
    type: 'string',
    name: 'query',
    title: 'Query',
    description: 'For developer use only. If you edit this, your lightbox will break.',
    hidden: _ref10 => {
      var parent = _ref10.parent;
      return (parent === null || parent === void 0 ? void 0 : parent.linkType) != 'lightbox';
    }
  }],
  preview: {
    select: {
      title: 'linkText',
      type: 'linkType'
    },

    prepare(selection) {
      var title = selection.title,
          type = selection.type;
      var icon = _bi.BiLink;

      if (type == 'external') {
        icon = _bi.BiLinkExternal;
      } else if (type == 'file') {
        icon = _go.GoFileSymlinkFile;
      } else if (type == 'lightbox') {
        icon = _bs.BsFilePost;
      }

      return {
        title: title,
        media: icon
      };
    }

  }
};
exports.basicSingleLink = basicSingleLink;

var basicSingleLinkFn = function basicSingleLinkFn() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'singleLink';
  return {
    name: camelCase(name),
    title: name,
    type: 'object',
    fields: [{
      type: 'string',
      name: 'linkType',
      title: 'Type of link',
      validation: Rule => Rule.required(),
      // initialValue: config.buttonTypes[0].value,
      options: {
        list: _kata.default.buttonTypes
      }
    }, {
      type: 'url',
      name: 'url',
      title: 'URL',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel', 'sms', 'www']
      }),
      hidden: _ref11 => {
        var parent = _ref11.parent;
        return (parent === null || parent === void 0 ? void 0 : parent.linkType) != 'external';
      }
    }, {
      type: 'file',
      name: 'file',
      title: 'File',
      hidden: _ref12 => {
        var parent = _ref12.parent;
        return (parent === null || parent === void 0 ? void 0 : parent.linkType) != 'file';
      }
    }, {
      type: 'reference',
      name: 'internalLink',
      to: _kata.default.allTypes,
      options: {// disableNew: true, // do we want people to be able to create new pages here?
      },
      hidden: _ref13 => {
        var parent = _ref13.parent;
        return (parent === null || parent === void 0 ? void 0 : parent.linkType) != 'internal';
      }
    }, {
      name: 'anchor',
      type: 'string',
      title: 'Anchor link or Query string',
      hidden: _ref14 => {
        var parent = _ref14.parent;
        return (parent === null || parent === void 0 ? void 0 : parent.linkType) != 'internal';
      }
    }, {
      type: 'string',
      name: 'query',
      title: 'Query',
      description: 'For developer use only. If you edit this, your lightbox will break.',
      hidden: _ref15 => {
        var parent = _ref15.parent;
        return (parent === null || parent === void 0 ? void 0 : parent.linkType) != 'lightbox';
      }
    }],
    preview: {
      select: {
        title: 'linkText',
        type: 'linkType'
      },

      prepare(selection) {
        var title = selection.title,
            type = selection.type;
        var icon = _bi.BiLink;

        if (type == 'external') {
          icon = _bi.BiLinkExternal;
        } else if (type == 'file') {
          icon = _go.GoFileSymlinkFile;
        } else if (type == 'lightbox') {
          icon = _bs.BsFilePost;
        }

        return {
          title: title,
          media: icon
        };
      }

    }
  };
};

exports.basicSingleLinkFn = basicSingleLinkFn;

var links = function links() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Links';
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _objectSpread(_objectSpread({
    name: camelCase(name),
    title: name,
    type: 'array',
    of: [singleLink]
  }, settings), {}, {
    validation: max ? Rule => Rule.max(max) : ''
  });
};

exports.links = links;
//# sourceMappingURL=links.js.map