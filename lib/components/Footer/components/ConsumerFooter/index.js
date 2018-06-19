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

var _BrowseCatalogLinks = require('../BrowseCatalogLinks');

var _BrowseCatalogLinks2 = _interopRequireDefault(_BrowseCatalogLinks);

var _CompanyLinks = require('../CompanyLinks');

var _CompanyLinks2 = _interopRequireDefault(_CompanyLinks);

var _FooterCopyrightAndSocial = require('../FooterCopyrightAndSocial');

var _FooterCopyrightAndSocial2 = _interopRequireDefault(_FooterCopyrightAndSocial);

var _HowToUse = require('../HowToUse');

var _HowToUse2 = _interopRequireDefault(_HowToUse);

var _ServiceAreas = require('../ServiceAreas');

var _ServiceAreas2 = _interopRequireDefault(_ServiceAreas);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConsumerFooter = function ConsumerFooter(props) {
  return _react2.default.createElement(
    'footer',
    { className: (0, _classnames2.default)(props.className) },
    _react2.default.createElement(
      'section',
      { className: 'consumer-footer-index' },
      _react2.default.createElement(
        'div',
        { className: 'consumer-footer-index__grouped-sections' },
        _react2.default.createElement(
          'div',
          { className: 'consumer-footer-index__section' },
          _react2.default.createElement(
            'div',
            { className: 'consumer-footer-index__section-name' },
            'Company'
          ),
          _react2.default.createElement(_CompanyLinks2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'consumer-footer-index__section' },
          _react2.default.createElement(
            'div',
            { className: 'consumer-footer-index__section-name' },
            'Browse Catalog'
          ),
          _react2.default.createElement(_BrowseCatalogLinks2.default, null)
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'consumer-footer-index__grouped-sections' },
        _react2.default.createElement(
          'div',
          { className: 'consumer-footer-index__section' },
          _react2.default.createElement(
            'div',
            { className: 'consumer-footer-index__section-name' },
            'Service Areas'
          ),
          _react2.default.createElement(_ServiceAreas2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'consumer-footer-index__section consumer-footer-index__section--no-right-margin' },
          _react2.default.createElement(
            'div',
            { className: 'consumer-footer-index__section-name' },
            'How to Use Emprove'
          ),
          _react2.default.createElement(_HowToUse2.default, null)
        )
      )
    ),
    _react2.default.createElement(_FooterCopyrightAndSocial2.default, null)
  );
};

ConsumerFooter.propTypes = {
  className: _propTypes2.default.string
};

exports.default = ConsumerFooter;