'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AcceptCookieBar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var AcceptCookieBar = function AcceptCookieBar(_ref) {
  var acceptCookie = _ref.acceptCookie,
      classes = _ref.classes,
      open = _ref.open;
  return _react["default"].createElement(_Snackbar["default"], {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    open: open,
    className: classes.root
  }, _react["default"].createElement(_SnackbarContent["default"], {
    classes: {
      root: classes.content,
      message: classes.message,
      action: classes.action
    },
    message: _react["default"].createElement(_react.Fragment, null, "We use cookies to enhance your user experience.", ' ', _react["default"].createElement("a", {
      href: process.env.CONSUMER_DOMAIN + '/privacy',
      className: classes.link
    }, "Learn More")),
    action: _react["default"].createElement(_Button["default"], {
      variant: "outlined",
      size: "small",
      color: "primary",
      className: classes.action,
      onClick: acceptCookie
    }, "Okay")
  }));
};

exports.AcceptCookieBar = AcceptCookieBar;

var _default = (0, _styles.withStyles)(_styles2["default"])(AcceptCookieBar);

exports["default"] = _default;