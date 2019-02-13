'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Logo = _interopRequireDefault(require("../../../Logo"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterCopyright = function FooterCopyright(props) {
  return _react.default.createElement("div", {
    className: "footer-copyright"
  }, _react.default.createElement("div", {
    className: "footer-copyright__logo-container"
  }, _react.default.createElement("div", {
    className: "footer-copyright__logo"
  }, _react.default.createElement("div", {
    className: "footer-copyright__logo-overline"
  }), _react.default.createElement(_Logo.default, {
    imageClass: "footer-copyright__logo-image",
    contractor: props.contractor,
    version: "beta"
  }))), _react.default.createElement("div", {
    className: "footer-copyright__copyright-declaration"
  }, "\xA9 2019", ' ', _react.default.createElement("a", {
    href: "/"
  }, _react.default.createElement("strong", null, "EMPROVE, LLC.")), ' ', "ALL RIGHTS RESERVED."));
};

FooterCopyright.propTypes = {
  contractor: _propTypes.default.bool
};
FooterCopyright.defaultProps = {
  contractor: false
};
var _default = FooterCopyright;
exports.default = _default;