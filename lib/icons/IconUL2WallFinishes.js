'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconUL2WallFinishes = function IconUL2WallFinishes(props) {
  var primary = props.primary || '#878787';
  var secondary = props.secondary || 'none';
  return _react.default.createElement(_SvgIcon.default, _extends({
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    d: "M22.888 10.543a.375.375 0 0 0 .375-.375V6.506a.375.375 0 0 0-.375-.375H19.19V2.844a.375.375 0 0 0-.375-.375H1.112a.375.375 0 0 0-.375.375v3.662c0 .207.168.375.375.375H4.81v2.912H1.112a.375.375 0 0 0-.375.375v3.663c0 .207.168.375.375.375H4.81v2.912H1.112a.375.375 0 0 0-.375.375v3.663c0 .207.168.375.375.375h17.702a.375.375 0 0 0 .375-.375v-3.288h3.698a.375.375 0 0 0 .375-.375v-3.662a.375.375 0 0 0-.375-.375H19.19v-2.913h3.698zM10.339 3.219h8.101v2.912h-8.101V3.219zm0 10.237v-2.913h8.101v2.913h-8.101zm3.322.75v2.912h-8.1v-2.912h8.1zm0-4.413h-8.1V6.881h8.101v2.912zM1.487 6.131V3.219h8.102v2.912H1.487zm0 7.325v-2.913H9.588v2.913H1.487zm8.102 7.325H1.487v-2.913H9.588v2.913zm8.851 0h-8.101v-2.913h8.101v2.913zm4.073-6.575v2.912H14.412v-2.912H22.513zm-3.698-4.413h-4.403V6.881H22.513v2.912h-3.698z",
    fill: primary
  }));
};

var _default = IconUL2WallFinishes;
exports.default = _default;