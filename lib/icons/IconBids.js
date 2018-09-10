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

var IconBids = function IconBids(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
    _react2.default.createElement('path', { d: 'M12.7 1.9C7.1 1.9 2.6 6.4 2.6 12c0 1.7.5 3.4 1.3 4.8l-2.6 4.3c-.1.2-.1.4 0 .5.1.1.2.2.4.2h.1l5.8-1.2c1.5.9 3.3 1.4 5.1 1.4 5.6 0 10.1-4.5 10.1-10.1s-4.5-10-10.1-10zm1.1 14.8v1.5h-2.1v-1.5c-1.3-.3-2.4-1.1-2.5-2.6h1.5c.1.8.6 1.4 2 1.4 1.5 0 1.8-.8 1.8-1.2 0-.6-.3-1.2-2.1-1.7-1.9-.5-3.2-1.2-3.2-2.8 0-1.3 1.1-2.2 2.4-2.5V5.8h2.1v1.5c1.4.3 2.2 1.4 2.2 2.6h-1.5c0-.9-.5-1.4-1.7-1.4s-1.8.5-1.8 1.3c0 .7.5 1.1 2.1 1.5 1.6.4 3.2 1.1 3.2 3 0 1.4-1.1 2.1-2.4 2.4z' })
  );
};

exports.default = IconBids;