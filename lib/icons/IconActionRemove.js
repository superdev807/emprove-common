'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconActionRemove = function IconActionRemove(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M12 1.4C6.1 1.4 1.4 6.1 1.4 12S6.1 22.6 12 22.6 22.6 17.9 22.6 12 17.9 1.4 12 1.4zm0 20.5c-5.4 0-9.9-4.4-9.9-9.9S6.6 2.1 12 2.1s9.9 4.4 9.9 9.9-4.5 9.9-9.9 9.9z"
  }), _react["default"].createElement("path", {
    fill: "green",
    d: "M15.5 7.3L12 10.8 8.5 7.3 7.3 8.5l3.5 3.5-3.5 3.5 1.2 1.2 3.5-3.5 3.5 3.5 1.2-1.2-3.5-3.5 3.5-3.5z"
  }));
};

var _default = IconActionRemove;
exports["default"] = _default;