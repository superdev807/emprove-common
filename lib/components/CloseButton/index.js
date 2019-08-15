'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CloseButton = function CloseButton(props) {
  return _react["default"].createElement(_IconButton["default"], {
    className: (0, _classnames["default"])('close-button', props.className),
    onClick: props.onClick
  }, _react["default"].createElement(_Close["default"], null));
};

CloseButton.propTypes = {
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};
var _default = CloseButton;
exports["default"] = _default;