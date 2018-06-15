'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FooterCopyright = require('../FooterCopyright');

var _FooterCopyright2 = _interopRequireDefault(_FooterCopyright);

var _SocialMediaLinks = require('../SocialMediaLinks');

var _SocialMediaLinks2 = _interopRequireDefault(_SocialMediaLinks);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterCopyrightAndSocial = function FooterCopyrightAndSocial(props) {
  return _react2.default.createElement(
    'section',
    { className: 'footer-copyright-and-social' },
    _react2.default.createElement(
      'div',
      { className: 'footer-copyright-and-social___social-media-links' },
      _react2.default.createElement(_SocialMediaLinks2.default, null)
    ),
    _react2.default.createElement(
      'div',
      { className: 'footer-copyright-and-social__copyright' },
      _react2.default.createElement(_FooterCopyright2.default, { contractor: props.contractor })
    )
  );
};

FooterCopyrightAndSocial.propTypes = {
  contractor: _propTypes2.default.bool
};

FooterCopyrightAndSocial.defaultProps = {
  contractor: false
};

exports.default = FooterCopyrightAndSocial;