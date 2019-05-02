'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconMyProfile = function IconMyProfile(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react["default"].createElement("path", {
    d: "M12,12.669c2.804,0,5.085-2.28,5.085-5.084S14.804,2.5,12,2.5S6.915,4.781,6.915,7.585 S9.196,12.669,12,12.669z M12,3.25c2.391,0,4.335,1.944,4.335,4.335c0,2.39-1.944,4.334-4.335,4.334S7.665,9.975,7.665,7.585 C7.665,5.194,9.609,3.25,12,3.25z"
  }), _react["default"].createElement("path", {
    d: "M12,14.294c-4.416,0-7.875,1.922-7.875,4.375V21.5h15.75v-2.831C19.875,16.216,16.416,14.294,12,14.294z M19.125,20.75H4.875v-2.081c0-1.965,3.263-3.625,7.125-3.625s7.125,1.66,7.125,3.625V20.75z"
  }));
};

var _default = IconMyProfile;
exports["default"] = _default;