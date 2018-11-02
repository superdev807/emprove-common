'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AcceptCookieBar = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Snackbar = require('@material-ui/core/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('@material-ui/core/styles');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AcceptCookieBar = exports.AcceptCookieBar = function AcceptCookieBar(_ref) {
  var acceptCookie = _ref.acceptCookie,
      classes = _ref.classes,
      open = _ref.open;
  return _react2.default.createElement(_Snackbar2.default, {
    anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
    open: open,
    className: classes.root,
    message: _react2.default.createElement(
      _react.Fragment,
      null,
      'emprove uses cookies to improve our user experience.',
      ' ',
      _react2.default.createElement(
        'a',
        { href: '/privacy', target: '_blank', rel: 'noopener noreferrer', className: classes.link },
        'Learn More'
      )
    ),
    ContentProps: {
      className: classes.content
    },
    action: _react2.default.createElement(
      _Button2.default,
      { variant: 'outlined', size: 'small', color: 'inherit', className: classes.action, onClick: acceptCookie },
      'Okay'
    )
  });
};

exports.default = (0, _styles.withStyles)(_styles3.default)(AcceptCookieBar);