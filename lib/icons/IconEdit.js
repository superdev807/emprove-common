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

var IconEdit = function IconEdit(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { fill: 'none', d: 'M0,0h24v24H0V0z' }),
    _react2.default.createElement('path', { d: 'M21.9,4.9l-2.6-2.6c-0.6-0.6-1.5-0.6-2.1,0l-2.4,2.4c0,0,0,0,0,0s0,0,0,0l-13,13c-0.1,0.1-0.1,0.2-0.1,0.3 v4.1c0,0.2,0.2,0.4,0.4,0.4h4.1c0.1,0,0.2,0,0.3-0.1L19.9,9v0l2-2c0.3-0.3,0.4-0.6,0.4-1S22.1,5.2,21.9,4.9z M19.3,8.5L19.3,8.5 l-0.1,0.1l-3.6-3.6l0.6-0.6l3.6,3.6L19.3,8.5z M6.3,21.5l-3.6-3.6L15,5.6l3.6,3.6L6.3,21.5z M2.4,18.6l3.1,3.1H2.4V18.6z' })
  );
};

exports.default = IconEdit;