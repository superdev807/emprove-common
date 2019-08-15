'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconMoreInfo = function IconMoreInfo(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M24 0H0v24h24V0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M12 10.132a1.868 1.868 0 1 0 0 3.735 1.868 1.868 0 0 0 0-3.735M5.151 10.132a1.868 1.868 0 1 0 0 3.735 1.868 1.868 0 0 0 0-3.735"
  }), _react["default"].createElement("circle", {
    cx: 18.849,
    cy: 12,
    r: 1.868
  }));
};

var _default = IconMoreInfo;
exports["default"] = _default;