'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _FooterList = require('../FooterList');

var _FooterList2 = _interopRequireDefault(_FooterList);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: use values from metaData
var homeAreas = ['BY HOME AREA', _react2.default.createElement(
  _reactRouterDom.Link,
  { to: 'browse/any-guest-bathroom' },
  'Guest Bathroom'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: 'browse/any-master-bathroom' },
  'Master Bathroom'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: 'browse/any-powder-room' },
  'Powder Room'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: 'browse/any-guest-bedroom' },
  'Guest Bedroom'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: 'browse/any-master-bedroom' },
  'Master Bedroom'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: 'browse/any-kitchen' },
  'Kitchen'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: 'browse/any-general-living' },
  'General Living'
)];

// TODO: use values from metaData
var homeStyles = ['BY STYLE', _react2.default.createElement(
  _reactRouterDom.Link,
  { to: 'browse/contemporary-homes' },
  'Contemporary'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: 'browse/country-homes' },
  'Country'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: 'browse/craftsman-homes' },
  'Craftsman'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: 'browse/industrial-homes' },
  'Industrial'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: 'browse/modern-homes' },
  'Modern'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: 'browse/rustic-homes' },
  'Rustic'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: 'browse/traditional-homes' },
  'Traditional'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: 'browse/transitional-homes' },
  'Transitional'
)];

var BrowseCatalogLinks = function BrowseCatalogLinks(props) {
  return _react2.default.createElement(
    'div',
    { className: 'browse-catalog-links' },
    _react2.default.createElement(_FooterList2.default, { className: 'browse-catalog-links__section', items: homeAreas }),
    _react2.default.createElement(
      'div',
      { className: 'browse-catalog-links__category-divider' },
      '|'
    ),
    _react2.default.createElement(_FooterList2.default, { className: 'browse-catalog-links__section', items: homeStyles })
  );
};

exports.default = BrowseCatalogLinks;