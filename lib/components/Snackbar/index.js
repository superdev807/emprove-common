'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Snackbar = require('@material-ui/core/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _SnackbarContent = require('../SnackbarContent');

var _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _styles = require('@material-ui/core/styles');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

var _selectors = require('../../redux/selectors');

var _globalStatus = require('../../redux/modules/globalStatus');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Snackbar = function Snackbar(_ref) {
  var classes = _ref.classes,
      globalStatus = _ref.globalStatus,
      resetSnackbar = _ref.resetSnackbar;
  return _react2.default.createElement(
    _Snackbar2.default,
    {
      anchorOrigin: { vertical: globalStatus.anchor || 'top', horizontal: 'center' },
      open: Boolean(globalStatus.snackbar),
      autoHideDuration: 3000,
      onClose: resetSnackbar },
    _react2.default.createElement(_SnackbarContent2.default, { onClose: resetSnackbar, variant: globalStatus.variant, message: globalStatus.snackbar })
  );
};

var selector = (0, _reselect.createStructuredSelector)({
  globalStatus: _selectors.globalStatusSelector
});

var actions = {
  resetSnackbar: _globalStatus.resetSnackbar
};

exports.default = (0, _redux.compose)((0, _styles.withStyles)(_styles3.default), (0, _reactRedux.connect)(selector, actions))(Snackbar);