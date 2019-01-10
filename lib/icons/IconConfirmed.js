'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconConfirmed = function IconConfirmed(props) {
  var primary = (0, _get2.default)(props, 'primary') || '#008000';
  var secondary = (0, _get2.default)(props, 'secondary') || '#ffffff';
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z', fill: primary }),
    _react2.default.createElement('path', { fill: secondary, d: 'M10.4 16.2l-4-4L7.5 11l2.9 2.9 6.1-6.1L17.6 9z' }),
    _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' })
  );
};

exports.default = IconConfirmed;