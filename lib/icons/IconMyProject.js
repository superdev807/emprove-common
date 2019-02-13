'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconMyProject = function IconMyProject(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M18.4 3.4h-3.6a3.077 3.077 0 0 0-5.6 0H5.6c-1.2 0-2.2 1-2.2 2.2v14.6c0 1.2 1 2.2 2.2 2.2h12.8c1.2 0 2.2-1 2.2-2.2V5.6c0-1.2-1-2.2-2.2-2.2zm-6.4.4c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zm7.8 16.4c0 .8-.6 1.4-1.4 1.4H5.6c-.8 0-1.4-.6-1.4-1.4V5.6c0-.8.6-1.4 1.4-1.4H7v3.6h10V4.2h1.4c.8 0 1.4.6 1.4 1.4v14.6z"
  }), _react.default.createElement("path", {
    d: "M13 10.3h-2v3H8v2h3v3h2v-3h3v-2h-3z"
  }));
};

var _default = IconMyProject;
exports.default = _default;