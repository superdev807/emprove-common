'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconFeaturePoolAndWaterFeatures = function IconFeaturePoolAndWaterFeatures(props) {
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
    d: "M17.824 7.943h-2.062a.375.375 0 0 0 0 .75h2.062c2.756 0 4.997 2.241 4.997 4.997s-2.241 4.997-4.997 4.997H6.176c-2.756 0-4.997-2.241-4.997-4.997S3.42 8.693 6.176 8.693h2.165a.375.375 0 0 0 0-.75H6.176c-3.169 0-5.747 2.578-5.747 5.747s2.578 5.747 5.747 5.747h11.647c3.169 0 5.747-2.578 5.747-5.747s-2.577-5.747-5.746-5.747z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M12.945 15.694c-.282.209-.505.375-.984.375s-.702-.166-.984-.376c-.313-.233-.703-.523-1.432-.523s-1.118.29-1.432.523c-.282.21-.505.376-.984.376s-.701-.166-.983-.376c-.312-.233-.702-.523-1.43-.523a.375.375 0 0 0 0 .75c.479 0 .7.166.981.375.313.233.703.524 1.432.524s1.118-.29 1.432-.523c.282-.21.505-.376.984-.376s.702.166.984.376c.313.233.703.523 1.432.523s1.118-.29 1.432-.523c.282-.21.505-.376.985-.376s.704.166.986.376c.314.233.705.523 1.435.523.729 0 1.119-.29 1.434-.523.282-.21.506-.376.987-.376a.375.375 0 0 0 0-.75c-.729 0-1.12.29-1.435.523-.282.21-.506.376-.986.376-.481 0-.705-.166-.987-.376-.314-.233-.705-.523-1.434-.523s-1.12.29-1.433.524zM7.869 5.692a.848.848 0 0 1 .704-.379c.467 0 .846.38.846.847v7.862a.375.375 0 0 0 .75 0v-.693h2.943a.375.375 0 0 0 0-.75h-2.943V8.693h2.943a.375.375 0 0 0 0-.75h-2.943V6.16a1.596 1.596 0 1 0-2.923-.886.374.374 0 0 0 .102.52.377.377 0 0 0 .521-.102z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M12.385 5.692a.848.848 0 0 1 .704-.379c.467 0 .846.38.846.847v4.192h-2.668a.375.375 0 0 0 0 .75h2.668v2.92a.375.375 0 0 0 .75 0V6.16a1.596 1.596 0 1 0-2.923-.886.376.376 0 0 0 .103.521.377.377 0 0 0 .52-.103z"
  }));
};

var _default = IconFeaturePoolAndWaterFeatures;
exports.default = _default;