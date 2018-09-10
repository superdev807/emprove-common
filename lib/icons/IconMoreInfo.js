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

var IconMoreInfo = function IconMoreInfo(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ id: 'Layer_1', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M24 0H0v24h24V0z', fill: 'none' }),
    _react2.default.createElement('path', { d: 'M12 10.132a1.868 1.868 0 1 0 0 3.735 1.868 1.868 0 0 0 0-3.735M5.151 10.132a1.868 1.868 0 1 0 0 3.735 1.868 1.868 0 0 0 0-3.735' }),
    _react2.default.createElement('circle', { cx: 18.849, cy: 12, r: 1.868 })
  );
};

exports.default = IconMoreInfo;