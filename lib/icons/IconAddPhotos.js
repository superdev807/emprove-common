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

var IconAddPhotos = function IconAddPhotos(props) {
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
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', {
              d: 'M21.238,21.497H2.761c-1.156,0-2.097-0.94-2.097-2.097V4.6c0-1.156,0.94-2.097,2.097-2.097h18.478 c1.156,0,2.098,0.94,2.098,2.097v14.8C23.336,20.556,22.395,21.497,21.238,21.497z M2.761,3.253 c-0.742,0-1.347,0.604-1.347,1.347v14.8c0,0.742,0.604,1.347,1.347,1.347h18.478c0.743,0,1.348-0.604,1.348-1.347V4.6 c0-0.742-0.604-1.347-1.348-1.347H2.761z'
            })
          )
        ),
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('polygon', {
              points: '17.383,12.919 12.919,12.919 12.919,17.383 11.081,17.383 11.081,12.919 6.617,12.919 6.617,11.081 11.081,11.081 11.081,6.617 12.919,6.617 12.919,11.081 17.383,11.081 \t\t\t\t'
            })
          )
        )
      )
    )
  );
};

exports.default = IconAddPhotos;