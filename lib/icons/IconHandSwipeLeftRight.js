'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconHandSwipeLeftRight = function IconHandSwipeLeftRight(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M21.023 3.229c.006-.011.016-.019.021-.03a.372.372 0 0 0 .001-.298c-.006-.013-.016-.022-.023-.034a.375.375 0 0 0-.064-.088l-.005-.007-1.947-1.753a.374.374 0 1 0-.502.556l1.221 1.1H16.2a.375.375 0 0 0 0 .75h3.525l-1.221 1.101a.374.374 0 1 0 .502.556l1.947-1.754.005-.007a.356.356 0 0 0 .065-.092zM7.109 2.675H3.584l1.221-1.1a.375.375 0 1 0-.502-.557L2.356 2.771c-.002.002-.003.006-.006.007a.392.392 0 0 0-.063.088c-.007.012-.018.022-.024.035a.372.372 0 0 0 .001.298c.005.011.014.02.021.03a.381.381 0 0 0 .067.092l.005.007 1.947 1.754a.375.375 0 1 0 .501-.557l-1.221-1.1h3.525a.375.375 0 0 0 0-.75z"
  }), _react["default"].createElement("path", {
    d: "M19.999 9.908c-.76 0-1.374.611-1.389 1.367v-.961c0-.77-.624-1.395-1.395-1.395-.77 0-1.403.624-1.403 1.395v.006c-.003 0 .003 0 0 0V9.225a1.393 1.393 0 1 0-2.787-.014V2.704a1.395 1.395 0 1 0-2.79 0v11.071l-.255-.652-1.258-2.863a1.395 1.395 0 0 0-2.554 1.122l3.245 7.383a6.206 6.206 0 0 0 5.773 3.938 6.206 6.206 0 0 0 6.205-6.158l.003-.012v-5.23c0-.771-.625-1.395-1.395-1.395z",
    fill: "#fff"
  }), _react["default"].createElement("path", {
    d: "M19.999 9.533c-.397 0-.767.136-1.063.362a1.775 1.775 0 0 0-2.78-1.001 1.771 1.771 0 0 0-1.738-1.439c-.377 0-.729.12-1.017.325V2.704c0-.977-.794-1.771-1.771-1.771-.976 0-1.77.794-1.77 1.771v9.214l-.795-1.809a1.757 1.757 0 0 0-.979-.938 1.773 1.773 0 0 0-2.261 2.363l3.24 7.369a6.545 6.545 0 0 0 6.122 4.175c3.588 0 6.532-2.91 6.579-6.498a.387.387 0 0 0 .003-.048v-5.229c0-.976-.794-1.77-1.77-1.77zm1.02 6.966a.322.322 0 0 0-.003.043c-.024 3.19-2.64 5.786-5.829 5.786-2.41 0-4.539-1.452-5.43-3.714l-3.245-7.382a1.012 1.012 0 0 1-.017-.781 1.014 1.014 0 0 1 .95-.65 1.011 1.011 0 0 1 .933.61l1.253 2.849.255.652c.065.167.24.27.419.231a.374.374 0 0 0 .306-.368V2.704c0-.562.457-1.021 1.02-1.021s1.021.458 1.021 1.021v7.629a.375.375 0 0 0 .75 0V9.215a1.022 1.022 0 0 1 1.017-1.01c.562 0 1.02.457 1.02 1.02v2.103a.375.375 0 0 0 .75 0v-1.013c0-.562.461-1.021 1.028-1.021.562 0 1.02.458 1.02 1.021v1.95a.375.375 0 0 0 .75 0v-.982c.012-.561.457-1 1.014-1 .562 0 1.021.457 1.021 1.02v5.196z"
  }));
};

var _default = IconHandSwipeLeftRight;
exports["default"] = _default;