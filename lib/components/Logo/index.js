'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Logo = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactRouterDom = require("react-router-dom");

var _withPartner = _interopRequireDefault(require("../../hocs/withPartner"));

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
      version = _ref.version,
      id = _ref.id,
      partner = _ref.partner;
  var imageFilename;
  var isBeta = version === 'beta';

  if (partner === _constants.PARTNER.REDFIN) {
    imageFilename = 'redfin/redfin_logo.png';
  } else {
    imageFilename = isBeta ? 'emprove_beta_logo.svg' : 'emprove_logo.svg';

    if (shortened) {
      imageFilename = 'ic_e_logo.png';
    } else if (contractor) {
      imageFilename = isBeta ? 'emprove_pro_beta_logo.svg' : 'emprove_pro_logo.svg';
    }
  }

  var Container;
  var extraProps = {};

  if (partner === _constants.PARTNER.REDFIN) {
    Container = 'a';
    extraProps.href = 'https://redfin.com';
    extraProps.target = '_blank';
  } else {
    if (noLink) {
      Container = 'div';
    } else {
      Container = _reactRouterDom.Link;
      extraProps.to = destination;
    }
  }

  return _react["default"].createElement(Container, _extends({
    className: (0, _classnames["default"])('logo', {
      'logo__image--shortened': shortened,
      'logo__image--beta': !shortened && isBeta
    }, className),
    id: id
  }, extraProps), _react["default"].createElement("img", {
    className: (0, _classnames["default"])('logo__image', imageClass),
    src: "/images/".concat(imageFilename),
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
  noLink: _propTypes["default"].bool,
  version: _propTypes["default"].string
};
Logo.defaultProps = {
  destination: '/',
  noLink: false,
  shortened: false,
  contractor: false,
  version: '1'
};

var _default = (0, _withPartner["default"])(Logo);

exports["default"] = _default;