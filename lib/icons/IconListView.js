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

var IconListView = function IconListView(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 44 44', width: '24', height: '24' }, props),
    _react2.default.createElement('path', { d: 'M0 0h44v44H0V0z', fill: 'none' }),
    _react2.default.createElement('circle', { cx: '5.044', cy: '9.06', r: '3.025' }),
    _react2.default.createElement('path', { d: 'M16.099 11.077h23.865c1.115 0 2.017-.902 2.017-2.017s-.902-2.017-2.017-2.017H16.099a2.016 2.016 0 1 0 0 4.034z' }),
    _react2.default.createElement('circle', { cx: '5.044', cy: '22', r: '3.025' }),
    _react2.default.createElement('path', { d: 'M39.964 19.984H16.099c-1.115 0-2.017.902-2.017 2.017s.902 2.017 2.017 2.017h23.865c1.115 0 2.017-.902 2.017-2.017s-.902-2.017-2.017-2.017z' }),
    _react2.default.createElement('circle', { cx: '5.044', cy: '34.94', r: '3.025' }),
    _react2.default.createElement('path', { d: 'M39.964 32.923H16.099c-1.115 0-2.017.902-2.017 2.017s.902 2.017 2.017 2.017h23.865c1.115 0 2.017-.902 2.017-2.017s-.902-2.017-2.017-2.017z' })
  );
};

exports.default = IconListView;