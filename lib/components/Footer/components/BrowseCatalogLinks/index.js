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
  { to: '#' },
  'Guest Bathroom'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: '#' },
  'Master Bathroom'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: '#' },
  'Powder Room'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: '#' },
  'Guest Bedroom'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: '#' },
  'Master Bedroom'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: '#' },
  'Kitchen'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: '#' },
  'General Living'
)];

// TODO: use values from metaData
var homeStyles = ['BY STYLE', _react2.default.createElement(
  _reactRouterDom.Link,
  { to: '#' },
  'Contemporary'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: '#' },
  'Country'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: '#' },
  'Craftsman'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: '#' },
  'Industrial'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: '#' },
  'Modern'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: '#' },
  'Rustic'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: '#' },
  'Traditional'
), _react2.default.createElement(
  _reactRouterDom.Link,
  { to: '#' },
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