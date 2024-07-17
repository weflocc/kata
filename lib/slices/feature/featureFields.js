"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shortFeatures = exports.locations = exports.features = exports.featureTabs = exports.featureImageTabs = void 0;

var _index = require("part:@weflocc/kata/partials/index");

var _bi = require("react-icons/bi");

var _kata = _interopRequireDefault(require("config:@weflocc/kata"));

var _shared = require("../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var features = {
  title: 'Features',
  name: 'list',
  type: 'array',
  of: [{
    type: 'object',
    title: 'Feature',
    name: 'feature',
    fields: [{
      type: 'image',
      name: 'icon',
      title: 'Icon'
    }, _shared.title, (0, _index.liteTextEditor)(), _index.basicSingleLink],
    preview: {
      select: {
        heading: 'title',
        blocks: 'textBody',
        image: 'icon'
      },

      prepare(selection) {
        var heading = selection.heading,
            image = selection.image,
            blocks = selection.blocks;
        var block = (blocks || []).find(block => block._type === 'block');
        var subheading = block ? block.children.filter(child => child._type === 'span').map(span => span.text).join('') : 'No title';
        return {
          title: heading || subheading,
          media: image || _bi.BiListPlus
        };
      }

    }
  }]
};
exports.features = features;

var shortFeatures = vars => {
  // let title = vars.title ? vars.title : 'Icon'
  return {
    title: 'Features',
    name: 'list',
    type: 'array',
    of: [{
      type: 'object',
      title: 'Feature',
      name: 'feature',
      fields: [{
        type: 'image',
        name: 'image',
        title: 'Image or Icon'
      }, _shared.title, _index.basicSingleLink],
      preview: {
        select: {
          heading: 'title'
        },

        prepare(selection) {
          var heading = selection.heading;
          return {
            title: heading,
            media: _bi.BiListPlus
          };
        }

      }
    }]
  };
};

exports.shortFeatures = shortFeatures;
var featureImageTabs = {
  title: 'Tabs',
  name: 'list',
  type: 'array',
  of: [{
    type: 'object',
    title: 'Feature',
    name: 'feature',
    fields: [{
      type: 'string',
      name: 'tabName',
      title: 'Tab Name'
    }, (0, _index.media)(), _shared.title, (0, _index.basicTextEditor)(), _index.basicSingleLink],
    preview: {
      select: {
        heading: 'tabName'
      },

      prepare(selection) {
        var heading = selection.heading;
        return {
          title: heading,
          media: _bi.BiListPlus
        };
      }

    }
  }]
};
exports.featureImageTabs = featureImageTabs;
var featureTabs = {
  title: 'Tabs',
  name: 'list',
  type: 'array',
  of: [{
    type: 'object',
    title: 'Feature',
    name: 'feature',
    fields: [{
      type: 'string',
      name: 'tabName',
      title: 'Tab Name'
    }, {
      type: 'array',
      name: 'features',
      of: [{
        type: 'object',
        title: 'Item',
        name: 'item',
        fields: [_shared.title, (0, _index.basicTextEditor)()],
        preview: {
          select: {
            heading: 'title'
          },

          prepare(selection) {
            var heading = selection.heading;
            return {
              title: heading,
              media: _bi.BiListPlus
            };
          }

        }
      }]
    }, _index.basicSingleLink],
    preview: {
      select: {
        heading: 'tabName'
      },

      prepare(selection) {
        var heading = selection.heading;
        return {
          title: heading,
          media: _bi.BiListPlus
        };
      }

    }
  }]
};
exports.featureTabs = featureTabs;
var locations = {
  title: 'Locations',
  name: 'list',
  type: 'array',
  of: [{
    title: 'Location',
    name: 'location',
    type: 'object',
    fields: [_shared.title, {
      title: 'Location',
      name: 'location',
      type: 'geopoint'
    }],
    preview: {
      select: {
        heading: 'title'
      },

      prepare(selection) {
        var heading = selection.heading;
        return {
          title: heading,
          media: _bi.BiListPlus
        };
      }

    }
  }]
};
exports.locations = locations;
//# sourceMappingURL=featureFields.js.map