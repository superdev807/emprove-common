'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconCircleArrowUp = function IconCircleArrowUp(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10.286,
    fill: "#fff"
  }), _react["default"].createElement("path", {
    className: "st2",
    d: "M12 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5zm0-20.571C6.447 1.929 1.929 6.447 1.929 12S6.447 22.071 12 22.071 22.071 17.553 22.071 12 17.553 1.929 12 1.929z"
  }), _react["default"].createElement("g", null, _react["default"].createElement("path", {
    className: "st2",
    d: "M15.83 14.235L12 10.413l-3.83 3.822-1.177-1.177L12 8.051l5.007 5.007-1.177 1.177z"
  })));
};

var _default = IconCircleArrowUp;
exports["default"] = _default;