'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _FooterList = _interopRequireDefault(require("../FooterList"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/jsx-key */
// TODO: use values from metaData
var homeAreas = ['BY HOME AREA', _react["default"].createElement(_reactRouterDom.Link, {
  to: "/browse/any-guest-bathroom"
}, "Guest Bathroom"), _react["default"].createElement(_reactRouterDom.Link, {
  to: "/browse/any-master-bathroom"
}, "Master Bathroom"), _react["default"].createElement(_reactRouterDom.Link, {
  to: "/browse/any-powder-room"
}, "Powder Room"), _react["default"].createElement(_reactRouterDom.Link, {
  to: "/browse/any-guest-bedroom"
}, "Guest Bedroom"), _react["default"].createElement(_reactRouterDom.Link, {
  to: "/browse/any-master-bedroom"
}, "Master Bedroom"), _react["default"].createElement(_reactRouterDom.Link, {
  to: "/browse/any-kitchen"
}, "Kitchen"), _react["default"].createElement(_reactRouterDom.Link, {
  to: "/browse/any-general-living"
}, "General Living")]; // TODO: use values from metaData

var homeStyles = ['BY STYLE', _react["default"].createElement(_reactRouterDom.Link, {
  to: "/browse/contemporary-homes"
}, "Contemporary"), _react["default"].createElement(_reactRouterDom.Link, {
  to: "/browse/country-homes"
}, "Country"), _react["default"].createElement(_reactRouterDom.Link, {
  to: "/browse/craftsman-homes"
}, "Craftsman"), _react["default"].createElement(_reactRouterDom.Link, {
  to: "/browse/industrial-homes"
}, "Industrial"), _react["default"].createElement(_reactRouterDom.Link, {
  to: "/browse/modern-homes"
}, "Modern"), _react["default"].createElement(_reactRouterDom.Link, {
  to: "/browse/rustic-homes"
}, "Rustic"), _react["default"].createElement(_reactRouterDom.Link, {
  to: "/browse/traditional-homes"
}, "Traditional"), _react["default"].createElement(_reactRouterDom.Link, {
  to: "/browse/transitional-homes"
}, "Transitional")];
/* eslint-enable react/jsx-key */

var BrowseCatalogLinks = function BrowseCatalogLinks(props) {
  return _react["default"].createElement("div", {
    className: "browse-catalog-links"
  }, _react["default"].createElement(_FooterList["default"], {
    className: "browse-catalog-links__section",
    items: homeAreas
  }), _react["default"].createElement("div", {
    className: "browse-catalog-links__category-divider"
  }, "|"), _react["default"].createElement(_FooterList["default"], {
    className: "browse-catalog-links__section",
    items: homeStyles
  }));
};

var _default = BrowseCatalogLinks;
exports["default"] = _default;