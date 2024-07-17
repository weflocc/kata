"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paragraph = void 0;

var _kata = _interopRequireDefault(require("config:@weflocc/kata"));

var _bi = require("react-icons/bi");

var _go = require("react-icons/go");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paragraph = {
  title: 'Paragraph',
  name: 'paragraph',
  type: 'object',
  fields: [{
    title: 'Content',
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
        }, {
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
            description: "An anchor is the id of a section on this page. On a page builder, each block has the id 'block-1', 'block-2', etc"
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
      var title = block.children.filter(child => child._type === 'span').map(span => span.text).join('');
      return {
        title: title || 'Paragraph Text',
        media: _bi.BiParagraph
      };
    }

  }
};
exports.paragraph = paragraph;
//# sourceMappingURL=paragraph.js.map