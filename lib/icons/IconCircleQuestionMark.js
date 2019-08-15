'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconCircleQuestionMark = function IconCircleQuestionMark(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 54 54",
    width: "24",
    height: "24"
  }, props), _react["default"].createElement("path", {
    d: "M27 1C12.664 1 1 12.664 1 27c0 14.337 11.664 26 26 26 14.337 0 26-11.663 26-26C53 12.664 41.337 1 27 1zm0 50C13.767 51 3 40.233 3 27S13.767 3 27 3s24 10.767 24 24-10.767 24-24 24z"
  }), _react["default"].createElement("path", {
    d: "M24.013 37.606h4.545v4.545h-4.545zM27.043 11.848a9.09 9.09 0 0 0-9.091 9.091h4.545a4.545 4.545 0 0 1 4.545-4.545c5.03.394 5.939 5.197 2.273 8.591-1.258 1-3.288 1.894-4.288 3.409-1.015 1.515-1.015 3.651-1.015 6.182h4.545c0-1.515 0-3.03 1.015-4.288 1-1.273 3.03-2.273 4.288-3.788 4.82-6.137 1.289-14.318-6.817-14.652z"
  }));
};

var _default = IconCircleQuestionMark;
exports["default"] = _default;