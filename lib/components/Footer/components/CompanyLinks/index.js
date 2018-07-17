'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _FooterList = require('../FooterList');

var _FooterList2 = _interopRequireDefault(_FooterList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var companyLinks = [_react2.default.createElement(
  'a',
  { href: 'https://emproveit.com/about-emprove', target: '_blank', rel: 'noopener noreferrer' },
  'About Emprove, Inc.'
), _react2.default.createElement(
  'a',
  { href: 'https://emproveit.com/blog', target: '_blank', rel: 'noopener noreferrer' },
  'Blog'
), _react2.default.createElement(
  'a',
  { href: 'mailto:contact@emproveit.com' },
  'Contact Us'
),
/* <Link to="#">Our Team</Link>,
<Link to="#">Investors</Link>,
<Link to="#">Press & Media</Link>, */
_react2.default.createElement(
  'a',
  { href: 'https://angel.co/emproveit/jobs', target: '_blank', rel: 'noopener noreferrer' },
  'Careers'
), _react2.default.createElement(
  'a',
  { href: 'https://emproveit.com/info-center', target: '_blank', rel: 'noopener noreferrer' },
  'Help Center'
), _react2.default.createElement(
  'a',
  { href: 'https://emproveit.com/privacy', target: '_blank', rel: 'noopener noreferrer' },
  'Privacy Policy'
), _react2.default.createElement(
  'a',
  { href: 'https://emproveit.com/terms', target: '_blank', rel: 'noopener noreferrer' },
  'Terms of Service'
)];

var CompanyLinks = function CompanyLinks(props) {
  return _react2.default.createElement(_FooterList2.default, { items: companyLinks });
};

exports.default = CompanyLinks;