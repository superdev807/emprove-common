'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconUL2DevicesAndTrims = function IconUL2DevicesAndTrims(props) {
  var primary = props.primary || '#878787';
  var secondary = props.secondary || 'none';
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: 0,
    y: 0,
    viewBox: "0 0 24 24",
    xmlSpace: "preserve"
  }, props), _react["default"].createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    fill: primary,
    d: "M17.601 1.042H6.399c-.566 0-1.027.46-1.027 1.026v19.863c0 .566.461 1.026 1.027 1.026h11.202c.566 0 1.027-.46 1.027-1.026V2.068a1.026 1.026 0 0 0-1.027-1.026zm.278 20.89a.277.277 0 0 1-.277.276H6.399a.277.277 0 0 1-.277-.276V2.068c0-.152.124-.276.277-.276h11.202c.153 0 .277.124.277.276v19.864z"
  }), _react["default"].createElement("path", {
    fill: primary,
    d: "M14.513 13.326H9.486a.375.375 0 0 0-.234.082c-1.005.805-1.604 2.129-1.604 3.543s.6 2.738 1.604 3.543a.375.375 0 0 0 .234.082h5.027a.375.375 0 0 0 .234-.082c1.005-.805 1.605-2.129 1.605-3.543s-.601-2.738-1.605-3.543a.375.375 0 0 0-.234-.082zm-.135 6.5H9.622c-.769-.671-1.225-1.734-1.225-2.875s.456-2.204 1.225-2.875h4.756c.77.67 1.226 1.734 1.226 2.875s-.457 2.205-1.226 2.875z"
  }), _react["default"].createElement("path", {
    fill: primary,
    d: "M12.16 18.14h-.32a.599.599 0 0 0-.599.598v.602h1.518v-.602a.598.598 0 0 0-.599-.598zM13.224 15.225h.75v1.893h-.75zM10.026 15.225h.75v1.893h-.75zM14.513 3.424H9.486a.375.375 0 0 0-.234.082c-1.005.804-1.605 2.129-1.605 3.543 0 1.415.6 2.739 1.604 3.543a.375.375 0 0 0 .234.082h5.027a.375.375 0 0 0 .234-.082c1.005-.804 1.605-2.128 1.605-3.543 0-1.414-.601-2.738-1.605-3.543a.37.37 0 0 0-.233-.082zm-.135 6.5H9.622c-.77-.67-1.225-1.733-1.225-2.875 0-1.141.456-2.204 1.225-2.875h4.756c.77.67 1.226 1.734 1.226 2.875-.001 1.141-.457 2.206-1.226 2.875z"
  }), _react["default"].createElement("path", {
    fill: primary,
    d: "M12.16 8.237h-.32a.599.599 0 0 0-.599.599v.602h1.518v-.602a.599.599 0 0 0-.599-.599zM13.224 5.323h.75v1.893h-.75zM10.026 5.323h.75v1.893h-.75z"
  }), _react["default"].createElement("circle", {
    fill: primary,
    cx: 12.054,
    cy: 12,
    r: 0.625
  }));
};

var _default = IconUL2DevicesAndTrims;
exports["default"] = _default;