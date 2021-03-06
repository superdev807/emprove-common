'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconSiteVisitTimeSlot = function IconSiteVisitTimeSlot(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M4.315 10.556h9.473a.375.375 0 0 0 0-.75H4.315a.375.375 0 0 0 0 .75z"
  }), _react["default"].createElement("path", {
    d: "M18.463 10.849V4.237a2.28 2.28 0 0 0-2.278-2.277H12.46C11.935.812 10.786.057 9.524.057S7.116.811 6.59 1.96H2.866A2.28 2.28 0 0 0 .588 4.237V19.46a2.28 2.28 0 0 0 2.278 2.278h9.592a6.565 6.565 0 0 0 4.888 2.187 6.597 6.597 0 0 0 6.589-6.589c0-3.252-2.37-5.954-5.472-6.487zM9.525 2.335c.523 0 .951.428.951.952a.954.954 0 0 1-.951.951.954.954 0 0 1-.951-.951c0-.524.428-.952.951-.952zM2.866 20.988a1.53 1.53 0 0 1-1.528-1.528V4.237A1.53 1.53 0 0 1 2.866 2.71h1.449v3.756h10.432V2.71h1.438a1.53 1.53 0 0 1 1.528 1.527v6.528c-.122-.007-.243-.019-.367-.019a6.6 6.6 0 0 0-6.071 4.028h-6.96a.375.375 0 0 0 0 .75h6.701a6.561 6.561 0 0 0-.259 1.811c0 .153.013.302.023.452H4.315a.375.375 0 0 0 0 .75h6.557c.165.892.508 1.722.994 2.45h-9zm14.48 2.187a5.817 5.817 0 0 1-4.332-1.938.373.373 0 0 0-.185-.207 5.813 5.813 0 0 1-1.322-3.694c0-3.22 2.619-5.839 5.839-5.839s5.839 2.619 5.839 5.839-2.619 5.839-5.839 5.839z"
  }), _react["default"].createElement("path", {
    d: "M17.696 13.835h-1.05v4.2l3.675 2.206.525-.862-3.15-1.869z"
  }));
};

var _default = IconSiteVisitTimeSlot;
exports["default"] = _default;