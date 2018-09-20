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

var IconDisclaimerInfo = function IconDisclaimerInfo(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M24 0H0v24h24V0z', fill: 'none' }),
    _react2.default.createElement('path', { d: 'M14.317 5.434c-.669 0-1.34.552-1.321 1.221l.43 7.384a.891.891 0 0 0 1.782 0l.43-7.384c.019-.669-.653-1.221-1.321-1.221z' }),
    _react2.default.createElement('circle', { cx: '14.316', cy: '17.346', r: '1.22' }),
    _react2.default.createElement('path', { d: 'M22.633 2.608H6.137c-.669 0-1.213.544-1.213 1.213v7.63L.408 15.735a.376.376 0 0 0 .258.647h4.258v4.026c0 .542.441.983.983.983h16.858c.52 0 .942-.423.942-.942V3.683a1.074 1.074 0 0 0-1.074-1.075zm.325 17.842a.192.192 0 0 1-.192.192H5.908a.233.233 0 0 1-.233-.233v-4.401a.375.375 0 0 0-.375-.375H1.607l3.95-3.748a.375.375 0 0 0 .117-.272V3.821c0-.255.208-.463.463-.463h16.496c.18 0 .325.146.325.325V20.45z' })
  );
};

exports.default = IconDisclaimerInfo;