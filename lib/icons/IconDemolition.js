'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconDemolition = function IconDemolition(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M12 1.351c-5.858 0-10.625 4.767-10.625 10.625S6.141 22.601 12 22.601s10.625-4.767 10.625-10.625S17.858 1.351 12 1.351zM8.915 8.715l-1.04-.595 1.678-2.932 1.04.595-1.678 2.932zm2.63-3.085l3.952 2.263-2.28 3.982-3.952-2.262 2.28-3.983zm4.302 3.161l1.039.594-1.678 2.932-1.039-.594 1.678-2.932zm-4.792 2.711l-4.842 8.459a9.793 9.793 0 0 1-.347-.26l4.816-8.413.373.214zm2.313 10.243l1.259-1.627-1.205-1.832 1.926-1.402s-.781-3.002-.812-3.156c-.024-.118-.04-.1-.063-.008l-.693 2.9-2.419 1.119.952 1.349-2.219 2.576a9.805 9.805 0 0 1-3.257-1.284l4.868-8.505 1.464.838a.373.373 0 0 0 .512-.138l.115-.2 1.364.781a.373.373 0 0 0 .512-.138l2.051-3.582a.375.375 0 0 0-.139-.512L16.22 8.14l.115-.2a.375.375 0 0 0-.139-.512l-4.604-2.635a.374.374 0 0 0-.512.139l-.115.201-1.364-.782a.375.375 0 0 0-.512.139l-2.05 3.583a.374.374 0 0 0 .139.512l1.365.781-.115.2a.375.375 0 0 0 .139.512l1.465.838L5.289 19.2c-1.941-1.804-3.165-4.371-3.165-7.224 0-5.445 4.43-9.875 9.875-9.875s9.875 4.43 9.875 9.875c.001 4.98-3.708 9.099-8.506 9.769z",
    fill: "#878787"
  }));
};

var _default = IconDemolition;
exports["default"] = _default;