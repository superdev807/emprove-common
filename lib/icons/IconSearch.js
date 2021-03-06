'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconSearch = function IconSearch(props) {
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
    d: "M21.231,19.876c0,0-4.738-4.738-4.879-4.879c-0.106-0.106-0.252-0.11-0.252-0.11h-0.757l-0.2-0.193 c1.349-1.374,2.184-3.254,2.184-5.327c0-4.196-3.413-7.609-7.609-7.609S2.108,5.17,2.108,9.367s3.413,7.609,7.609,7.609 c1.716,0,3.295-0.577,4.569-1.539l0.247,0.257v0.754c0,0-0.019,0.126,0.103,0.247c0.11,0.11,4.828,4.817,4.828,4.817 c0.471,0.472,1.235,0.473,1.707,0.002c0.251-0.25,0.359-0.582,0.344-0.91C21.523,20.342,21.432,20.077,21.231,19.876z M2.858,9.367 c0-3.782,3.077-6.859,6.859-6.859s6.859,3.077,6.859,6.859s-3.077,6.859-6.859,6.859S2.858,13.149,2.858,9.367z"
  }));
};

var _default = IconSearch;
exports["default"] = _default;