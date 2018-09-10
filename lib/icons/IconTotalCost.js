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

var IconTotalCost = function IconTotalCost(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    _react2.default.createElement('path', { d: 'M5 9.3h8.1V11H5zM5 12.5h3v1.7H5zM5 15.8h5.3v1.7H5z' }),
    _react2.default.createElement('path', { d: 'M18.4 14.4c-1.8-.5-2.4-1-2.4-1.8 0-.9.8-1.6 2.1-1.6 1.4 0 1.9.7 2 1.8h1.8c-.1-1.5-.9-2.8-2.6-3.2V7.7h-1V3c0-1.3-1-2.3-2.3-2.3H7.1c-.3 0-.4.2-.4.2L2 5.6c-.1.1-.1.2-.1.3v13.3c0 1.3 1.1 2.3 2.3 2.3H16c.3 0 .7-.1 1-.2V23h2.4v-1.8c1.6-.3 2.8-1.3 2.8-3-.1-2.5-2-3.3-3.8-3.8zM6.6 2.2v3.1H3.4l3.2-3.1zm11.6 17.5c-1.6 0-2.3-.8-2.4-1.8H14c.1 1.4.8 2.3 1.8 2.9H4.2c-.9 0-1.6-.7-1.6-1.6V6.1h4.3c.2 0 .4-.2.4-.4V1.4H16c.9 0 1.6.7 1.6 1.6v4.7H17v1.8c-1.5.4-2.8 1.4-2.8 3.1 0 2 1.5 2.9 3.7 3.5 2 .5 2.4 1.3 2.4 2.1 0 .6-.4 1.5-2.1 1.5z' })
  );
};

exports.default = IconTotalCost;