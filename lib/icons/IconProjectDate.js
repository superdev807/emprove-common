'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconProjectDate = function IconProjectDate(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M18.817 3.833h-.599V2.26a.375.375 0 0 0-.375-.375h-1.948a.375.375 0 0 0-.375.375v1.573H8.479V2.26a.375.375 0 0 0-.375-.375H6.156a.375.375 0 0 0-.375.375v1.573h-.598A2.32 2.32 0 0 0 2.87 6.156l-.01 13.635a2.326 2.326 0 0 0 2.323 2.323h13.635a2.326 2.326 0 0 0 2.323-2.323V6.157a2.326 2.326 0 0 0-2.324-2.324zm1.574 15.958c0 .867-.706 1.573-1.573 1.573H5.183a1.575 1.575 0 0 1-1.573-1.573l.007-10.212h16.774v10.212z"
  }), _react["default"].createElement("path", {
    d: "M6.489 13.386h2.015a.11.11 0 0 0 .11-.11v-2.015a.11.11 0 0 0-.11-.11H6.489a.11.11 0 0 0-.11.11v2.015a.11.11 0 0 0 .11.11zM15.496 13.386h2.015a.11.11 0 0 0 .11-.11v-2.015a.11.11 0 0 0-.11-.11h-2.015a.11.11 0 0 0-.11.11v2.015c0 .061.049.11.11.11zM10.992 13.386h2.015a.11.11 0 0 0 .11-.11v-2.015a.11.11 0 0 0-.11-.11h-2.015a.11.11 0 0 0-.11.11v2.015c0 .061.049.11.11.11z"
  }));
};

var _default = IconProjectDate;
exports["default"] = _default;