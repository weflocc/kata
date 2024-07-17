"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _getYoutubeId = _interopRequireDefault(require("get-youtube-id"));

var _reactYoutube = _interopRequireDefault(require("react-youtube"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Preview = _ref => {
  var value = _ref.value;
  var url = value.url;
  var id = (0, _getYoutubeId.default)(url);
  return /*#__PURE__*/_react.default.createElement(_reactYoutube.default, {
    videoId: id
  });
};

var _default = {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [{
    name: 'url',
    type: 'url',
    title: 'YouTube video URL'
  }],
  preview: {
    select: {
      url: 'url'
    },
    component: Preview
  }
};
exports.default = _default;
//# sourceMappingURL=youtube.js.map