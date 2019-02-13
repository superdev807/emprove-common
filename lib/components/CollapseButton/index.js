'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ExpandLess = _interopRequireDefault(require("@material-ui/icons/ExpandLess"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollapseButton = function CollapseButton(props) {
  return _react.default.createElement(_IconButton.default, {
    className: (0, _classnames.default)('collapse-button', props.className),
    onClick: props.onClick
  }, props.collapsed ? _react.default.createElement(_ExpandMore.default, null) : _react.default.createElement(_ExpandLess.default, null));
};

CollapseButton.propTypes = {
  className: _propTypes.default.string,
  collapsed: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
var _default = CollapseButton;
exports.default = _default;