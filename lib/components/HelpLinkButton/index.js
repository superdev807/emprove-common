'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _HelpOutline = _interopRequireDefault(require("@material-ui/icons/HelpOutline"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HelpLinkButton = function HelpLinkButton(props) {
  return _react["default"].createElement(_IconButton["default"], {
    id: props.id,
    className: (0, _classnames["default"])('help-link-button', {
      'help-link-button--size-16': props.size === 16,
      'help-link-button--size-32': props.size === 32,
      'help-link-button--left-margin': props.margin === 'left',
      'help-link-button--right-margin-16': props.margin === 'right-16',
      'help-link-button--blink': props.blink,
      'help-link-button--highlighted': props.highlighted
    }, props.className),
    component: "a",
    href: "".concat(process.env.HELP_DOMAIN, "/").concat(props.path),
    target: "_blank"
  }, _react["default"].createElement(_HelpOutline["default"], {
    className: (0, _classnames["default"])({
      'help-link-button--size-16': props.size === 16,
      'help-link-button--size-32': props.size === 32
    })
  }));
};

HelpLinkButton.propTypes = {
  blink: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  highlighted: _propTypes["default"].bool,
  id: _propTypes["default"].string,
  margin: _propTypes["default"].oneOf(['left', 'right-16']),
  path: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].oneOf([16, 32])
};
HelpLinkButton.defaultProps = {
  blink: false,
  highlighted: false
};
var _default = HelpLinkButton;
exports["default"] = _default;