'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _BrowseCatalogLinks = require('./components/BrowseCatalogLinks');

var _BrowseCatalogLinks2 = _interopRequireDefault(_BrowseCatalogLinks);

var _CompanyLinks = require('./components/CompanyLinks');

var _CompanyLinks2 = _interopRequireDefault(_CompanyLinks);

var _FooterCopyright = require('./components/FooterCopyright');

var _FooterCopyright2 = _interopRequireDefault(_FooterCopyright);

var _HowToUse = require('./components/HowToUse');

var _HowToUse2 = _interopRequireDefault(_HowToUse);

var _ServiceAreas = require('./components/ServiceAreas');

var _ServiceAreas2 = _interopRequireDefault(_ServiceAreas);

var _SocialMediaLinks = require('./components/SocialMediaLinks');

var _SocialMediaLinks2 = _interopRequireDefault(_SocialMediaLinks);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  return _react2.default.createElement(
    'footer',
    null,
    _react2.default.createElement(
      'section',
      { className: 'footer-index' },
      _react2.default.createElement(
        'div',
        { className: 'footer-index__grouped-sections' },
        _react2.default.createElement(
          'div',
          { className: 'footer-index__section' },
          _react2.default.createElement(
            'div',
            { className: 'footer-index__section-name' },
            'Company'
          ),
          _react2.default.createElement(_CompanyLinks2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer-index__section' },
          _react2.default.createElement(
            'div',
            { className: 'footer-index__section-name' },
            'Browse Catalog'
          ),
          _react2.default.createElement(_BrowseCatalogLinks2.default, null)
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'footer-index__grouped-sections' },
        _react2.default.createElement(
          'div',
          { className: 'footer-index__section' },
          _react2.default.createElement(
            'div',
            { className: 'footer-index__section-name' },
            'Service Areas'
          ),
          _react2.default.createElement(_ServiceAreas2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer-index__section footer-index__section--no-right-margin' },
          _react2.default.createElement(
            'div',
            { className: 'footer-index__section-name' },
            'How to Use Emprove'
          ),
          _react2.default.createElement(_HowToUse2.default, null)
        )
      )
    ),
    _react2.default.createElement(
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
        _react2.default.createElement(_FooterCopyright2.default, null)
      )
    )
  );
};

exports.default = Footer;