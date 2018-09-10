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

var IconSavedProject = function IconSavedProject(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    _react2.default.createElement('path', { d: 'M17.1 2.5H6.9c-1.3 0-2.4 1.1-2.4 2.4v16.2c0 .1.1.2.2.3.1.1.2.1.4 0l7-3 7 3h.1c.1 0 .1 0 .2-.1s.2-.2.2-.3V4.9c-.1-1.3-1.2-2.4-2.5-2.4zm1.6 18.1l-6.6-2.8H12h-.1l-6.6 2.8V4.9c0-.9.7-1.7 1.6-1.7H17c.9 0 1.7.7 1.7 1.7v15.7z' }),
    _react2.default.createElement('path', { d: 'M11 11.2L8.4 8.5 6.9 10l4.1 4 6.3-6.3-1.4-1.4z' })
  );
};

exports.default = IconSavedProject;