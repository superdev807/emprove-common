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

var IconBidProcess = function IconBidProcess(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    _react2.default.createElement('path', { d: 'M5.6 20.3h2.6v2.6H5.6zM10.7 20.3h2.6v2.6h-2.6zM15.8 20.3h2.6v2.6h-2.6zM12.6.8C7.9.8 4.1 4.6 4.1 9.3c0 1.3.3 2.7.9 3.9l-2 3.3c-.2.3-.1.6 0 .8.1.2.4.3.6.3l4.6-1c1.3.7 2.7 1.1 4.2 1.1 4.7 0 8.5-3.8 8.5-8.5C21 4.6 17.2.8 12.6.8zm0 16.2c-1.4 0-2.7-.4-3.9-1.1l-.1-.1-4.8 1L6 13.2l-.2-.2c-.6-1.1-.9-2.4-.9-3.7 0-4.3 3.5-7.7 7.7-7.7 4.3 0 7.7 3.5 7.7 7.7S16.8 17 12.6 17z' }),
    _react2.default.createElement('path', { d: 'M12.8 8.7c-1.2-.3-1.6-.7-1.6-1.2 0-.6.6-1 1.5-1 1 0 1.3.5 1.4 1.2h1.2c0-.9-.6-1.8-1.8-2.1V4.3h-1.6v1.2c-1.1.2-1.9.9-1.9 2 0 1.3 1 1.9 2.6 2.3 1.4.3 1.6.8 1.6 1.3 0 .4-.3 1-1.5 1-1.1 0-1.6-.5-1.6-1.2H9.8c.1 1.2 1 1.9 2 2.1v1.2h1.6V13c1.1-.2 1.9-.8 1.9-2 .1-1.5-1.3-2-2.5-2.3z' })
  );
};

exports.default = IconBidProcess;