'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconMaterials = function IconMaterials(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M21.7,2H2.3C2,2,1.9,2.2,1.9,2.4v11.5v8.3c0,0.2,0.2,0.4,0.4,0.4h19.5c0.2,0,0.4-0.2,0.4-0.4V10.7V2.4 C22.1,2.2,22,2,21.7,2z M2.6,14h10.2v3.5H2.6V14z M12.9,13.3h-1.7v-2h1.7V13.3z M10.4,12.5L3.3,2.7h7.1V12.5z M2.6,3.1L10,13.3H2.6 V3.1z M13.6,11.2h2.1v10.5h-2.1V11.2z M16.5,11.2h2.1v10.5h-2.1V11.2z M19.3,11.2h2.1v10.5h-2.1V11.2z M11.1,10.5V7.9L16.2,6 l5.1,1.9v2.6H11.1z M21.4,7.1l-5-1.8c-0.1,0-0.2,0-0.3,0l-5,1.8V2.7h10.2V7.1z M2.6,18.3h10.2v3.5H2.6V18.3z"
  }));
};

var _default = IconMaterials;
exports.default = _default;