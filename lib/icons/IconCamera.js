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

var IconCamera = function IconCamera(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { fill: 'none', d: 'M0,0h24v24H0V0z' }),
    _react2.default.createElement('path', { d: 'M20.5,4.2h-3l-2.1-2.1H8.7L6.5,4.2h-3C2.1,4.2,1,5.3,1,6.7v12.8C1,20.9,2.1,22,3.5,22h17 c1.4,0,2.5-1.1,2.5-2.5V6.7C23,5.3,21.9,4.2,20.5,4.2z M22.4,19.5c0,1-0.9,1.8-1.9,1.8h-17c-1,0-1.8-0.8-1.8-1.8V6.7 c0-1,0.8-1.8,1.8-1.8h2l0,0h13.8l0,0h1.3c1,0,1.8,0.8,1.8,1.8V19.5L22.4,19.5z' }),
    _react2.default.createElement('path', { d: 'M12,7.4c-3.1,0-5.7,2.6-5.7,5.7s2.6,5.7,5.7,5.7s5.7-2.6,5.7-5.7S15.1,7.4,12,7.4z M12,18 c-2.7,0-4.9-2.2-4.9-4.9S9.3,8.2,12,8.2s4.9,2.2,4.9,4.9S14.7,18,12,18z' }),
    _react2.default.createElement('circle', { cx: '12', cy: '13.1', r: '3.2' })
  );
};

exports.default = IconCamera;