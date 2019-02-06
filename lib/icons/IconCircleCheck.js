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

var IconCircleCheck = function IconCircleCheck(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('rect', { x: '0.5', y: '0.5', fill: 'none', fillRule: 'evenodd', clipRule: 'evenodd', width: '23', height: '23' }),
    _react2.default.createElement('circle', { cx: '12', cy: '12', r: '11.5' }),
    _react2.default.createElement('polygon', { fill: '#ffffff', points: '17.053,6.513 9.762,13.797 6.947,10.988 5.106,12.829 9.763,17.487 18.894,8.355' })
  );
};

exports.default = IconCircleCheck;