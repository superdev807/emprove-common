'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconFacebookLetter = require('~/icons/IconFacebookLetter');

var _IconFacebookLetter2 = _interopRequireDefault(_IconFacebookLetter);

var _IconTwitter = require('~/icons/IconTwitter');

var _IconTwitter2 = _interopRequireDefault(_IconTwitter);

var _IconLinkedIn = require('~/icons/IconLinkedIn');

var _IconLinkedIn2 = _interopRequireDefault(_IconLinkedIn);

var _IconInstagram = require('~/icons/IconInstagram');

var _IconInstagram2 = _interopRequireDefault(_IconInstagram);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialMediaLinks = function SocialMediaLinks(props) {
  return _react2.default.createElement(
    'div',
    { className: 'social-media-links' },
    _react2.default.createElement(
      'a',
      { href: 'https://www.facebook.com/emproveit/', target: '_blank', rel: 'noopener noreferrer' },
      _react2.default.createElement(_IconFacebookLetter2.default, { className: 'social-media-links__icon' })
    ),
    _react2.default.createElement(
      'a',
      { href: 'https://twitter.com/emprove_it', target: '_blank', rel: 'noopener noreferrer' },
      _react2.default.createElement(_IconTwitter2.default, { className: 'social-media-links__icon' })
    ),
    _react2.default.createElement(
      'a',
      { href: 'https://www.instagram.com/emprove_it/', target: '_blank', rel: 'noopener noreferrer' },
      _react2.default.createElement(_IconInstagram2.default, { className: 'social-media-links__icon' })
    ),
    _react2.default.createElement(
      'a',
      { href: 'https://www.linkedin.com/company/emprove-inc/', target: '_blank', rel: 'noopener noreferrer' },
      _react2.default.createElement(_IconLinkedIn2.default, { className: 'social-media-links__icon' })
    )
  );
};

exports.default = SocialMediaLinks;