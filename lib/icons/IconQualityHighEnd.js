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

var IconQualityHighEnd = function IconQualityHighEnd(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', {
      d: 'M21.158 24H2.842A2.843 2.843 0 0 1 0 21.158V2.842A2.843 2.843 0 0 1 2.842 0h18.315A2.843 2.843 0 0 1 24 2.842v18.315A2.843 2.843 0 0 1 21.158 24z',
      fill: '#fff'
    }),
    _react2.default.createElement('path', { d: 'M21.158 0H2.842A2.843 2.843 0 0 0 0 2.842v18.315A2.843 2.843 0 0 0 2.842 24h18.315A2.843 2.843 0 0 0 24 21.158V2.842A2.843 2.843 0 0 0 21.158 0zm-7.422 1.368c.542 4.582.982 5.021 5.564 5.564-4.582.542-5.021.982-5.564 5.564-.542-4.582-.982-5.021-5.564-5.564 4.582-.542 5.021-.982 5.564-5.564zM1 9.795c3.818-.452 4.185-.818 4.636-4.636.452 3.818.818 4.185 4.636 4.636-3.818.452-4.184.818-4.636 4.636-.451-3.817-.818-4.184-4.636-4.636zm8.917 12.837c-.542-4.582-.982-5.021-5.564-5.564 4.582-.542 5.021-.982 5.564-5.564.542 4.582.982 5.021 5.564 5.564-4.582.542-5.021.982-5.564 5.564zm8.447-3.837c-.452-3.818-.818-4.185-4.636-4.636 3.818-.452 4.185-.818 4.636-4.636.452 3.818.818 4.185 4.636 4.636-3.818.452-4.185.818-4.636 4.636z' })
  );
};

exports.default = IconQualityHighEnd;