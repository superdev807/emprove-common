'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _CompanyLinks = _interopRequireDefault(require("../CompanyLinks"));

var _FooterCopyrightAndSocial = _interopRequireDefault(require("../FooterCopyrightAndSocial"));

var _GrowWithUs = _interopRequireDefault(require("../GrowWithUs"));

var _ServiceAreas = _interopRequireDefault(require("../ServiceAreas"));

var _WorkWithUs = _interopRequireDefault(require("../WorkWithUs"));

var areas = _interopRequireWildcard(require("../../../../data/serviceAreas"));

require("./styles.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractorFooter = function ContractorFooter(props) {
  return _react.default.createElement("footer", {
    className: (0, _classnames.default)(props.className)
  }, _react.default.createElement("section", {
    className: "contractor-footer-index"
  }, _react.default.createElement("div", {
    className: "contractor-footer-index__section"
  }, _react.default.createElement("div", {
    className: "contractor-footer-index__section-name"
  }, "Company"), _react.default.createElement(_CompanyLinks.default, null)), _react.default.createElement("div", {
    className: "contractor-footer-index__section contractor-footer-index__section--negative-left-margin"
  }, _react.default.createElement("div", {
    className: "contractor-footer-index__section-item"
  }, _react.default.createElement("div", {
    className: "contractor-footer-index__section-name"
  }, "Service Areas"), _react.default.createElement(_ServiceAreas.default, {
    areas: areas.serviceAreas
  })), _react.default.createElement("div", {
    className: "contractor-footer-index__section-item"
  }, _react.default.createElement("div", {
    className: "contractor-footer-index__section-name"
  }, "Coming Soon"), _react.default.createElement(_ServiceAreas.default, {
    areas: areas.comingSoonAreas
  }))), _react.default.createElement("div", {
    className: "contractor-footer-index__section contractor-footer-index__section--no-right-margin"
  }, _react.default.createElement("div", {
    className: "contractor-footer-index__section-name"
  }, "Why work with us?"), _react.default.createElement(_WorkWithUs.default, null), _react.default.createElement("div", {
    className: "contractor-footer-index__vertical-section-separator"
  }), _react.default.createElement("div", {
    className: "contractor-footer-index__section-name"
  }, "Grow your business with us"), _react.default.createElement(_GrowWithUs.default, null))), _react.default.createElement(_FooterCopyrightAndSocial.default, {
    contractor: true
  }));
};

ContractorFooter.propTypes = {
  className: _propTypes.default.string
};
var _default = ContractorFooter;
exports.default = _default;