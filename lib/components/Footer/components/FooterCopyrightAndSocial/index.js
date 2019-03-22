'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FooterCopyright = _interopRequireDefault(require("../FooterCopyright"));

var _SocialMediaLinks = _interopRequireDefault(require("../SocialMediaLinks"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var FooterCopyrightAndSocial = function FooterCopyrightAndSocial(props) {
  return _react.default.createElement(_react.Fragment, null, props.topContent, _react.default.createElement("section", {
    className: "footer-copyright-and-social"
  }, props.showSocial && _react.default.createElement("div", {
    className: "footer-copyright-and-social___social-media-links"
  }, _react.default.createElement(_SocialMediaLinks.default, null)), _react.default.createElement("div", {
    className: "footer-copyright-and-social__copyright"
  }, _react.default.createElement(_FooterCopyright.default, {
    contractor: props.contractor
  }))));
};

FooterCopyrightAndSocial.propTypes = {
  contractor: _propTypes.default.bool,
  showSocial: _propTypes.default.bool,
  topContent: _propTypes.default.node
};
FooterCopyrightAndSocial.defaultProps = {
  contractor: false,
  showSocial: true
};
var _default = FooterCopyrightAndSocial;
exports.default = _default;