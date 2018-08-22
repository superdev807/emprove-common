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

var _CompanyLinks = require('../CompanyLinks');

var _CompanyLinks2 = _interopRequireDefault(_CompanyLinks);

var _FooterCopyrightAndSocial = require('../FooterCopyrightAndSocial');

var _FooterCopyrightAndSocial2 = _interopRequireDefault(_FooterCopyrightAndSocial);

var _GrowWithUs = require('../GrowWithUs');

var _GrowWithUs2 = _interopRequireDefault(_GrowWithUs);

var _ServiceAreas = require('../ServiceAreas');

var _ServiceAreas2 = _interopRequireDefault(_ServiceAreas);

var _WorkWithUs = require('../WorkWithUs');

var _WorkWithUs2 = _interopRequireDefault(_WorkWithUs);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractorFooter = function ContractorFooter(props) {
  return _react2.default.createElement(
    'footer',
    { className: (0, _classnames2.default)(props.className) },
    _react2.default.createElement(
      'section',
      { className: 'contractor-footer-index' },
      _react2.default.createElement(
        'div',
        { className: 'contractor-footer-index__section' },
        _react2.default.createElement(
          'div',
          { className: 'contractor-footer-index__section-name' },
          'Company'
        ),
        _react2.default.createElement(_CompanyLinks2.default, null)
      ),
      _react2.default.createElement(
        'div',
        { className: 'contractor-footer-index__section contractor-footer-index__section--negative-left-margin' },
        _react2.default.createElement(
          'div',
          { className: 'contractor-footer-index__section-item' },
          _react2.default.createElement(
            'div',
            { className: 'contractor-footer-index__section-name' },
            'Service Areas'
          ),
          _react2.default.createElement(_ServiceAreas2.default, { areas: ['Greater Las Vegas, NV', 'Greater Phoenix, AZ'] })
        ),
        _react2.default.createElement(
          'div',
          { className: 'contractor-footer-index__section-item' },
          _react2.default.createElement(
            'div',
            { className: 'contractor-footer-index__section-name' },
            'Coming Soon'
          ),
          _react2.default.createElement(_ServiceAreas2.default, { areas: ['Greater Los Angeles, CA', 'Greater San Diego, CA'] })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'contractor-footer-index__section contractor-footer-index__section--no-right-margin' },
        _react2.default.createElement(
          'div',
          { className: 'contractor-footer-index__section-name' },
          'Why work with us?'
        ),
        _react2.default.createElement(_WorkWithUs2.default, null),
        _react2.default.createElement('div', { className: 'contractor-footer-index__vertical-section-separator' }),
        _react2.default.createElement(
          'div',
          { className: 'contractor-footer-index__section-name' },
          'Grow your business with us'
        ),
        _react2.default.createElement(_GrowWithUs2.default, null)
      )
    ),
    _react2.default.createElement(_FooterCopyrightAndSocial2.default, { contractor: true })
  );
};

ContractorFooter.propTypes = {
  className: _propTypes2.default.string
};

exports.default = ContractorFooter;