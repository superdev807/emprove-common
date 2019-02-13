'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _SnackbarContent = _interopRequireDefault(require("../SnackbarContent"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _styles = require("@material-ui/core/styles");

var _styles2 = _interopRequireDefault(require("./styles"));

var _selectors = require("../../redux/selectors");

var _globalStatus = require("../../redux/modules/globalStatus");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Snackbar = function Snackbar(_ref) {
  var classes = _ref.classes,
      globalStatus = _ref.globalStatus,
      resetSnackbar = _ref.resetSnackbar;
  return _react.default.createElement(_Snackbar.default, {
    anchorOrigin: {
      vertical: globalStatus.anchor || 'top',
      horizontal: 'center'
    },
    open: Boolean(globalStatus.snackbar),
    autoHideDuration: 3000,
    onClose: resetSnackbar
  }, _react.default.createElement(_SnackbarContent.default, {
    onClose: resetSnackbar,
    variant: globalStatus.variant,
    message: globalStatus.snackbar
  }));
};

var selector = (0, _reselect.createStructuredSelector)({
  globalStatus: _selectors.globalStatusSelector
});
var actions = {
  resetSnackbar: _globalStatus.resetSnackbar
};

var _default = (0, _redux.compose)((0, _styles.withStyles)(_styles2.default), (0, _reactRedux.connect)(selector, actions))(Snackbar);

exports.default = _default;