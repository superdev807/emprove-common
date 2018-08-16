'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _redux = require('redux');

var _reduxModal = require('redux-modal');

var _Dialog = require('@material-ui/core/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogContent = require('@material-ui/core/DialogContent');

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _styles = require('@material-ui/core/styles');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

var _reactVimeo = require('@u-wave/react-vimeo');

var _reactVimeo2 = _interopRequireDefault(_reactVimeo);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoModal = function (_Component) {
  _inherits(VideoModal, _Component);

  function VideoModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VideoModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VideoModal.__proto__ || Object.getPrototypeOf(VideoModal)).call.apply(_ref, [this].concat(args))), _this), _this.handleClose = function () {
      _this.props.handleHide();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VideoModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          show = _props.show;


      return _react2.default.createElement(
        _Dialog2.default,
        { maxWidth: false, open: show, classes: { paper: classes.dialogContentPaper }, onClose: this.handleClose },
        _react2.default.createElement(
          'div',
          { className: classes.videoContainer },
          _react2.default.createElement(
            _IconButton2.default,
            { className: classes.fixedCloseIcon, onClick: this.handleClose },
            _react2.default.createElement(_Close2.default, { className: classes.iconClose })
          ),
          _react2.default.createElement(
            _DialogContent2.default,
            { className: (0, _classnames2.default)(classes.dialogContent, 'responsiveVideoBackground') },
            _react2.default.createElement(_reactVimeo2.default, { id: 'video', video: process.env.EMPROVE_HOME_VIDEO_ID, autoplay: true })
          )
        )
      );
    }
  }]);

  return VideoModal;
}(_react.Component);

exports.default = (0, _redux.compose)((0, _styles.withStyles)(_styles3.default), (0, _reduxModal.connectModal)({
  name: 'videoModal',
  destroyOnHide: true
}))(VideoModal);