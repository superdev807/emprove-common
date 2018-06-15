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
      shortened = _ref.shortened,
      contractor = _ref.contractor;

  var imageFilename = 'emprove_logo.svg';
  if (shortened) {
    imageFilename = 'ic_e_logo.svg';
  } else if (contractor) {
    imageFilename = 'emprove_pro_beta_logo.svg';
  }

  return _react2.default.createElement(
    _reactRouterDom.Link,
    { to: '/', className: (0, _classnames2.default)('logo', className) },
    _react2.default.createElement('img', {
      className: (0, _classnames2.default)('logo__image', { 'logo__image--shortened': shortened }),
      src: '/images/' + imageFilename,
      alt: 'Emprove | Home Improvement Renewed'
    })
  );
};

Logo.propTypes = {
  shortened: _propTypes2.default.bool,
  contractor: _propTypes2.default.bool
};

Logo.defaultProps = {
  shortened: false,
  contractor: false
};

exports.default = Logo;