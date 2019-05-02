'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var _Error = _interopRequireDefault(require("@material-ui/icons/Error"));

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _Warning = _interopRequireDefault(require("@material-ui/icons/Warning"));

var _IconInvitationSent = _interopRequireDefault(require("../../icons/IconInvitationSent"));

var _styles = require("@material-ui/core/styles");

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var variantIcon = {
  success: _CheckCircle["default"],
  warning: _Warning["default"],
  error: _Error["default"],
  info: _Info["default"],
  invitation: _IconInvitationSent["default"]
};

var CustomSnackbarContent = function CustomSnackbarContent(props) {
  var classes = props.classes,
      className = props.className,
      message = props.message,
      onClose = props.onClose,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["classes", "className", "message", "onClose", "variant"]);

  var Icon = variantIcon[variant];
  return _react["default"].createElement(_SnackbarContent["default"], _extends({
    className: (0, _classnames["default"])(classes[variant], className),
    classes: {
      action: classes.contentAction,
      message: classes.contentMessage
    },
    "aria-describedby": "client-snackbar",
    message: _react["default"].createElement("span", {
      id: "client-snackbar",
      className: classes.message
    }, _react["default"].createElement(Icon, {
      className: (0, _classnames["default"])(classes.icon, classes.iconVariant)
    }), message),
    action: [_react["default"].createElement(_IconButton["default"], {
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      className: classes.close,
      onClick: onClose
    }, _react["default"].createElement(_Close["default"], {
      className: classes.icon
    }))]
  }, other));
};

CustomSnackbarContent.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  className: _propTypes["default"].string,
  message: _propTypes["default"].node,
  onClose: _propTypes["default"].func,
  variant: _propTypes["default"].oneOf(['success', 'warning', 'error', 'info', 'invitation']).isRequired
};

var _default = (0, _styles.withStyles)(_styles2["default"])(CustomSnackbarContent);

exports["default"] = _default;