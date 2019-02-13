'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconCalendar = function IconCalendar(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M19,3.6h-0.6v-2h-2.8v2H8.4v-2H5.6v2H5C3.7,3.6,2.6,4.7,2.6,6v14c0,1.3,1.1,2.4,2.4,2.4h14 c1.3,0,2.4-1.1,2.4-2.4V6C21.4,4.7,20.3,3.6,19,3.6z M19,21.6H5c-0.9,0-1.6-0.7-1.6-1.6V9h17.2v11C20.6,20.9,19.9,21.6,19,21.6z"
  }), _react.default.createElement("rect", {
    x: "7",
    y: "11",
    width: "2",
    height: "2"
  }), _react.default.createElement("rect", {
    x: "11",
    y: "11",
    width: "2",
    height: "2"
  }), _react.default.createElement("rect", {
    x: "15",
    y: "11",
    width: "2",
    height: "2"
  }));
};

var _default = IconCalendar;
exports.default = _default;