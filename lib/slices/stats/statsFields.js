"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statistics = void 0;

var _bi = require("react-icons/bi");

var statistics = {
  title: 'Statistics',
  name: 'list',
  type: 'array',
  of: [{
    type: 'object',
    name: 'listItem',
    fields: [{
      title: 'Statistic',
      name: 'stat',
      type: 'string'
    }, {
      title: 'Title',
      name: 'title',
      type: 'text',
      rows: 3
    }],
    preview: {
      select: {
        title: 'stat',
        subtitle: 'title'
      },

      prepare(selection) {
        var title = selection.title,
            subtitle = selection.subtitle;
        var showEllipsis = true;

        if (title.length < 50) {
          showEllipsis = false;
        }

        var shortenedSubtitle = subtitle.toString().slice(0, 50);
        return {
          title: title,
          subtitle: "".concat(shortenedSubtitle).concat(showEllipsis ? '...' : ''),
          media: _bi.BiListPlus
        };
      }

    }
  }]
};
exports.statistics = statistics;
//# sourceMappingURL=statsFields.js.map