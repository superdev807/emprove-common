'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _LoadingIndicator = require('../LoadingIndicator');

var _LoadingIndicator2 = _interopRequireDefault(_LoadingIndicator);

var _Snackbar = require('@material-ui/core/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _SnackbarContent = require('../SnackbarContent');

var _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadableLoading = function (_React$Component) {
  _inherits(LoadableLoading, _React$Component);

  function LoadableLoading(props) {
    _classCallCheck(this, LoadableLoading);

    var _this = _possibleConstructorReturn(this, (LoadableLoading.__proto__ || Object.getPrototypeOf(LoadableLoading)).call(this, props));

    _this.handleClose = function () {
      _this.setState({ errorOpen: false });
    };

    _this.state = {
      errorOpen: true
    };
    return _this;
  }

  _createClass(LoadableLoading, [{
    key: 'renderError',
    value: function renderError() {
      return _react2.default.createElement(
        _Snackbar2.default,
        { anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, open: this.state.errorOpen, onClose: this.handleClose },
        _react2.default.createElement(_SnackbarContent2.default, {
          variant: 'warning',
          message: 'We had trouble with your request.',
          action: [_react2.default.createElement(
            _Button2.default,
            { key: 'try-again', style: { marginLeft: '1rem' }, onClick: this.props.retry, variant: 'contained' },
            'TRY AGAIN'
          )]
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.error) {
        return this.renderError();
      }

      return _react2.default.createElement(_LoadingIndicator2.default, { fixed: true });
    }
  }]);

  return LoadableLoading;
}(_react2.default.Component);

exports.default = LoadableLoading;