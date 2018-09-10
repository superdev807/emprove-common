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

var IconWriteComments = function IconWriteComments(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', {
      d: 'M19.206,0.635h-9.47c-0.017,0-0.033,0.008-0.05,0.01C9.671,0.647,9.657,0.65,9.642,0.654 C9.579,0.67,9.519,0.697,9.471,0.745l-6,5.999C3.424,6.791,3.397,6.851,3.38,6.914C3.376,6.93,3.373,6.944,3.371,6.96 c-0.002,0.017-0.01,0.032-0.01,0.049v15.139c0,0.671,0.546,1.217,1.218,1.217h14.817c0.685,0,1.241-0.557,1.241-1.241V2.056 C20.638,1.273,19.995,0.635,19.206,0.635z M7.002,4.275l2.36-2.359v4.719h-4.72L7.002,4.275z M19.888,22.124 c0,0.271-0.221,0.491-0.491,0.491H4.579c-0.258,0-0.468-0.209-0.468-0.467V7.384h5.625c0.207,0,0.375-0.168,0.375-0.375V1.385 h9.095c0.376,0,0.682,0.301,0.682,0.671V22.124z'
    }),
    _react2.default.createElement('polygon', {
      points: '12.785,9.405 11.215,9.405 11.215,13.215 7.405,13.215 7.405,14.784 11.215,14.784 11.215,18.595  12.785,18.595 12.785,14.784 16.596,14.784 16.596,13.215 12.785,13.215 \t\t'
    })
  );
};

exports.default = IconWriteComments;