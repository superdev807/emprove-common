'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconUL2New = function IconUL2New(props) {
  var primary = props.primary || '#888';
  var secondary = props.secondary || 'none';
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: 0,
    y: 0,
    viewBox: "0 0 24 24",
    xmlSpace: "preserve"
  }, props), _react.default.createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M12 1.375C6.142 1.375 1.375 6.142 1.375 12S6.142 22.625 12 22.625 22.625 17.859 22.625 12 17.858 1.375 12 1.375zm0 20.5c-5.445 0-9.875-4.43-9.875-9.875S6.555 2.125 12 2.125s9.875 4.43 9.875 9.875-4.43 9.875-9.875 9.875z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M17.469 10.394l-3.686-.314-1.438-3.393c-.119-.277-.574-.277-.691 0l-1.438 3.4-3.686.314c-.149.014-.277.114-.324.258s-.003.301.111.399l2.793 2.42-.839 3.603a.375.375 0 0 0 .559.406L12 15.578l3.169 1.91a.376.376 0 0 0 .559-.407l-.84-3.61 2.794-2.42a.374.374 0 0 0-.213-.657z"
  }));
};

var _default = IconUL2New;
exports.default = _default;