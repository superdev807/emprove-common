'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconHomeAreaAll = function IconHomeAreaAll(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    className: "primary",
    fill: "#fff",
    d: "M4.036 20.403h14.387V10.92L11.04 4.437l-7.004 6.166z"
  }), _react["default"].createElement("path", {
    className: "gray",
    fill: "#fff",
    d: "M21.704 21.153h-2.906a.375.375 0 0 1-.375-.375v-9.859l-.789-.698a.374.374 0 0 1-.127-.281V5.73c0-.207.168-.375.375-.375h3.822c.207 0 .375.168.375.375v15.049a.374.374 0 0 1-.375.374z"
  }), _react["default"].createElement("path", {
    d: "M22.421 2.847h-5.256a.375.375 0 0 0-.375.375V5.73c0 .207.168.375.375.375h.342v2.859L11.37 3.562a.5.5 0 0 0-.66 0l-9.461 8.326a.499.499 0 1 0 .66.75l1.376-1.211v9.35c0 .207.168.375.375.375h18.044a.375.375 0 0 0 .375-.375V6.104h.342a.375.375 0 0 0 .375-.375V3.222a.375.375 0 0 0-.375-.375zm-4.881.75h4.506v1.758H17.54V3.597zM4.036 10.768l7.005-6.165 7.383 6.497v9.303H4.036v-9.635zm17.293 9.635h-2.156V11.76l.998.878a.497.497 0 0 0 .705-.045.498.498 0 0 0-.045-.705l-2.574-2.265V6.104h3.072v14.299z"
  }), _react["default"].createElement("path", {
    d: "M10.854 7.073h.75v2.149h-.75zM14.808 11.481h.75v2.149h-.75zM6.901 11.481h.75v2.149h-.75z"
  }), _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fill: "#fff",
    d: "M9.096 16.316h4.267v4.088H9.096z"
  }), _react["default"].createElement("path", {
    d: "M13.738 21.153H8.721a.375.375 0 0 1-.375-.375V15.94c0-.207.168-.375.375-.375h5.017c.207 0 .375.168.375.375v4.838a.375.375 0 0 1-.375.375zm-4.642-.75h4.267v-4.088H9.096v4.088z"
  }), _react["default"].createElement("path", {
    d: "M10.854 15.941h.75v4.838h-.75z"
  })));
};

var _default = IconHomeAreaAll;
exports["default"] = _default;