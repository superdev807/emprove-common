'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _IconFacebookLetter = _interopRequireDefault(require("../../../../icons/IconFacebookLetter"));

var _IconTwitter = _interopRequireDefault(require("../../../../icons/IconTwitter"));

var _IconLinkedIn = _interopRequireDefault(require("../../../../icons/IconLinkedIn"));

var _IconInstagram = _interopRequireDefault(require("../../../../icons/IconInstagram"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialMediaLinks = function SocialMediaLinks(props) {
  return _react.default.createElement("div", {
    className: "social-media-links"
  }, _react.default.createElement("a", {
    href: "https://www.facebook.com/emproveit/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, _react.default.createElement(_IconFacebookLetter.default, {
    className: "social-media-links__icon"
  })), _react.default.createElement("a", {
    href: "https://twitter.com/emprove_it",
    target: "_blank",
    rel: "noopener noreferrer"
  }, _react.default.createElement(_IconTwitter.default, {
    className: "social-media-links__icon"
  })), _react.default.createElement("a", {
    href: "https://www.instagram.com/emproveit/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, _react.default.createElement(_IconInstagram.default, {
    className: "social-media-links__icon"
  })), _react.default.createElement("a", {
    href: "https://www.linkedin.com/company/emprove-inc/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, _react.default.createElement(_IconLinkedIn.default, {
    className: "social-media-links__icon"
  })));
};

var _default = SocialMediaLinks;
exports.default = _default;