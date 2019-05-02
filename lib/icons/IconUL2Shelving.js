'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconUL2Shelving = function IconUL2Shelving(props) {
  var primary = props.primary || '#878787';
  var secondary = props.secondary || 'none';
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M20.742 13.526a.375.375 0 0 0 .375-.375v-2.313c0-.023-.009-.042-.013-.064-.003-.016-.004-.029-.009-.044a.379.379 0 0 0-.101-.166c-.003-.002-.003-.006-.005-.008l-3.342-2.929V2.074a.375.375 0 0 0-.375-.375H3.258a.375.375 0 0 0-.375.375v16.531a.37.37 0 0 0 .096.245.385.385 0 0 0 .082.122l3.266 3.22.002.001c.068.066.16.108.262.108h14.15a.375.375 0 0 0 .375-.375v-2.358c0-.023-.009-.042-.013-.064-.003-.016-.004-.029-.009-.044a.379.379 0 0 0-.101-.166c-.003-.002-.003-.006-.005-.008l-3.342-2.929v-2.83h3.096zm-.375-.75H7.237v-1.563h13.13v1.563zm-16.333-4.2l2.453 2.419v1.26L4.034 9.836v-1.26zm2.986 1.887L4.68 8.055h12.317l2.747 2.408H7.02zm9.877-8.014v4.855H3.792c-.017 0-.031.012-.048.014-.037-.009-.073 0-.111.002V2.449h13.264zM3.701 17.244l2.516 2.48v1.305l-2.516-2.48v-1.305zm16.666 4.307h-13.4v-1.608h13.4v1.608zM6.749 19.192l-2.4-2.47h12.578l2.817 2.47H6.749zm10.148-3.22H3.633v-5.478l2.965 2.923.002.001c.068.066.16.108.262.108h10.035v2.446z",
    fill: primary
  }));
};

var _default = IconUL2Shelving;
exports["default"] = _default;