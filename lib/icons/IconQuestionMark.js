'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconQuestionMark = function IconQuestionMark(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M10,19h3v3h-3V19 M12,2c5.4,0.2,7.7,5.6,4.5,9.7c-0.8,1-2.2,1.7-2.8,2.5C13,15,13,16,13,17h-3 c0-1.7,0-3.1,0.7-4.1c0.7-1,2-1.6,2.8-2.2C15.9,8.4,15.3,5.3,12,5c-1.7,0-3,1.3-3,3H6C6,4.7,8.7,2,12,2z"
  }));
};

var _default = IconQuestionMark;
exports.default = _default;