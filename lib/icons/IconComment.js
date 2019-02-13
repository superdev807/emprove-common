'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconComment = function IconComment(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M20.8,1.4H3.3C2.6,1.4,2,1.9,2,2.6v13.6c0,0.7,0.6,1.3,1.3,1.3h4.5v4.3c0,0.3,0.2,0.6,0.5,0.7 c0.1,0,0.2,0.1,0.3,0.1c0.2,0,0.4-0.1,0.6-0.2l4.8-4.9h6.8c0.7,0,1.2-0.6,1.2-1.2V2.5C22,1.9,21.5,1.4,20.8,1.4z M21.3,16.3 c0,0.3-0.2,0.5-0.5,0.5h-6.9c-0.1,0-0.2,0-0.3,0.1l-5,5l0,0v-4.7c0-0.2-0.2-0.4-0.4-0.4H3.3c-0.3,0-0.6-0.2-0.6-0.6V2.6 c0-0.3,0.2-0.5,0.5-0.5h17.7c0.2,0,0.4,0.2,0.4,0.4V16.3L21.3,16.3z"
  }), _react.default.createElement("rect", {
    x: "16",
    y: "8.3",
    width: "2.6",
    height: "2.6"
  }), _react.default.createElement("rect", {
    x: "10.7",
    y: "8.3",
    width: "2.6",
    height: "2.6"
  }), _react.default.createElement("rect", {
    x: "5.4",
    y: "8.3",
    width: "2.7",
    height: "2.6"
  }));
};

var _default = IconComment;
exports.default = _default;