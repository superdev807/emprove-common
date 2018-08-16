'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = require('react-router-dom');

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo(_ref) {
  var className = _ref.className,
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

  var destinationLink = '/';
  if (!contractor) {
    destinationLink = '/browse';
  }

  return _react2.default.createElement(
    _reactRouterDom.Link,
    { to: destinationLink, className: (0, _classnames2.default)('logo', { 'logo__image--shortened': shortened, 'logo__image--beta': !shortened && isBeta }, className) },
    _react2.default.createElement('img', {
      className: (0, _classnames2.default)('logo__image', imageClass),
      src: '/images/' + imageFilename,
      alt: 'Emprove | Home Improvement Renewed'
    })
  );
};

Logo.propTypes = {
  shortened: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  contractor: _propTypes2.default.bool,
  imageClass: _propTypes2.default.string,
  version: _propTypes2.default.string
};

Logo.defaultProps = {
  shortened: false,
  contractor: false,
  version: '1'
};

exports.default = Logo;