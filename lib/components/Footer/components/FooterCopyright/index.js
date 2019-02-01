'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Logo = require('../../../Logo');

var _Logo2 = _interopRequireDefault(_Logo);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterCopyright = function FooterCopyright(props) {
  return _react2.default.createElement(
    'div',
    { className: 'footer-copyright' },
    _react2.default.createElement(
      'div',
      { className: 'footer-copyright__logo-container' },
      _react2.default.createElement(
        'div',
        { className: 'footer-copyright__logo' },
        _react2.default.createElement('div', { className: 'footer-copyright__logo-overline' }),
        _react2.default.createElement(_Logo2.default, { imageClass: 'footer-copyright__logo-image', contractor: props.contractor, version: 'beta' })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'footer-copyright__copyright-declaration' },
      '\xA9 2019',
      ' ',
      _react2.default.createElement(
        'a',
        { href: '/' },
        _react2.default.createElement(
          'strong',
          null,
          'EMPROVE, LLC.'
        )
      ),
      ' ',
      'ALL RIGHTS RESERVED.'
    )
  );
};

FooterCopyright.propTypes = {
  contractor: _propTypes2.default.bool
};

FooterCopyright.defaultProps = {
  contractor: false
};

exports.default = FooterCopyright;