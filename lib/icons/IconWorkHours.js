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

var IconWorkHours = function IconWorkHours(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('rect', { fill: 'none', width: '24', height: '24' }),
    _react2.default.createElement('path', { d: 'M12,1.2C6,1.2,1.2,6,1.2,12C1.2,18,6,22.8,12,22.8c6,0,10.8-4.9,10.8-10.8S18,1.2,12,1.2z M12,21.6 c-5.3,0-9.6-4.3-9.6-9.6S6.7,2.4,12,2.4s9.6,4.3,9.6,9.6S17.3,21.6,12,21.6z' }),
    _react2.default.createElement('polygon', { points: '12.5,6.6 10.9,6.6 10.9,13.1 16.6,16.5 17.4,15.2 12.5,12.3' })
  );
};

exports.default = IconWorkHours;