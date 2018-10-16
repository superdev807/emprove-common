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

var IconEncircledAdd = function IconEncircledAdd(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    _react2.default.createElement('path', { d: 'M12 2.155c-5.429 0-9.845 4.416-9.845 9.845S6.571 21.844 12 21.844s9.845-4.416 9.845-9.845S17.429 2.155 12 2.155zm0 18.939c-5.015 0-9.095-4.08-9.095-9.095S6.985 2.905 12 2.905s9.095 4.08 9.095 9.095-4.08 9.094-9.095 9.094z' }),
    _react2.default.createElement('path', { d: 'M13.148 7.782H10.83v3.055H7.782v2.211h3.048v3.17h2.318v-3.17h3.07v-2.211h-3.07z' })
  );
};

exports.default = IconEncircledAdd;