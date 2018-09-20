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

var IconContracts = function IconContracts(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
    _react2.default.createElement('path', { d: 'M10 19.5c-.5 0-1-.2-1.4-.6l-5.5-5.5c-.4-.4-.6-.9-.6-1.4 0-.5.2-1 .6-1.4l6.2-6.2-2-2c-.2-.2-.2-.5 0-.7s.5-.2.7 0l8.9 8.9c.4.4.6.9.6 1.4 0 .5-.2 1-.6 1.4l-5.5 5.5c-.4.4-.9.6-1.4.6zm0-14.4l-6.2 6.2c-.2.2-.3.4-.3.7 0 .3.1.5.3.7l5.5 5.5c.4.4 1 .4 1.4 0l5.5-5.5c.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7L10 5.1z' }),
    _react2.default.createElement('path', { d: 'M2.8 12l7.2 7 7.2-7zM19 13.5s-2 2.2-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.3-2-3.5-2-3.5z' }),
    _react2.default.createElement(
      'g',
      { opacity: '.36' },
      _react2.default.createElement('path', { d: 'M0 21.1h24V24H0z' })
    )
  );
};

exports.default = IconContracts;