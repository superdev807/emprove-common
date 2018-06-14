'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterHeading = function FooterHeading(props) {
  return _react2.default.createElement(
    'section',
    { className: 'footer-heading' },
    _react2.default.createElement(
      'div',
      { className: 'footer-heading__text' },
      'Renovating your home just got easier. With the ',
      _react2.default.createElement(
        'strong',
        null,
        _react2.default.createElement(
          'span',
          { className: 'footer-heading__text--highlighted' },
          'click'
        ),
        ' ',
        _react2.default.createElement(
          'span',
          { className: 'footer-heading__text--emphasized' },
          'of your mouse'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'footer-heading__text' },
      'you can ',
      _react2.default.createElement(
        'span',
        { className: 'footer-heading__text--highlighted' },
        _react2.default.createElement(
          'strong',
          null,
          'dream'
        )
      ),
      ', ',
      _react2.default.createElement(
        'span',
        { className: 'footer-heading__text--highlighted' },
        _react2.default.createElement(
          'strong',
          null,
          'cost'
        )
      ),
      ', and ',
      _react2.default.createElement(
        'strong',
        null,
        _react2.default.createElement(
          'span',
          { className: 'footer-heading__text--highlighted' },
          _react2.default.createElement(
            'strong',
            null,
            'bid'
          )
        ),
        ' ',
        _react2.default.createElement(
          'span',
          { className: 'footer-heading__text--emphasized' },
          'your home renovation'
        )
      )
    )
  );
};

exports.default = FooterHeading;