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

var IconPreference = function IconPreference(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
    _react2.default.createElement('path', { d: 'M21.7 2H2.3c-.3 0-.4.2-.4.4v19.8c0 .2.2.4.4.4h19.5c.2 0 .4-.2.4-.4V2.4c-.1-.2-.2-.4-.5-.4zM2.6 14h10.2v3.5H2.6V14zm10.3-.7h-1.7v-2h1.7v2zm-2.5-.8L3.3 2.7h7.1v9.8zM2.6 3.1L10 13.3H2.6V3.1zm11 8.1h2.1v10.5h-2.1V11.2zm2.9 0h2.1v10.5h-2.1V11.2zm2.8 0h2.1v10.5h-2.1V11.2zm-8.2-.7V7.9L16.2 6l5.1 1.9v2.6H11.1zm10.3-3.4l-5-1.8h-.3l-5 1.8V2.7h10.2v4.4zM2.6 18.3h10.2v3.5H2.6v-3.5z' })
  );
};

exports.default = IconPreference;