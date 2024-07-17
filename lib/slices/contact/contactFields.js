"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.websiteText = exports.website = exports.title = exports.thanks = exports.text = exports.telephone = exports.openingTimes = exports.location = exports.email = exports.address = void 0;
var title = {
  name: 'title',
  type: 'string'
};
exports.title = title;
var location = {
  title: 'Location',
  name: 'location',
  type: 'geopoint',
  validation: Rule => Rule.required('Please enter a location.')
};
exports.location = location;
var text = {
  title: 'Text',
  name: 'text',
  type: 'text',
  rows: 4
};
exports.text = text;
var address = {
  title: 'Address',
  name: 'address',
  type: 'text',
  rows: 4
};
exports.address = address;
var openingTimes = {
  title: 'Opening Times',
  name: 'openingTimes',
  type: 'text',
  rows: 4
};
exports.openingTimes = openingTimes;
var website = {
  name: 'website',
  type: 'url'
};
exports.website = website;
var websiteText = {
  name: 'websiteText',
  type: 'string',
  title: 'Website Text to show on the site'
};
exports.websiteText = websiteText;
var email = {
  name: 'email',
  type: 'string'
};
exports.email = email;
var telephone = {
  name: 'telephone',
  type: 'string'
};
exports.telephone = telephone;
var thanks = {
  name: 'thanks',
  type: 'string',
  title: 'Thanks text'
};
exports.thanks = thanks;
//# sourceMappingURL=contactFields.js.map