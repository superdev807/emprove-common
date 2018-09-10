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

var IconBidTotal = function IconBidTotal(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    _react2.default.createElement('path', { d: 'M12.622 1.809C6.993 1.809 2.431 6.372 2.431 12c0 1.77.452 3.433 1.246 4.883l-2.604 4.36a.505.505 0 0 0 .54.754l5.825-1.236a10.125 10.125 0 0 0 5.185 1.429c5.628 0 10.19-4.563 10.19-10.191-.001-5.627-4.563-10.19-10.191-10.19zm1.1 14.934v1.489h-2.077v-1.503c-1.33-.284-2.465-1.135-2.548-2.652h1.523c.076.817.637 1.454 2.063 1.454 1.53 0 1.87-.761 1.87-1.239 0-.644-.346-1.253-2.077-1.669-1.932-.464-3.254-1.26-3.254-2.859 0-1.336 1.08-2.208 2.424-2.5V5.769h2.077v1.516c1.447.353 2.174 1.447 2.223 2.638h-1.53c-.042-.866-.499-1.454-1.731-1.454-1.17 0-1.869.526-1.869 1.281 0 .658.505 1.08 2.077 1.489 1.572.409 3.254 1.08 3.254 3.047-.001 1.418-1.074 2.2-2.425 2.457z' })
  );
};

exports.default = IconBidTotal;