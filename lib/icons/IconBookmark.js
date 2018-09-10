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

var IconBookmark = function IconBookmark(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', width: '24', height: '24', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M0,0h24v24H0V0z', fill: 'none' }),
    _react2.default.createElement('path', {
      d: 'M20.31,1.468h-2.203c-0.011,0-0.021,0.006-0.032,0.007V1.11c0-0.207-0.168-0.375-0.375-0.375h-5.295 c-0.207,0-0.375,0.168-0.375,0.375v0.358H5.104c-0.986,0-1.788,0.802-1.788,1.788v18.322c0,0.001,0,0.002,0,0.003s0,0.002,0,0.003 c0,0.002,0.001,0.004,0.001,0.006c0.007,0.924,0.76,1.675,1.685,1.675h14.186c0.207,0,0.375-0.168,0.375-0.375v-2.344h0.747 c0.207,0,0.375-0.168,0.375-0.375V1.843C20.685,1.636,20.517,1.468,20.31,1.468z M12.779,1.485h4.545v10.99l-2.115-1.947 c-0.072-0.065-0.163-0.099-0.254-0.099c-0.096,0-0.19,0.036-0.264,0.108l-1.912,1.893V1.485z M5.104,2.218h6.926V13.33 c0,0.151,0.091,0.288,0.23,0.346c0.047,0.02,0.096,0.029,0.145,0.029c0.097,0,0.192-0.038,0.264-0.108l2.297-2.273l2.48,2.283 c0.109,0.1,0.271,0.126,0.404,0.067c0.137-0.061,0.225-0.195,0.225-0.344V2.212c0.011,0.001,0.021,0.007,0.032,0.007h1.828v17.578 H5.104c-0.388,0-0.745,0.127-1.038,0.338V3.256C4.066,2.684,4.531,2.218,5.104,2.218z M18.813,22.515H5.002 c-0.516,0-0.934-0.418-0.936-0.934c0.002-0.571,0.466-1.035,1.037-1.035h13.709V22.515z'
    })
  );
};

exports.default = IconBookmark;