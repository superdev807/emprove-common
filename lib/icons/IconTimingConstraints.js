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

var IconTimingConstraints = function IconTimingConstraints(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { fill: 'none', d: 'M0,0h24v24H0V0z' }),
    _react2.default.createElement('path', { d: 'M20.2,12.4V5.7c0-1.3-1-2.3-2.3-2.3h-0.6V1.8c0-0.2-0.2-0.4-0.4-0.4H15c-0.2,0-0.4,0.2-0.4,0.4v1.6h-7V1.8 c0-0.2-0.2-0.4-0.4-0.4H5.2C5,1.4,4.8,1.6,4.8,1.8v1.6H4.2c-1.3,0-2.3,1-2.3,2.3l0,13.6c0,1.3,1,2.3,2.3,2.3h8.6 c0.9,0.6,2.1,1,3.3,1c3.3,0,5.9-2.7,5.9-5.9C22.1,15,21.4,13.5,20.2,12.4z M2.7,19.3l0-10.7h16.8v3.2c-0.9-0.6-2.1-1-3.3-1 c-3.3,0-5.9,2.7-5.9,5.9c0,1.6,0.7,3.1,1.7,4.2H4.2C3.4,20.9,2.7,20.2,2.7,19.3z M16.2,21.9c-2.8,0-5.2-2.3-5.2-5.2 s2.3-5.2,5.2-5.2s5.2,2.3,5.2,5.2S19,21.9,16.2,21.9z' }),
    _react2.default.createElement('polygon', { points: '16.6,14.1 15.4,14.1 15.4,17.1 17.9,18.4 18.5,17.3 16.6,16.3' })
  );
};

exports.default = IconTimingConstraints;