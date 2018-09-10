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

var IconNote = function IconNote(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    _react2.default.createElement('path', { d: 'M22.9 5.4l-1.5-1.5c-.4-.4-1-.4-1.4 0l-.5.5v-.7c0-.8-.5-1.5-1.1-1.6-.1-.7-.7-1.3-1.4-1.3H2.5c-.9 0-1.7.9-1.7 2v17.7c0 .7.5 1.3 1.1 1.4.1.7.6 1.3 1.2 1.3h15.1c.7 0 1.3-.6 1.3-1.4V10.2L21.7 8l1.2-1.2c.4-.4.4-1 0-1.4zm-1.7 2l-1.9-1.9.2-.2 1.9 1.9-.2.2zm-7.4 7.5L11.9 13l6.9-6.9L20.7 8l-6.9 6.9zm-2.1-1.1l1.3 1.3h-1.3v-1.3zm7.1-10.1V5l-.4.4V3c.2.1.4.4.4.7zM1.6 20.5V17h1.6c.1.6.6 1 1.2 1 .7 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3c-.6 0-1.1.4-1.2.9H1.6V11h1.6c.1.6.6 1 1.2 1 .7 0 1.3-.6 1.3-1.3s-.6-1.4-1.3-1.4c-.6 0-1.1.4-1.2.9H1.6V5h1.6c.1.6.6 1 1.2 1 .7 0 1.3-.6 1.3-1.3s-.6-1.4-1.3-1.4c-.6 0-1.1.4-1.2.9H1.6V2.8c0-.7.4-1.2 1-1.2H17c.4 0 .7.4.7.9v3.7L11 12.8c-.1.1-.1.2-.1.3v2.4c0 .2.2.4.4.4h2.4c.1 0 .2 0 .3-.1l3.7-3.7v8.5c0 .4-.2.7-.5.7H2c-.2-.1-.4-.4-.4-.8zm2.2-3.8c0-.3.2-.6.6-.6s.6.2.6.6-.2.6-.6.6-.6-.3-.6-.6zm0-6c0-.3.2-.6.6-.6s.6.2.6.6-.2.6-.6.6-.6-.3-.6-.6zm0-6c0-.3.2-.6.6-.6s.6.2.6.6-.3.5-.6.5-.6-.2-.6-.5zm15 17c0 .4-.2.7-.5.7H3.1c-.2 0-.4-.2-.5-.5h14.5c.7 0 1.3-.6 1.3-1.4v-9.2l.4-.4v10.8z' })
  );
};

exports.default = IconNote;