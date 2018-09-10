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

var IconPrevArrow = function IconPrevArrow(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M24 0H0v24h24V0z', fill: 'none' }),
    _react2.default.createElement('path', { d: 'M16.17 17.165L11.015 12l5.154-5.165-1.587-1.587L7.83 12l6.752 6.752 1.588-1.587z' })
  );
};

exports.default = IconPrevArrow;