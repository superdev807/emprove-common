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

var IconAddress = function IconAddress(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
    _react2.default.createElement('path', { d: 'M12 22.4c-.1 0-.2 0-.3-.1-.3-.4-7.1-8-7.1-13.3 0-4.1 3.3-7.4 7.4-7.4s7.4 3.3 7.4 7.4c0 5.3-6.8 12.9-7.1 13.3-.1 0-.2.1-.3.1zm0-20c-3.7 0-6.6 3-6.6 6.6 0 4.5 5.3 10.9 6.6 12.4 1.3-1.5 6.6-8 6.6-12.4 0-3.7-2.9-6.6-6.6-6.6zm0 9.5c-1.6 0-2.9-1.3-2.9-2.9s1.3-2.9 2.9-2.9 2.9 1.3 2.9 2.9-1.3 2.9-2.9 2.9zm0-5c-1.2 0-2.1 1-2.1 2.1s1 2.1 2.1 2.1 2.1-1 2.1-2.1-.9-2.1-2.1-2.1z' })
  );
};

exports.default = IconAddress;