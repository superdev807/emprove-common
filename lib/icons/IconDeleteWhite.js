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

var IconDeleteWhite = function IconDeleteWhite(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    _react2.default.createElement('path', { d: 'M20.4 5.3h-1V4.1c0-.2-.2-.4-.4-.4h-3.6V2.2c0-.2-.2-.4-.4-.4H8.8c-.2 0-.4.2-.4.4v1.5H4.9c-.2 0-.4.2-.4.4v1.2h-1v1H5v13.6c0 1.4 1.2 2.6 2.6 2.6h8.9c1.4 0 2.6-1.2 2.6-2.6V6.3h1.4v-1h-.1zM9.2 2.5h5.6v1.2H9.2V2.5zm9.2 17.4c0 1-.9 1.8-1.9 1.8H7.6c-1 0-1.8-.8-1.8-1.8V6.3h12.6v13.6z' }),
    _react2.default.createElement('path', { d: 'M8.5 16.1l1.4 1.4 2.1-2.1 2.1 2.1 1.4-1.4-2.1-2.1 2.1-2.1-1.4-1.5-2.1 2.2-2.1-2.2-1.4 1.5 2.1 2.1z' })
  );
};

exports.default = IconDeleteWhite;