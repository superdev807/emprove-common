'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconBookmarkOutline = function IconBookmarkOutline(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M5.616 22.545A.544.544 0 0 1 5.07 22V3.025c0-.866.705-1.571 1.571-1.571h10.717c.866 0 1.571.705 1.571 1.571V22a.546.546 0 0 1-.837.461l-6.243-3.944-5.932 3.938a.544.544 0 0 1-.301.09zm6.226-5.224c.101 0 .202.028.291.084l5.705 3.604V3.025a.48.48 0 0 0-.48-.48H6.641a.48.48 0 0 0-.48.48v17.958l5.379-3.571a.553.553 0 0 1 .302-.091z"
  }));
};

var _default = IconBookmarkOutline;
exports["default"] = _default;