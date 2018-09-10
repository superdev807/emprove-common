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

var IconProperty = function IconProperty(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    _react2.default.createElement('path', { d: 'M22.2 10.6l-9.9-8.5c-.1-.1-.3-.1-.5 0l-9.9 8.5.5.6 1-.8v10.8c0 .7.6 1.3 1.3 1.3h14.8c.7 0 1.3-.6 1.3-1.3V10.4l1 .8.4-.6zm-5.1 3H6.9v-1.5h10.2v1.5zm-10.2.8h10.2v1.3H6.9v-1.3zm0 2h10.2v1.3H6.9v-1.3zm0 2.1h10.2v1.3H6.9v-1.3zm0 2h10.2v1.3H6.9v-1.3zm13.1.7c0 .3-.3.6-.6.6h-1.5v-10c0-.2-.2-.4-.4-.4h-11c-.2 0-.4.2-.4.4v10H4.6c-.3 0-.6-.3-.6-.6V9.7l8-6.9 8 6.9v11.5z' })
  );
};

exports.default = IconProperty;