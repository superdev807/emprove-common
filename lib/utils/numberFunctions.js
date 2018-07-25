'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberFormatCustom = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNumberFormat = require('react-number-format');

var _reactNumberFormat2 = _interopRequireDefault(_reactNumberFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NumberFormatCustom = function NumberFormatCustom(_ref) {
  var inputRef = _ref.inputRef,
      onChange = _ref.onChange,
      other = _objectWithoutProperties(_ref, ['inputRef', 'onChange']);

  return _react2.default.createElement(_reactNumberFormat2.default, _extends({}, other, {
    ref: inputRef,
    onValueChange: function onValueChange(values) {
      onChange({
        target: {
          value: values.value
        }
      });
    },
    thousandSeparator: true
  }));
};
exports.NumberFormatCustom = NumberFormatCustom;