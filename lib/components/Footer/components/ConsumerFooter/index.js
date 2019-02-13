'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BrowseCatalogLinks = _interopRequireDefault(require("../BrowseCatalogLinks"));

var _CompanyLinks = _interopRequireDefault(require("../CompanyLinks"));

var _FooterCopyrightAndSocial = _interopRequireDefault(require("../FooterCopyrightAndSocial"));

var _HowToUse = _interopRequireDefault(require("../HowToUse"));

var _ServiceAreas = _interopRequireDefault(require("../ServiceAreas"));

var areas = _interopRequireWildcard(require("../../../../data/serviceAreas"));

require("./styles.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConsumerFooter = function ConsumerFooter(props) {
  return _react.default.createElement("footer", {
    className: (0, _classnames.default)(props.className)
  }, _react.default.createElement("section", {
    className: "consumer-footer-index"
  }, _react.default.createElement("div", {
    className: "consumer-footer-index__grouped-sections"
  }, _react.default.createElement("div", {
    className: "consumer-footer-index__section"
  }, _react.default.createElement("div", {
    className: "consumer-footer-index__section-name"
  }, "Company"), _react.default.createElement(_CompanyLinks.default, null)), _react.default.createElement("div", {
    className: "consumer-footer-index__section"
  }, _react.default.createElement("div", {
    className: "consumer-footer-index__section-name"
  }, "Browse Catalog"), _react.default.createElement(_BrowseCatalogLinks.default, null))), _react.default.createElement("div", {
    className: "consumer-footer-index__grouped-sections"
  }, _react.default.createElement("div", {
    className: "consumer-footer-index__section"
  }, _react.default.createElement("div", {
    className: "consumer-footer-index__section-item"
  }, _react.default.createElement("div", {
    className: "consumer-footer-index__section-name"
  }, "Service Areas"), _react.default.createElement(_ServiceAreas.default, {
    areas: areas.serviceAreas
  })), _react.default.createElement("div", {
    className: "consumer-footer-index__section-item"
  }, _react.default.createElement("div", {
    className: "consumer-footer-index__section-name"
  }, "Coming Soon"), _react.default.createElement(_ServiceAreas.default, {
    areas: areas.comingSoonAreas
  }))), _react.default.createElement("div", {
    className: "consumer-footer-index__section consumer-footer-index__section--no-right-margin"
  }, _react.default.createElement("div", {
    className: "consumer-footer-index__section-name"
  }, "How to Use Emprove"), _react.default.createElement(_HowToUse.default, null)))), _react.default.createElement(_FooterCopyrightAndSocial.default, {
    topContent: props.copyrightTopContent
  }));
};

ConsumerFooter.propTypes = {
  className: _propTypes.default.string,
  copyrightTopContent: _propTypes.default.node
};
var _default = ConsumerFooter;
exports.default = _default;