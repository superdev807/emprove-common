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

var IconSubmitted = function IconSubmitted(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
    _react2.default.createElement('path', { d: 'M12 1.375C6.142 1.375 1.375 6.142 1.375 12S6.142 22.625 12 22.625 22.625 17.859 22.625 12 17.859 1.375 12 1.375z' }),
    _react2.default.createElement('path', { d: 'M9.606 14.854l-3.013-3.005-1.039 1.039 4.052 4.051 8.84-8.84-1.039-1.038z' })
  );
};

exports.default = IconSubmitted;