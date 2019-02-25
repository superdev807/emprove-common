'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconUL2MachanicalDucting = function IconUL2MachanicalDucting(props) {
  var primary = props.primary || '#878787';
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
    d: "M22.105 3.59H6.771a.375.375 0 0 0-.375.375v3.792c0 .036.011.07.021.103-1.157 1.154-2.561 2.627-3.078 3.474-.074.105-1.817 2.631-1.817 5.631 0 .012.006.022.007.034a.34.34 0 0 0 .041.14.368.368 0 0 0 .093.113c.009.007.014.018.024.024l4.542 3.07a.374.374 0 0 0 .21.064H17.96c.057 0 .11-.015.158-.038l.01-.002c.008-.004.012-.013.02-.018a.393.393 0 0 0 .135-.137.362.362 0 0 0 .044-.137c.001-.01.008-.017.009-.027.05-1.183.258-2.103.479-2.627h3.292a.375.375 0 0 0 .375-.375V3.965a.378.378 0 0 0-.377-.375zM3.966 11.744C4.762 10.442 7.92 7.43 8.544 6.84h10.455c-1.155 1.112-3.428 3.362-4.119 4.494-.07.102-1.674 2.424-1.809 5.256H2.28c.139-2.599 1.658-4.804 1.686-4.846zm14.365 4.976c-.337.519-.593 1.496-.701 2.639l-3.804-2.583c.074-2.677 1.653-4.988 1.682-5.031.659-1.078 2.936-3.327 4.055-4.405v7.903a9.18 9.18 0 0 0-1.232 1.477zm-15.211.62h10.202l3.417 2.32H6.553L3.12 17.34zm18.61-.666h-2.442c.442-.566.897-.99.904-.995a.375.375 0 0 0 .121-.276V6.549c0-.026-.01-.05-.015-.074.001-.049.008-.099-.011-.147a.374.374 0 0 0-.349-.238H8.396a.37.37 0 0 0-.256.102c-.05.045-.445.416-.994.95V4.34H21.73v12.334z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M12.468 18.076H6.083l1.407.928h6.282z"
  }));
};

var _default = IconUL2MachanicalDucting;
exports.default = _default;