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

var IconStyleboardColors = function IconStyleboardColors(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ id: 'prefix__Layer_1', x: 0, y: 0, viewBox: '0 0 24 24', xmlSpace: 'preserve' }, props),
    _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    _react2.default.createElement('path', { fill: '#44c1f5', d: 'M13 13h8v8h-8z' }),
    _react2.default.createElement('path', { fill: '#fff', d: 'M21.1 21.1h-8.2v-8.2h8.2v8.2zm-8-.2h7.8v-7.8h-7.8v7.8z' }),
    _react2.default.createElement('path', { fill: '#6167d5', d: 'M3 13h8v8H3z' }),
    _react2.default.createElement('path', { fill: '#fff', d: 'M11.1 21.1H2.9v-8.2h8.2v8.2zm-8-.2h7.8v-7.8H3.1v7.8z' }),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { fill: '#8c68b8', d: 'M3 3h8v8H3z' }),
      _react2.default.createElement('path', { fill: '#fff', d: 'M11.1 11.1H2.9V2.9h8.2v8.2zm-8-.2h7.8V3.1H3.1v7.8z' })
    ),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { transform: 'rotate(-44.952 16.66 7.343)', fill: '#ffc36f', d: 'M12.66 3.342h8.001v8.001H12.66z' }),
      _react2.default.createElement('path', {
        fill: '#fff',
        d: 'M16.66 13.141L10.859 7.34l5.801-5.791 5.801 5.791-5.801 5.801zM11.141 7.34l5.519 5.519 5.519-5.519-5.519-5.509-5.519 5.509z'
      })
    )
  );
};

exports.default = IconStyleboardColors;