'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./team-member-photo-styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TeamMemberPhoto = function TeamMemberPhoto(props) {
  return _react["default"].createElement("img", {
    className: "team-member-photo",
    src: props.photoUrl,
    alt: props.photoAlt,
    onMouseOver: props.onMouseOver,
    onMouseOut: props.onMouseOut
  });
};

TeamMemberPhoto.propTypes = {
  photoAlt: _propTypes["default"].string.isRequired,
  photoUrl: _propTypes["default"].string.isRequired,
  onMouseOver: _propTypes["default"].func,
  onMouseOut: _propTypes["default"].func
};
var _default = TeamMemberPhoto;
exports["default"] = _default;