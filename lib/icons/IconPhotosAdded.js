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

var IconPhotosAdded = function IconPhotosAdded(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement('path', { d: 'M0,0h24v24H0V0z', style: { fill: 'none' } })
        )
      ),
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', {
          d: 'M8.748,10.669c0.744,0,1.347-0.604,1.347-1.349c0-0.745-0.603-1.349-1.347-1.349 c-0.744,0-1.347,0.604-1.347,1.349C7.401,10.065,8.004,10.669,8.748,10.669z'
        }),
        _react2.default.createElement('polygon', { points: '13.628,13.2 11.306,10.635 6.146,16.029 17.854,16.029 14.328,12.497 \t\t' }),
        _react2.default.createElement('path', {
          d: 'M21.239,2.503H2.761c-1.156,0-2.097,0.94-2.097,2.097v14.8c0,1.156,0.94,2.097,2.097,2.097h18.478 c1.156,0,2.097-0.94,2.097-2.097V4.6C23.335,3.444,22.395,2.503,21.239,2.503z M22.585,19.4c0,0.742-0.604,1.347-1.347,1.347 H2.761c-0.742,0-1.347-0.604-1.347-1.347V4.6c0-0.742,0.604-1.347,1.347-1.347h18.478c0.742,0,1.347,0.604,1.347,1.347V19.4z'
        })
      )
    )
  );
};

exports.default = IconPhotosAdded;