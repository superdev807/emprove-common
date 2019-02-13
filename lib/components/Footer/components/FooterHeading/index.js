'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterHeading = function FooterHeading(props) {
  return _react.default.createElement("section", {
    className: "footer-heading"
  }, _react.default.createElement("div", {
    className: "footer-heading__text"
  }, "Renovating your home just got easier. With the ", _react.default.createElement("strong", null, _react.default.createElement("span", {
    className: "footer-heading__text--highlighted"
  }, "click"), " ", _react.default.createElement("span", {
    className: "footer-heading__text--emphasized"
  }, "of your mouse"))), _react.default.createElement("div", {
    className: "footer-heading__text"
  }, "you can ", _react.default.createElement("span", {
    className: "footer-heading__text--highlighted"
  }, _react.default.createElement("strong", null, "dream")), ", ", _react.default.createElement("span", {
    className: "footer-heading__text--highlighted"
  }, _react.default.createElement("strong", null, "cost")), ", and ", _react.default.createElement("strong", null, _react.default.createElement("span", {
    className: "footer-heading__text--highlighted"
  }, _react.default.createElement("strong", null, "bid")), " ", _react.default.createElement("span", {
    className: "footer-heading__text--emphasized"
  }, "your home renovation"))));
};

var _default = FooterHeading;
exports.default = _default;