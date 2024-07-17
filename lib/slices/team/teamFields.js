"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thumbnails = exports.profiles = exports.people = void 0;

var _bi = require("react-icons/bi");

var _index = require("part:@weflocc/kata/partials/index");

var _shared = require("../shared");

var thumbnails = {
  name: 'list',
  title: 'Thumbnails',
  type: 'array',
  options: {
    collapsable: true
  },
  of: [{
    name: 'item',
    title: 'Item',
    type: 'object',
    fields: [(0, _index.standardImage)(), _shared.title, _shared.text, {
      name: 'linkText',
      type: 'string'
    }, _index.basicSingleLink],
    preview: {
      select: {
        heading: 'title',
        image: 'image'
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
exports.thumbnails = thumbnails;
var people = {
  name: 'list',
  title: 'People',
  type: 'array',
  options: {
    collapsable: true
  },
  of: [{
    name: 'item',
    title: 'Item',
    type: 'object',
    fields: [(0, _index.standardImage)(), {
      name: 'title',
      type: 'string',
      title: 'Name'
    }, {
      name: 'job',
      type: 'string'
    }, (0, _index.liteTextEditor)(), _index.basicSingleLink],
    preview: {
      select: {
        heading: 'title',
        image: 'image'
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
exports.people = people;
var profiles = {
  name: 'list',
  title: 'Profiles',
  type: 'array',
  options: {
    collapsable: true
  },
  of: [{
    name: 'profile',
    type: 'object',
    fields: [{
      name: 'name',
      type: 'string'
    }, {
      name: 'job',
      type: 'string'
    }, {
      name: 'bio',
      type: 'text',
      rows: 3
    }, (0, _index.standardImage)(), {
      name: 'socials',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [{
        title: 'Twitter',
        name: 'twitter',
        type: 'url'
      }, {
        title: 'Facebook',
        name: 'facebook',
        type: 'url'
      }, {
        title: 'Instagram',
        name: 'instagram',
        type: 'url'
      }, {
        title: 'Linked In',
        name: 'linkedIn',
        type: 'url'
      }, {
        title: 'Youtube',
        name: 'youtube',
        type: 'url'
      }, {
        title: 'Email',
        name: 'email',
        type: 'url',
        validation: Rule => Rule.uri({
          scheme: ['mailto']
        })
      }]
    }],
    preview: {
      select: {
        heading: 'name',
        image: 'image'
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
exports.profiles = profiles;
//# sourceMappingURL=teamFields.js.map