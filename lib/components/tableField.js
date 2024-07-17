"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("@sanity/ui");

var _InfoTooltip = _interopRequireDefault(require("./InfoTooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableRow = props => {
  var items = props.items,
      cols = props.cols;
  var cells = [];

  for (var i = 0; i < cols; i++) {
    if (items[i]) {
      cells.push( /*#__PURE__*/_react.default.createElement(_ui.Card, {
        padding: 3,
        shadow: 1
      }, /*#__PURE__*/_react.default.createElement(_ui.Text, {
        weight: i === 0 ? 'semibold' : 'regular'
      }, items[i])));
    } else {
      cells.push( /*#__PURE__*/_react.default.createElement(_ui.Card, {
        padding: 3,
        shadow: 1
      }));
    }
  }

  return cells;
};

var TablePreview = _ref => {
  var value = _ref.value;
  var table = value.table;

  if (table && table.rows.length) {
    return /*#__PURE__*/_react.default.createElement(_InfoTooltip.default, null, /*#__PURE__*/_react.default.createElement(_ui.Container, {
      padding: 3
    }, /*#__PURE__*/_react.default.createElement(_ui.Grid, {
      columns: table.rows[0].cells.length
    }, table.rows.map(element => {
      return /*#__PURE__*/_react.default.createElement(TableRow, {
        cols: table.rows[0].cells.length,
        items: element.cells,
        key: element._key
      });
    }))));
  }

  return /*#__PURE__*/_react.default.createElement(_InfoTooltip.default, null, /*#__PURE__*/_react.default.createElement(_ui.Container, {
    padding: 3
  }, /*#__PURE__*/_react.default.createElement("p", null, "Double click to add.")));
};

var _default = {
  title: 'Table',
  name: 'tableField',
  type: 'object',
  fields: [{
    name: 'table',
    type: 'table'
  }],
  preview: {
    select: {
      table: 'table'
    },
    component: TablePreview
  }
};
exports.default = _default;
//# sourceMappingURL=tableField.js.map