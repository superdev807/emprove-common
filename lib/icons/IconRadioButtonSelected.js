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

var IconRadioButtonSelected = function IconRadioButtonSelected(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ id: 'Layer_1', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M12 3.667A8.336 8.336 0 0 0 3.667 12c0 4.6 3.733 8.333 8.333 8.333S20.333 16.6 20.333 12 16.6 3.667 12 3.667zm0 15A6.665 6.665 0 0 1 5.333 12c0-3.683 2.983-6.667 6.667-6.667S18.667 8.317 18.667 12A6.666 6.666 0 0 1 12 18.667z' }),
    _react2.default.createElement('circle', { cx: 12, cy: 12, r: 4.167 }),
    _react2.default.createElement('path', { d: 'M2 2h20v20H2V2z', fill: 'none' })
  );
};

exports.default = IconRadioButtonSelected;