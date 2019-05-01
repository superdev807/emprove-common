'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BrowseCatalogLinks = _interopRequireDefault(require("../BrowseCatalogLinks"));

var _CompanyLinks = _interopRequireDefault(require("../CompanyLinks"));

var _FooterCopyrightAndSocial = _interopRequireDefault(require("../FooterCopyrightAndSocial"));

var _FooterServiceArea = _interopRequireDefault(require("../FooterServiceArea"));

var _HowToUse = _interopRequireDefault(require("../HowToUse"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ConsumerFooter = function ConsumerFooter(props) {
  return _react["default"].createElement("footer", {
    className: (0, _classnames["default"])(props.className)
  }, _react["default"].createElement("section", {
    className: "consumer-footer-index"
  }, _react["default"].createElement("div", {
    className: "consumer-footer-index__grouped-sections consumer-footer-index__grouped-sections--first"
  }, _react["default"].createElement("div", {
    className: "consumer-footer-index__section"
  }, _react["default"].createElement("div", {
    className: "consumer-footer-index__section-name"
  }, "Company"), _react["default"].createElement(_CompanyLinks["default"], null)), _react["default"].createElement("div", {
    className: "consumer-footer-index__section"
  }, _react["default"].createElement("div", {
    className: "consumer-footer-index__section-name"
  }, "Browse Catalog"), _react["default"].createElement(_BrowseCatalogLinks["default"], null))), _react["default"].createElement("div", {
    className: "consumer-footer-index__grouped-sections consumer-footer-index__grouped-sections--second"
  }, _react["default"].createElement("div", {
    className: "consumer-footer-index__section consumer-footer-index__section--no-right-margin"
  }, _react["default"].createElement("div", {
    className: "consumer-footer-index__section-name"
  }, "How to Use Emprove"), _react["default"].createElement(_HowToUse["default"], null))), _react["default"].createElement("div", {
    className: "consumer-footer-index__grouped-sections consumer-footer-index__grouped-sections--smaller"
  }, _react["default"].createElement(_FooterServiceArea["default"], null))), _react["default"].createElement(_FooterCopyrightAndSocial["default"], {
    topContent: props.copyrightTopContent,
    showSocial: false
  }));
};

ConsumerFooter.propTypes = {
  className: _propTypes["default"].string,
  copyrightTopContent: _propTypes["default"].node
};
var _default = ConsumerFooter;
exports["default"] = _default;