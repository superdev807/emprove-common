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

var IconPhone = function IconPhone(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
    _react2.default.createElement('path', { d: 'M15.6 22.4H8.4c-1.5 0-2.7-1.2-2.7-2.7V4.2c0-1.5 1.2-2.7 2.7-2.7h7.3c1.5 0 2.7 1.2 2.7 2.7v15.5c-.1 1.5-1.3 2.7-2.8 2.7zM8.4 2.3c-1.1 0-1.9.9-1.9 1.9v15.5c0 1 .9 1.9 1.9 1.9h7.3c1.1 0 1.9-.9 1.9-1.9V4.2c0-1.1-.9-1.9-1.9-1.9H8.4z' }),
    _react2.default.createElement('circle', { cx: '12', cy: '19.8', r: '1.4' }),
    _react2.default.createElement('path', { d: 'M16.5 17.8h-9V4.3h9v13.5zm-8.2-.7h7.5v-12H8.3v12z' })
  );
};

exports.default = IconPhone;