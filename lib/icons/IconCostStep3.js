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

var IconCostStep3 = function IconCostStep3(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 52 52' }, props),
    _react2.default.createElement('path', { d: 'M26 4.3C14 4.3 4.3 14 4.3 26S14 47.7 26 47.7 47.7 38 47.7 26 38 4.3 26 4.3z' }),
    _react2.default.createElement('path', { fill: 'none', d: 'M0 0h52v52H0V0z' }),
    _react2.default.createElement('path', { fill: 'none', d: 'M14 14h24v24H14z' }),
    _react2.default.createElement('path', {
      fill: '#fff',
      d: 'M35.7 16H16.3c-.2 0-.4.2-.4.4v19.8c0 .2.2.4.4.4h19.5c.2 0 .4-.2.4-.4V16.4c-.1-.2-.2-.4-.5-.4zM16.6 28h10.2v3.5H16.6V28zm10.3-.7h-1.7v-2h1.7v2zm-2.5-.8l-7.1-9.8h7.1v9.8zm-7.8-9.4L24 27.3h-7.4V17.1zm11 8.1h2.1v10.5h-2.1V25.2zm2.9 0h2.1v10.5h-2.1V25.2zm2.8 0h2.1v10.5h-2.1V25.2zm-8.2-.7v-2.6l5.1-1.9 5.1 1.9v2.6H25.1zm10.3-3.4l-5-1.8h-.3l-5 1.8v-4.3h10.2v4.3zM16.6 32.3h10.2v3.5H16.6v-3.5z'
    })
  );
};

exports.default = IconCostStep3;