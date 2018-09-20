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

var IconSave = function IconSave(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    _react2.default.createElement('path', { d: 'M21.5 5.5l-.1-.1c-.8-.8-2.2-2.3-2.9-2.9-1-.9-1.7-.9-2.5-.9H4.4C3 1.6 1.8 2.8 1.8 4.2v15.3c0 1.4 1.2 2.6 2.6 2.6H19.6c1.4 0 2.6-1.2 2.6-2.6v-12c0-.7 0-1.3-.7-2zm-9.6-1.1c0-.6.5-1.1 1.1-1.1h.4c.6 0 1.1.5 1.1 1.1v1.9c0 .6-.5 1.1-1.1 1.1H13c-.6 0-1.1-.5-1.1-1.1V4.4zm-6.7 7.8v-.4.4zm13.6 9.1H5.2v-9.1h13.5l.1 9.1zm2.5-1.8c0 .9-.7 1.7-1.6 1.7v-9.1c0-.5-.4-.9-.9-.9H5.2c-.5 0-.9.4-.9.9v9c-.9 0-1.7-.8-1.7-1.7V4.3c0-.9.8-1.7 1.7-1.7v5.8c0 .4.3.8.8.8h10.2c.4 0 .8-.3.8-.8V2.5c.7 0 1.1 0 1.8.6s2 2 2.8 2.8l.1.1c.5.5.5.8.5 1.3v12.2z' }),
    _react2.default.createElement('path', { d: 'M13 6.5h.4c.1 0 .2-.1.2-.2V4.4c0-.1-.1-.2-.2-.2H13c-.1 0-.2.1-.2.2v1.9c0 .1.1.2.2.2zM7.6 15.1h8.8c.2 0 .4-.2.4-.4s-.2-.4-.4-.4H7.6c-.2 0-.4.2-.4.4s.2.4.4.4z' })
  );
};

exports.default = IconSave;