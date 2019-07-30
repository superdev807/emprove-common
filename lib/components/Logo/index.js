'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Logo = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactRouterDom = require("react-router-dom");

var _constants = require("../../config/constants");

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Logo = function Logo(_ref) {
  var className = _ref.className,
      destination = _ref.destination,
      imageClass = _ref.imageClass,
      noLink = _ref.noLink,
      shortened = _ref.shortened,
      contractor = _ref.contractor,
      id = _ref.id,
      subDomain = _ref.subDomain;
  var imageFilename; // if (subDomain === PARTNER.REDFIN) {
  //   if (shortened) {
  //     imageFilename = 'redfin_emprove_logo.png';
  //   } else {
  //     imageFilename = 'redfin_powered_by_emprove.png';
  //   }
  //   imageFilename = `${process.env.IMGIX_PUBLIC_IMAGES_HOST}consumer/partner-landing/${imageFilename}?auto=format`;
  // } else {

  imageFilename = 'emprove_logo.svg';

  if (shortened) {
    imageFilename = 'ic_e_logo.png';
  } else if (contractor) {
    imageFilename = 'emprove_pro_logo.svg';
  }

  imageFilename = "/images/".concat(imageFilename); // }

  var Container;
  var extraProps = {};

  if (noLink) {
    Container = 'div';
  } else {
    Container = _reactRouterDom.Link;
    extraProps.to = destination;
  }

  return _react["default"].createElement(Container, _extends({
    className: (0, _classnames["default"])('logo', {
      'logo__image--shortened': shortened,
      'logo__image': !shortened
    }, className),
    id: id
  }, extraProps), _react["default"].createElement("img", {
    className: (0, _classnames["default"])('logo__image', imageClass),
    src: imageFilename,
    alt: "Emprove | Home Improvement Renewed"
  }));
};

exports.Logo = Logo;
Logo.propTypes = {
  destination: _propTypes["default"].string,
  shortened: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  contractor: _propTypes["default"].bool,
  imageClass: _propTypes["default"].string,
  noLink: _propTypes["default"].bool
};
Logo.defaultProps = {
  destination: '/',
  noLink: false,
  shortened: false,
  contractor: false
}; // export default withPartner(Logo);

var _default = Logo;
exports["default"] = _default;