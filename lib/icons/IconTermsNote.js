'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconTermsNote = function IconTermsNote(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M.132 0h24v24h-24V0z",
    fill: "none"
  }), _react.default.createElement("path", {
    d: "M21.855 3.109h-1.118V1.877c0-.651-.529-1.181-1.181-1.181H2.008c-.701 0-1.272.571-1.272 1.272v13.574c0 .72.585 1.305 1.304 1.305h4.472v4.319a.795.795 0 0 0 .799.797.799.799 0 0 0 .565-.235l.935-.942v1.777a.795.795 0 0 0 .795.798.817.817 0 0 0 .583-.251l3.434-3.853h8.187a1.23 1.23 0 0 0 1.228-1.228V4.289a1.184 1.184 0 0 0-1.183-1.18zM7.291 21.211c-.029-.013-.029-.033-.029-.044v-4.694a.375.375 0 0 0-.375-.375H2.04a.555.555 0 0 1-.554-.555V1.969c0-.288.234-.522.522-.522h17.548c.237 0 .431.193.431.431v13.743a.478.478 0 0 1-.478.478h-6.944c-.1 0-.195.04-.267.11l-5.007 5.002zm14.995-3.179a.478.478 0 0 1-.478.478h-8.355a.375.375 0 0 0-.28.126l-3.613 3.93v-2.533l3.161-3.185h6.788a1.23 1.23 0 0 0 1.228-1.228V3.859h1.118a.43.43 0 0 1 .431.43v13.743z"
  }), _react.default.createElement("path", {
    d: "M3.528 5.542h14.417v2.121H3.528zM3.528 9.792h10.25v2.121H3.528z"
  }));
};

var _default = IconTermsNote;
exports.default = _default;