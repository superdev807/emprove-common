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

var IconHeartWithCircle = function IconHeartWithCircle(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 36 36', width: '36', height: '36' }, props),
    _react2.default.createElement('circle', { cx: '18', cy: '18', r: '16', fillRule: 'evenodd', clipRule: 'evenodd', fill: '#fff' }),
    _react2.default.createElement('path', { d: 'M18 35C8.626 35 1 27.374 1 18S8.626 1 18 1s17 7.626 17 17-7.626 17-17 17zm0-32C9.729 3 3 9.729 3 18s6.729 15 15 15 15-6.729 15-15S26.271 3 18 3z' }),
    _react2.default.createElement('path', { d: 'M22 11.178c-1.547 0-3.031.72-4 1.858a5.322 5.322 0 0 0-4-1.858c-2.738 0-4.889 2.151-4.889 4.889 0 3.36 3.022 6.098 7.6 10.258L18 27.489l1.289-1.173c4.578-4.151 7.6-6.889 7.6-10.249 0-2.738-2.151-4.889-4.889-4.889z' })
  );
};

exports.default = IconHeartWithCircle;