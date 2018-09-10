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

var IconImage = function IconImage(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('rect', { fill: 'none', width: '24', height: '24' }),
    _react2.default.createElement('ellipse', { cx: '6.1', cy: '7.2', rx: '2.4', ry: '2.4' }),
    _react2.default.createElement('polygon', { points: '1.4,19.3 10.7,9.5 14.9,14.2 16.2,12.9 22.6,19.3' })
  );
};

exports.default = IconImage;