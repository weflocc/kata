"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.feedSelector2 = exports.feedSelector = void 0;

var _index = require("part:@weflocc/kata/partials/index");

var feedSelector = _ref => {
  var field = _ref.field,
      title = _ref.title,
      selectedTitle = _ref.selectedTitle,
      articleType = _ref.articleType,
      categoryTitle = _ref.categoryTitle,
      categoryType = _ref.categoryType,
      description = _ref.description,
      sliceTitle = _ref.sliceTitle,
      noShowAll = _ref.noShowAll,
      filter = _ref.filter,
      filterParams = _ref.filterParams,
      hidden = _ref.hidden,
      showLinks = _ref.showLinks;
  // Defaults
  selectedTitle = selectedTitle || 'Choose manually';
  categoryTitle = categoryTitle || 'Or, Select a category to show automatically';
  description = description || 'You can manually select one or more items, or else choose a category to display.';
  sliceTitle = sliceTitle || false;
  noShowAll = noShowAll || false;
  filter = filter || false;
  filterParams = filterParams || false;
  hidden = hidden || false;
  showLinks = showLinks || false;
  var options = {};

  if (filter) {
    options.filter = filter;
  }

  if (filterParams) {
    options.filterParams = filterParams;
  }

  var selected = {
    name: 'selected',
    type: 'array',
    title: selectedTitle,
    of: [{
      type: 'reference',
      to: [{
        type: articleType
      }],
      options: options
    }]
  };
  var categories = {
    name: 'categories',
    type: 'array',
    title: categoryTitle,
    of: [{
      type: 'reference',
      to: [{
        type: categoryType
      }]
    }]
  }; // add this on the page vue file, so clients can't control
  // const max = {
  //   name: 'max',
  //   title: 'Maximum number of articles to display',
  //   type: 'number',
  //   validation: Rule => Rule.integer().positive().min(1)
  // }

  var show = {
    name: 'show',
    title: "Display all ".concat(articleType, " articles?"),
    type: 'boolean'
  };
  var fields = [];

  if (sliceTitle) {
    var _title = {
      name: 'title',
      title: 'Title',
      type: 'string'
    };
    fields.push(_title);
  }

  if (!noShowAll) {
    fields.push(show);
  }

  if (selected) {
    if (!noShowAll) {
      // hide if display all is selected
      selected.hidden = _ref2 => {
        var parent = _ref2.parent;
        return parent === null || parent === void 0 ? void 0 : parent.show;
      };
    }

    fields.push(selected);
  }

  if (categoryType) {
    if (!noShowAll) {
      // hide if display all is selected
      categories.hidden = _ref3 => {
        var parent = _ref3.parent;
        return parent === null || parent === void 0 ? void 0 : parent.show;
      };
    }

    fields.push(categories);
  }

  if (showLinks) {
    fields.push((0, _index.links)());
  }

  return {
    name: field,
    title: title || null,
    type: 'object',
    description: description,
    fields: fields,
    options: _index.defaultOptions,
    hidden: hidden
  };
};

exports.feedSelector = feedSelector;

var feedSelector2 = _ref4 => {
  var name = _ref4.name,
      articleTypes = _ref4.articleTypes,
      _ref4$title = _ref4.title,
      title = _ref4$title === void 0 ? false : _ref4$title,
      _ref4$manualTitle = _ref4.manualTitle,
      manualTitle = _ref4$manualTitle === void 0 ? 'Manual selection' : _ref4$manualTitle,
      _ref4$categoryTitle = _ref4.categoryTitle,
      categoryTitle = _ref4$categoryTitle === void 0 ? 'All pages/articles with this category' : _ref4$categoryTitle,
      _ref4$categoryType = _ref4.categoryType,
      categoryType = _ref4$categoryType === void 0 ? false : _ref4$categoryType,
      _ref4$description = _ref4.description,
      description = _ref4$description === void 0 ? '' : _ref4$description,
      _ref4$noShowAll = _ref4.noShowAll,
      noShowAll = _ref4$noShowAll === void 0 ? false : _ref4$noShowAll,
      _ref4$filter = _ref4.filter,
      filter = _ref4$filter === void 0 ? false : _ref4$filter,
      _ref4$filterParams = _ref4.filterParams,
      filterParams = _ref4$filterParams === void 0 ? false : _ref4$filterParams,
      _ref4$hidden = _ref4.hidden,
      hidden = _ref4$hidden === void 0 ? false : _ref4$hidden,
      _ref4$heading = _ref4.heading,
      heading = _ref4$heading === void 0 ? false : _ref4$heading,
      _ref4$text = _ref4.text,
      text = _ref4$text === void 0 ? false : _ref4$text,
      _ref4$showLinks = _ref4.showLinks,
      showLinks = _ref4$showLinks === void 0 ? false : _ref4$showLinks;
  var options = {};

  if (filter) {
    options.filter = filter;
  }

  if (filterParams) {
    options.filterParams = filterParams;
  }

  var types = [];

  if (!noShowAll) {
    types.push({
      title: 'Automatic',
      value: 'all'
    });
  }

  if (categoryType) {
    types.push({
      title: 'By category',
      value: 'category'
    });
  }

  types.push({
    title: 'Manual',
    value: 'manual'
  });
  var type = {
    name: 'type',
    type: 'string',
    description: 'Select the way to add to this list. If unselected, the list will remain empty',
    options: {
      list: types
    }
  };
  var to = [];

  if (articleTypes) {
    articleTypes.forEach(element => {
      to.push({
        type: element
      });
    });
  }

  var manual = {
    name: 'selected',
    type: 'array',
    title: manualTitle,
    hidden: _ref5 => {
      var parent = _ref5.parent;
      return parent.type != 'manual';
    },
    of: [{
      type: 'reference',
      to: to,
      options: options
    }]
  };
  var categories = {
    name: 'categories',
    type: 'array',
    description: 'This will show everything assigned to this category',
    title: categoryTitle,
    hidden: _ref6 => {
      var parent = _ref6.parent;
      return parent.type != 'category';
    },
    of: [{
      type: 'reference',
      to: [{
        type: categoryType
      }]
    }]
  };
  var fields = [];

  if (heading) {
    var _title2 = {
      name: 'title',
      title: 'Title',
      type: 'string'
    };
    fields.push(_title2);
  }

  if (text) {
    var _text = {
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 3
    };
    fields.push(_text);
  }

  fields.push(type);
  fields.push(manual);

  if (categoryType) {
    fields.push(categories);
  }

  if (showLinks) {
    fields.push((0, _index.links)());
  }

  return {
    name: name,
    title: title || null,
    type: 'object',
    description: description,
    fields: fields,
    options: _index.defaultOptions,
    hidden: hidden
  };
};

exports.feedSelector2 = feedSelector2;
//# sourceMappingURL=feedSelector.js.map