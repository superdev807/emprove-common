'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconProjectSummary = function IconProjectSummary(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M21.224 5.285a.37.37 0 0 0-.1-.216L16.676.629a.363.363 0 0 0-.215-.099c-.017-.002-.032-.01-.05-.01H3.141a.375.375 0 0 0-.375.375v22.214c0 .207.168.375.375.375h17.718a.375.375 0 0 0 .375-.375V5.334c0-.017-.008-.033-.01-.049zm-4.438-3.487l1.232 1.229 1.935 1.932h-3.167V1.798zM3.516 22.732V1.268h12.52v3.69H6.365a.375.375 0 0 0 0 .75h14.119v17.023H3.516z",
    fill: "#888"
  }), _react["default"].createElement("path", {
    d: "M14.469 8.709a.375.375 0 0 0 0-.75H6.365a.375.375 0 0 0 0 .75h8.104zM17.635 13.348l-3.34 5.12-3.305-1.904-2.173 3.095H7.161l3.496-4.944 3.264 1.856 3.158-4.813-.852-.56-2.633 4.014-3.236-1.84-3.427 4.846v-7.361h-.75v9.552h11.454v-.75z",
    fill: "#878787"
  }));
};

var _default = IconProjectSummary;
exports["default"] = _default;