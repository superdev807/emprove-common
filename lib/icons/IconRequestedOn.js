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

var IconRequestedOn = function IconRequestedOn(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { fill: 'none', d: 'M0,0h24v24H0V0z' }),
    _react2.default.createElement('path', { d: 'M21.3,2.3H8.1c-1.1,0-2,0.9-2,2v4H4.9v-1c0-0.2-0.2-0.4-0.4-0.4H3.1c-0.2,0-0.4,0.2-0.4,0.4v1H2.4 c-1,0-1.8,0.8-1.8,1.8v9.8c0,1,0.8,1.8,1.8,1.8h9.8c1,0,1.8-0.8,1.8-1.8v-3.6h7.4c1.1,0,2-0.9,2-2V4.4C23.4,3.3,22.5,2.3,21.3,2.3 z M13.2,19.9c0,0.6-0.5,1-1,1H2.4c-0.6,0-1-0.5-1-1v-8.2h4.7v6.6c0,0.1,0.1,0.3,0.2,0.3s0.2,0,0.4-0.1l3.2-2.2h3.3V19.9z M22.7,14.3c0,0.7-0.7,1.2-1.4,1.2H9.8H9.6l-2.7,1.8V4.4c0-0.7,0.6-1.3,1.3-1.3h13.2c0.7,0,1.3,0.6,1.3,1.3V14.3L22.7,14.3z' }),
    _react2.default.createElement('rect', { x: '9.8', y: '10.3', width: '1.3', height: '1.3' }),
    _react2.default.createElement('rect', { x: '12.3', y: '10.3', width: '5.2', height: '1.3' }),
    _react2.default.createElement('rect', { x: '9.8', y: '7', width: '9.9', height: '1.3' })
  );
};

exports.default = IconRequestedOn;