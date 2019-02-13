'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactRouterDom = require("react-router-dom");

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo(_ref) {
  var className = _ref.className,
      destination = _ref.destination,
      imageClass = _ref.imageClass,
      shortened = _ref.shortened,
      contractor = _ref.contractor,
      version = _ref.version;
  var isBeta = version === 'beta';
  var imageFilename = isBeta ? 'emprove_beta_logo.svg' : 'emprove_logo.svg';

  if (shortened) {
    imageFilename = 'ic_e_logo.svg';
  } else if (contractor) {
    imageFilename = isBeta ? 'emprove_pro_beta_logo.svg' : 'emprove_pro_logo.svg';
  }

  return _react.default.createElement(_reactRouterDom.Link, {
    to: destination,
    className: (0, _classnames.default)('logo', {
      'logo__image--shortened': shortened,
      'logo__image--beta': !shortened && isBeta
    }, className)
  }, _react.default.createElement("img", {
    className: (0, _classnames.default)('logo__image', imageClass),
    src: "/images/".concat(imageFilename),
    alt: "Emprove | Home Improvement Renewed"
  }));
};

Logo.propTypes = {
  destination: _propTypes.default.string,
  shortened: _propTypes.default.bool,
  className: _propTypes.default.string,
  contractor: _propTypes.default.bool,
  imageClass: _propTypes.default.string,
  version: _propTypes.default.string
};
Logo.defaultProps = {
  destination: '/',
  shortened: false,
  contractor: false,
  version: '1'
};
var _default = Logo;
exports.default = _default;