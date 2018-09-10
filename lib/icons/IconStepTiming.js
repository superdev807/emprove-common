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

var IconStepTiming = function IconStepTiming(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { fill: 'none', d: 'M0,0h24v24H0V0z' }),
    _react2.default.createElement('path', { d: 'M13.1,1.9v1.3c4.8,0,8.7,3.9,8.7,8.7s-3.9,8.7-8.7,8.7c-4.3,0-7.9-3.2-8.6-7.3l2.2,1.4l0.6-1l-4.1-2.5 l-2.5,4.1l1,0.6l1.5-2.3c0.8,4.8,4.9,8.5,9.9,8.5c5.6,0,10.1-4.5,10.1-10.1S18.7,1.9,13.1,1.9z' }),
    _react2.default.createElement('polygon', { points: '10.7,15.6 13.9,12.1 13.9,8.5 11.9,8.5 11.9,11.3 9.2,14.2     ' }),
    _react2.default.createElement('rect', { x: '18.7', y: '11.6', width: '1.7', height: '0.8' }),
    _react2.default.createElement('rect', { x: '12.8', y: '17.5', width: '0.8', height: '1.7' }),
    _react2.default.createElement('rect', { x: '12.8', y: '4.8', width: '0.8', height: '1.7' }),
    _react2.default.createElement('rect', { x: '7.9', y: '16.1', transform: 'matrix(0.7071 -0.7071 0.7071 0.7071 -9.0831 11.0088)', width: '1.7', height: '0.8' }),
    _react2.default.createElement('rect', { x: '16.8', y: '7.2', transform: 'matrix(0.7071 -0.7071 0.7071 0.7071 -0.1447 14.7113)', width: '1.7', height: '0.8' }),
    _react2.default.createElement('rect', { x: '8.4', y: '6.7', transform: 'matrix(0.7071 -0.7071 0.7071 0.7071 -2.7627 8.3908)', width: '0.8', height: '1.7' }),
    _react2.default.createElement('rect', { x: '17.3', y: '15.6', transform: 'matrix(0.7071 -0.7071 0.7071 0.7071 -6.4651 17.3293)', width: '0.8', height: '1.7' })
  );
};

exports.default = IconStepTiming;