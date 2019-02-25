'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconUL2Refinish = function IconUL2Refinish(props) {
  var primary = props.primary || '#888';
  var secondary = props.secondary || 'none';
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: 0,
    y: 0,
    viewBox: "0 0 24 24",
    xmlSpace: "preserve"
  }, props), _react.default.createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M12 1.375C6.141 1.375 1.375 6.142 1.375 12S6.141 22.625 12 22.625 22.625 17.859 22.625 12 17.858 1.375 12 1.375zm0 20.5c-5.445 0-9.875-4.43-9.875-9.875S6.554 2.125 12 2.125s9.875 4.43 9.875 9.875-4.43 9.875-9.875 9.875z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M18.458 7.849h-.785V6.492a.375.375 0 0 0-.375-.375H7.244a.375.375 0 0 0-.375.375v1.357H5.542a.375.375 0 0 0-.375.375v4.021c0 .192.146.354.336.373l7.088.738v1.25h-.155c-.608 0-1.104.495-1.104 1.104v2.998c0 .609.495 1.104 1.104 1.104h1.018c.608 0 1.104-.495 1.104-1.104V15.71c0-.608-.495-1.104-1.104-1.104h-.112v-1.588a.375.375 0 0 0-.336-.373l-7.088-.738V8.599h.951v1.357c0 .207.168.375.375.375h8.189v1.04a.646.646 0 1 0 1.292 0v-1.04h.572a.375.375 0 0 0 .375-.375V8.599h.785a.375.375 0 0 0 .001-.75zm-4.651 7.861v2.998a.354.354 0 0 1-.354.354h-1.018a.355.355 0 0 1-.354-.354V15.71c0-.195.158-.354.354-.354h1.018a.355.355 0 0 1 .354.354zM7.619 6.867h6.916l-2.424 2.715H7.619V6.867z"
  }));
};

var _default = IconUL2Refinish;
exports.default = _default;