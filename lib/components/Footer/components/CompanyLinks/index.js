'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FooterList = _interopRequireDefault(require("../FooterList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//This is converted into a function because the test couldn't inject process.env.CONSUMER_DOMAIN at runtime.

/* eslint-disable react/jsx-key */
var getCompanyLinks = function getCompanyLinks() {
  return [_react["default"].createElement("a", {
    href: process.env.CONSUMER_DOMAIN + '/about-emprove'
  }, "About Emprove, Inc."), _react["default"].createElement("a", {
    href: process.env.CONSUMER_DOMAIN + '/blog'
  }, "Blog"), _react["default"].createElement("a", {
    href: "mailto:contact@emproveit.com"
  }, "Contact Us"), _react["default"].createElement("a", {
    href: "https://angel.co/emproveit/jobs",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Careers"), _react["default"].createElement("a", {
    href: process.env.HELP_DOMAIN,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Help Center"), _react["default"].createElement("a", {
    href: process.env.CONSUMER_DOMAIN + '/privacy'
  }, "Privacy Policy"), _react["default"].createElement("a", {
    href: process.env.CONSUMER_DOMAIN + '/terms'
  }, "Terms of Service")];
};
/* eslint-enable react/jsx-key */


var CompanyLinks = function CompanyLinks(props) {
  return _react["default"].createElement(_FooterList["default"], {
    items: getCompanyLinks()
  });
};

var _default = CompanyLinks;
exports["default"] = _default;