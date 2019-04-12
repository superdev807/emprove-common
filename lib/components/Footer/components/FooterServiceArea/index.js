'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _SocialMediaLinks = _interopRequireDefault(require("../SocialMediaLinks"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterServiceArea = function FooterServiceArea(props) {
  return _react.default.createElement("div", {
    className: "footer-service-area"
  }, _react.default.createElement("div", {
    className: "footer-service-area__map"
  }, _react.default.createElement("img", {
    className: "footer-service-area__map-image",
    src: process.env.IMGIX_PUBLIC_IMAGES_HOST + 'consumer/new-landing/usa_map_graphic_24px.png?auto=format'
  })), _react.default.createElement(_Typography.default, {
    className: "footer-service-area__description"
  }, _react.default.createElement("span", {
    className: "footer-service-area__description-text"
  }, _react.default.createElement("span", {
    className: "footer-service-area__description-text--orange"
  }, "EMPROVE"), " IS NATIONWIDE")), _react.default.createElement("div", {
    className: "footer-service-area__social-media-links"
  }, _react.default.createElement(_SocialMediaLinks.default, null)));
};

FooterServiceArea.propTypes = {};
FooterServiceArea.defaultProps = {};
var _default = FooterServiceArea;
exports.default = _default;