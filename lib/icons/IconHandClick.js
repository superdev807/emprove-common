'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconHandClick = function IconHandClick(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M18.277 9.908c-.76 0-1.374.611-1.389 1.367v-.961c0-.77-.624-1.395-1.395-1.395-.77 0-1.403.624-1.403 1.395v.006c-.003 0 .003 0 0 0V9.225a1.393 1.393 0 00-2.787-.014V2.704a1.395 1.395 0 10-2.79 0v11.071l-.256-.652L7 10.26a1.395 1.395 0 00-2.554 1.122l3.245 7.383a6.206 6.206 0 005.773 3.938 6.206 6.206 0 006.205-6.158l.003-.012v-5.23c0-.771-.625-1.395-1.395-1.395z",
    fill: "#fff"
  }), _react["default"].createElement("path", {
    d: "M18.277 9.533c-.397 0-.767.136-1.063.362a1.775 1.775 0 00-2.78-1.001 1.771 1.771 0 00-1.738-1.439c-.378 0-.729.121-1.018.326V2.704c0-.977-.794-1.771-1.77-1.771s-1.77.794-1.77 1.771v9.216l-.795-1.811a1.757 1.757 0 00-.979-.938 1.773 1.773 0 00-2.261 2.363l3.24 7.369a6.542 6.542 0 006.121 4.175c3.589 0 6.533-2.91 6.58-6.498a.387.387 0 00.003-.048v-5.229c0-.976-.794-1.77-1.77-1.77zm1.02 6.966a.322.322 0 00-.003.043c-.024 3.19-2.64 5.786-5.83 5.786-2.41 0-4.539-1.452-5.429-3.714L4.79 11.232a1.012 1.012 0 01-.017-.781 1.014 1.014 0 01.95-.65c.125 0 .25.023.37.07.254.099.453.29.562.539l1.253 2.85.256.652c.065.167.236.27.418.231a.374.374 0 00.306-.368V2.704c0-.562.457-1.021 1.02-1.021s1.02.458 1.02 1.021v7.629a.375.375 0 00.75 0V9.215a1.024 1.024 0 011.018-1.01c.562 0 1.02.457 1.02 1.02V11.328a.375.375 0 00.75 0v-1.013c0-.562.461-1.021 1.028-1.021.562 0 1.02.458 1.02 1.021v1.95a.375.375 0 00.75 0v-.982c.012-.561.457-1 1.014-1 .562 0 1.021.457 1.021 1.02v5.196z",
    fill: "#888"
  }));
};

var _default = IconHandClick;
exports["default"] = _default;