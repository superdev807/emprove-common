'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconTagMark = function IconTagMark(props) {
  var primary = props.primary || '#888';
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M15.928 2.5H8.072a.436.436 0 0 0-.436.436v18.128a.435.435 0 0 0 .743.31l3.489-3.454 3.765 3.465a.435.435 0 0 0 .731-.321V2.936a.436.436 0 0 0-.436-.436z",
    fill: primary
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }));
};

var _default = IconTagMark;
exports["default"] = _default;