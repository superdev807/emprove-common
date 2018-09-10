'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconArrowHorizontal = function IconArrowHorizontal(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 18 18' }, props),
    _react2.default.createElement('path', { fill: '#d98232', d: 'M4.8 4l8.4 5-8.4 5 3-5z' }),
    _react2.default.createElement('path', { fill: '#ff9e3c', d: 'M7.8 9l-3-5 8.4 5z' })
  );
};

exports.default = IconArrowHorizontal;