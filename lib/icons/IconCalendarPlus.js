'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconCalendarPlus = function IconCalendarPlus(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react["default"].createElement("path", {
    d: "M18.818,3.833h-0.599V2.261c0-0.207-0.168-0.375-0.375-0.375h-1.948c-0.207,0-0.375,0.168-0.375,0.375v1.572 H8.479V2.261c0-0.207-0.168-0.375-0.375-0.375H6.157c-0.207,0-0.375,0.168-0.375,0.375v1.572h-0.6 c-1.275,0-2.312,1.042-2.312,2.323L2.86,19.792c0,1.28,1.042,2.322,2.322,2.322h13.636c1.281,0,2.323-1.042,2.323-2.322V6.156 C21.141,4.875,20.099,3.833,18.818,3.833z M18.818,21.364H5.182c-0.867,0-1.572-0.705-1.572-1.572L3.617,9.578h16.774v10.214 C20.391,20.659,19.685,21.364,18.818,21.364z"
  }), _react["default"].createElement("polygon", {
    points: "12.683,11.632 11.317,11.632 11.317,14.949 8,14.949 8,16.314 11.317,16.314 11.317,19.632 12.683,19.632 12.683,16.314 16,16.314 16,14.949 12.683,14.949"
  }));
};

var _default = IconCalendarPlus;
exports["default"] = _default;