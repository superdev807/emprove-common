'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberMask = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTextMask = require('react-text-mask');

var _reactTextMask2 = _interopRequireDefault(_reactTextMask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// mask for a number field up to 9 digits
var NumberMask = function NumberMask(_ref) {
  var inputRef = _ref.inputRef,
      inputProps = _objectWithoutProperties(_ref, ['inputRef']);

  return _react2.default.createElement(_reactTextMask2.default, _extends({}, inputProps, { mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/], guide: false, showMask: true }));
};
exports.NumberMask = NumberMask;