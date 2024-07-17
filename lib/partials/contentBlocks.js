"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contentBlocks = void 0;

var _bi = require("react-icons/bi");

var _bs = require("react-icons/bs");

var _index = require("./index");

var _accordion = require("../blocks/accordion");

var _paragraph = require("../blocks/paragraph");

var _map = require("../blocks/map");

var _table = require("../blocks/table");

var _textAndImage = require("../blocks/textAndImage");

var _kata = _interopRequireDefault(require("config:@weflocc/kata"));

var _go = require("react-icons/go");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var camelCase = require('lodash.camelcase');

var buttons = {
  name: 'buttons',
  type: 'object',
  fields: [(0, _index.links)()],
  preview: {
    select: {
      links: 'links'
    },

    prepare(selection) {
      var links = selection.links;
      var subTitle = '';

      if (links) {
        links.forEach(elem => {
          if (subTitle.length > 0) {
            subTitle += ', ';
          }

          subTitle += elem.linkText;
        });
      }

      return {
        title: 'Buttons',
        subtitle: subTitle,
        media: _bi.BiLink
      };
    }

  }
};
var richText = {
  name: 'richText',
  title: 'Rich Text',
  type: 'object',
  fields: [{
    title: 'Text Body',
    name: 'textBody',
    type: 'array',
    of: [{
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
        }]
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
    }]
  }],
  preview: {
    select: {
      blocks: 'textBody'
    },

    prepare(value) {
      var block = (value.blocks || []).find(block => block._type === 'block');
      return {
        title: block ? block.children.filter(child => child._type === 'span').map(span => span.text).join('') : 'No title',
        media: _bi.BiListPlus
      };
    }

  }
};

var contentBlocks = function contentBlocks() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Content Blocks';
  var includes = arguments.length > 1 ? arguments[1] : undefined;
  var customEditor = [richText, buttons, (0, _index.media)()];

  if (includes) {
    if (includes.feature01 || includes.textAndImage) customEditor.push(_textAndImage.textAndImage);
    if (includes.accordion || includes.dropdown) customEditor.push(_accordion.accordion);
    if (includes.tableField || includes.table) customEditor.push(_table.table);
    if (includes.map) customEditor.push(_map.map);
    if (includes.testimonials || includes.quotes) customEditor.push({
      name: 'testimonial04',
      title: 'Testimonials',
      type: 'testimonial04'
    });

    if (includes.features) {
      customEditor.push({
        name: 'feature05',
        title: 'Features',
        type: 'feature05'
      });
    }

    if (includes.cta07 || includes.logos) {
      customEditor.push({
        type: 'logos'
      });
    }

    if (includes.standoutText) customEditor.push({
      name: 'standoutText',
      type: 'object',
      fields: [{
        type: 'text',
        name: 'text',
        title: 'Standout text'
      }, {
        name: 'cite',
        title: 'Cite',
        type: 'string',
        instructions: 'Underneath the standout text'
      }],
      preview: {
        select: {
          text: 'text',
          cite: 'cite'
        },

        prepare(selection) {
          var text = selection.text,
              cite = selection.cite;
          return {
            title: text,
            subtitle: cite,
            media: _bs.BsCardText
          };
        }

      }
    });
  }

  return {
    title: name,
    name: camelCase(name),
    type: 'array',
    of: customEditor
  };
};

exports.contentBlocks = contentBlocks;
//# sourceMappingURL=contentBlocks.js.map