'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutUsHero = function AboutUsHero(props) {
  return _react2.default.createElement(
    'section',
    { className: 'about-us-hero' },
    _react2.default.createElement(
      'div',
      { className: 'about-us-hero__title' },
      'Home Improvement ',
      _react2.default.createElement(
        'strong',
        null,
        'Renewed'
      )
    )
  );
};

exports.default = AboutUsHero;