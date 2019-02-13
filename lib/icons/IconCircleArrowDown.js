'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconCircleArrowDown = function IconCircleArrowDown(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("circle", {
    cx: 12.234,
    cy: 12,
    r: 10.286,
    fill: "#fff"
  }), _react.default.createElement("path", {
    d: "M12.234 22.5c-5.79 0-10.5-4.71-10.5-10.5s4.71-10.5 10.5-10.5 10.5 4.71 10.5 10.5-4.71 10.5-10.5 10.5zm0-20.571C6.68 1.929 2.162 6.447 2.162 12S6.68 22.071 12.234 22.071 22.305 17.553 22.305 12 17.787 1.929 12.234 1.929z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M8.403 9.643l3.83 3.822 3.83-3.822 1.177 1.177-5.007 5.007-5.006-5.007 1.176-1.177z"
  })));
};

var _default = IconCircleArrowDown;
exports.default = _default;