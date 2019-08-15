'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconRadioButtonSelected = function IconRadioButtonSelected(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M12 3.667A8.336 8.336 0 0 0 3.667 12c0 4.6 3.733 8.333 8.333 8.333S20.333 16.6 20.333 12 16.6 3.667 12 3.667zm0 15A6.665 6.665 0 0 1 5.333 12c0-3.683 2.983-6.667 6.667-6.667S18.667 8.317 18.667 12A6.666 6.666 0 0 1 12 18.667z"
  }), _react["default"].createElement("circle", {
    cx: 12,
    cy: 12,
    r: 4.167
  }), _react["default"].createElement("path", {
    d: "M2 2h20v20H2V2z",
    fill: "none"
  }));
};

var _default = IconRadioButtonSelected;
exports["default"] = _default;