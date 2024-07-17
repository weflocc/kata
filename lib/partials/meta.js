"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.twitterSharingImage = exports.title = exports.slug = exports.sharingImage = exports.schemaOrg = exports.metaTitle = exports.metaFields = exports.metaDescription = exports.hiddenTitle = exports.hiddenSlug = void 0;

var _wordCount = _interopRequireDefault(require("../components/wordCount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = {
  name: 'title',
  title: 'Title',
  type: 'string',
  validation: Rule => Rule.required('Please set a title.')
};
exports.title = title;
var hiddenTitle = {
  name: 'title',
  type: 'string',
  description: 'Only studio@flocc.co can see this',
  hidden: _ref => {
    var currentUser = _ref.currentUser;
    return currentUser.email != 'studio@flocc.co';
  }
};
exports.hiddenTitle = hiddenTitle;
var slug = {
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 96
  },
  validation: Rule => Rule.required('A slug is required before you can publish.')
};
exports.slug = slug;
var hiddenSlug = {
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 96
  },
  description: 'Only studio@flocc.co can see this',
  validation: Rule => Rule.required('A slug is required before you can publish.'),
  hidden: _ref2 => {
    var currentUser = _ref2.currentUser;
    return currentUser.email != 'studio@flocc.co';
  }
};
exports.hiddenSlug = hiddenSlug;
var schemaOrg = {
  name: 'schemaOrg',
  title: 'Schema.org JS',
  description: 'Leave out the opening and closing script tags, JSON only here',
  type: 'text',
  rows: 5
};
exports.schemaOrg = schemaOrg;
var sharingImage = {
  title: 'Social Sharing Image',
  name: 'socialImage',
  type: 'image',
  description: '1200px x 630px',
  options: {
    hotspot: true
  }
};
exports.sharingImage = sharingImage;
var twitterSharingImage = {
  title: 'Twitter Social Sharing Image',
  name: 'twitterSharingImage',
  type: 'image',
  description: '800px x 800px. If unset, the social sharing image will be used instead',
  options: {
    hotspot: true
  }
};
exports.twitterSharingImage = twitterSharingImage;
var metaTitle = {
  name: 'metaTitle',
  title: 'Global Meta Title',
  type: 'string'
};
exports.metaTitle = metaTitle;
var metaDescription = {
  name: 'metaDescription',
  title: 'Meta Description',
  type: 'text',
  rows: 3,
  description: 'Max 150 characters',
  inputComponent: _wordCount.default,
  validation: Rule => Rule.max(150).warning('Google will cut off the meta description at 150 characters')
};
exports.metaDescription = metaDescription;
var metaFields = {
  name: 'meta',
  title: 'SEO & Meta',
  options: {
    collapsed: true,
    collapsible: true
  },
  type: 'object',
  fields: [{
    type: 'string',
    name: 'metaTitle',
    title: 'Prepend Meta Title'
  }, metaDescription, sharingImage, twitterSharingImage, schemaOrg]
};
exports.metaFields = metaFields;
//# sourceMappingURL=meta.js.map