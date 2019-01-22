'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _CheckCircle = require('@material-ui/icons/CheckCircle');

var _CheckCircle2 = _interopRequireDefault(_CheckCircle);

var _Error = require('@material-ui/icons/Error');

var _Error2 = _interopRequireDefault(_Error);

var _Info = require('@material-ui/icons/Info');

var _Info2 = _interopRequireDefault(_Info);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _SnackbarContent = require('@material-ui/core/SnackbarContent');

var _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

var _Warning = require('@material-ui/icons/Warning');

var _Warning2 = _interopRequireDefault(_Warning);

var _styles = require('@material-ui/core/styles');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var variantIcon = {
  success: _CheckCircle2.default,
  warning: _Warning2.default,
  error: _Error2.default,
  info: _Info2.default
};

var CustomSnackbarContent = function CustomSnackbarContent(props) {
  var classes = props.classes,
      className = props.className,
      message = props.message,
      onClose = props.onClose,
      variant = props.variant,
      other = _objectWithoutProperties(props, ['classes', 'className', 'message', 'onClose', 'variant']);

  var Icon = variantIcon[variant];

  return _react2.default.createElement(_SnackbarContent2.default, _extends({
    className: (0, _classnames2.default)(classes[variant], className),
    classes: { action: classes.contentAction },
    'aria-describedby': 'client-snackbar',
    message: _react2.default.createElement(
      'span',
      { id: 'client-snackbar', className: classes.message },
      _react2.default.createElement(Icon, { className: (0, _classnames2.default)(classes.icon, classes.iconVariant) }),
      message
    ),
    action: [_react2.default.createElement(
      _IconButton2.default,
      { key: 'close', 'aria-label': 'Close', color: 'inherit', className: classes.close, onClick: onClose },
      _react2.default.createElement(_Close2.default, { className: classes.icon })
    )]
  }, other));
};

CustomSnackbarContent.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  message: _propTypes2.default.node,
  onClose: _propTypes2.default.func,
  variant: _propTypes2.default.oneOf(['success', 'warning', 'error', 'info']).isRequired
};

exports.default = (0, _styles.withStyles)(_styles3.default)(CustomSnackbarContent);