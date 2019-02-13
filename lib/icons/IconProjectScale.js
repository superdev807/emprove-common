'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconProjectScale = function IconProjectScale(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("rect", {
    fill: "none",
    width: "24",
    height: "24"
  }), _react.default.createElement("path", {
    d: "M20.3,5.8l-5.5-3.7C14.6,2,14.4,2,14.3,2.2L3.6,18.3c-0.1,0.1-0.1,0.2-0.1,0.3s0.1,0.2,0.2,0.2l5.5,3.7 c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.2-0.1,0.3-0.2L20.4,6.3c0.1-0.1,0.1-0.2,0.1-0.3C20.5,5.9,20.4,5.8,20.3,5.8z M9.3,21.6l-4.9-3.3 l1.7-2.6l2,1.3c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.2-0.1,0.3-0.2c0.1-0.2,0.1-0.4-0.1-0.5l-2-1.3l1.2-1.8l3.2,2.1 c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.2-0.1,0.3-0.2c0.1-0.2,0.1-0.4-0.1-0.5l-3.2-2.1l1.2-1.8l2,1.3c0.1,0,0.1,0.1,0.2,0.1 c0.1,0,0.2-0.1,0.3-0.2c0.1-0.2,0.1-0.4-0.1-0.5l-2-1.3L11,8.5l3.2,2.1c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.2-0.1,0.3-0.2 c0.1-0.2,0.1-0.4-0.1-0.5l-3.2-2.1l1.2-1.8l2,1.3c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.2-0.1,0.3-0.2c0.1-0.2,0.1-0.4-0.1-0.5l-2-1.3 l1.7-2.6l4.9,3.3L9.3,21.6z"
  }));
};

var _default = IconProjectScale;
exports.default = _default;