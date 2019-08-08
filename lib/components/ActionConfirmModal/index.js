'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _redux = require("redux");

var _reduxModal = require("redux-modal");

var _styles = require("@material-ui/core/styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _CloseButton = _interopRequireDefault(require("../CloseButton"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ActionConfirmModal =
/*#__PURE__*/
function (_Component) {
  _inherits(ActionConfirmModal, _Component);

  function ActionConfirmModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ActionConfirmModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ActionConfirmModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.props.handleHide();

      _this.props.onCancel && _this.props.onCancel();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.props.handleHide();

      _this.props.onClose && _this.props.onClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleConfirm", function () {
      _this.props.onConfirm && _this.props.onConfirm();

      _this.handleClose();
    });

    return _this;
  }

  _createClass(ActionConfirmModal, [{
    key: "renderDescription",
    value: function renderDescription() {
      var _this2 = this;

      var _this$props = this.props,
          classNames = _this$props.classNames,
          description = _this$props.description;

      if (description === undefined) {
        return null;
      }

      var entries;

      if (typeof description === 'string' || _typeof(description) === 'object' && description.length === undefined) {
        entries = [description];
      } else {
        entries = description;
      }

      return entries.map(function (text) {
        return _react["default"].createElement(_Typography["default"], {
          key: text,
          className: (0, _classnames["default"])(_this2.props.classes.description, classNames.description),
          variant: "body1",
          gutterBottom: true
        }, text);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          classNames = _this$props2.classNames,
          modalTitle = _this$props2.modalTitle,
          confirmButtonText = _this$props2.confirmButtonText,
          cancelButtonText = _this$props2.cancelButtonText,
          objectName = _this$props2.objectName,
          show = _this$props2.show,
          showCloseButton = _this$props2.showCloseButton,
          fullScreen = _this$props2.fullScreen,
          onlyConfirmButton = _this$props2.onlyConfirmButton,
          withExtraPadding = _this$props2.withExtraPadding;
      return _react["default"].createElement(_Dialog["default"], {
        fullScreen: fullScreen,
        open: show,
        onClose: this.handleCancel,
        classes: {
          paper: classNames.paper
        },
        disableEnforceFocus: true
      }, showCloseButton && _react["default"].createElement(_CloseButton["default"], {
        className: classes.closeButton,
        onClick: this.props.onClose ? this.handleClose : this.handleCancel
      }), _react["default"].createElement(_DialogTitle["default"], {
        className: (0, _classnames["default"])(_defineProperty({}, classes.dialogTitleExtraPadding, withExtraPadding), classNames.dialogTitle),
        disableTypography: true
      }, _react["default"].createElement(_Typography["default"], {
        variant: "subtitle2",
        color: "primary"
      }, modalTitle)), _react["default"].createElement(_DialogContent["default"], {
        className: (0, _classnames["default"])(_defineProperty({}, classes.dialogContentExtraPadding, withExtraPadding), classNames.dialogContent)
      }, this.renderDescription(), objectName && _react["default"].createElement(_Typography["default"], {
        variant: "body1"
      }, _react["default"].createElement("strong", null, objectName)), _react["default"].createElement("div", {
        className: classes.dialogActions
      }, !onlyConfirmButton && _react["default"].createElement(_Button["default"], {
        className: (0, _classnames["default"])(classes.button, classes.cancelButton),
        onClick: this.handleCancel,
        variant: "outlined",
        color: "primary"
      }, cancelButtonText || 'CANCEL'), _react["default"].createElement(_Button["default"], {
        className: classes.button,
        onClick: this.handleConfirm,
        variant: "contained",
        color: "primary"
      }, confirmButtonText || 'DELETE'))));
    }
  }]);

  return ActionConfirmModal;
}(_react.Component);

_defineProperty(ActionConfirmModal, "propTypes", {
  classNames: _propTypes["default"].object,
  // can't name classes because of withStyles
  modalTitle: _propTypes["default"].string,
  description: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].arrayOf(_propTypes["default"].object), _propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  confirmButtonText: _propTypes["default"].string,
  cancelButtonText: _propTypes["default"].string,
  objectName: _propTypes["default"].string,
  params: _propTypes["default"].object,
  onCancel: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  // if given, X button will no longer use onCancel
  onConfirm: _propTypes["default"].func,
  onlyConfirmButton: _propTypes["default"].bool,
  show: _propTypes["default"].bool.isRequired,
  handleHide: _propTypes["default"].func.isRequired,
  classes: _propTypes["default"].object.isRequired,
  showCloseButton: _propTypes["default"].bool,
  withExtraPadding: _propTypes["default"].bool
});

_defineProperty(ActionConfirmModal, "defaultProps", {
  classNames: {},
  showCloseButton: false,
  withExtraPadding: false
});

var _default = (0, _redux.compose)((0, _styles.withStyles)(_styles2["default"]), (0, _reduxModal.connectModal)({
  name: 'actionConfirmModal',
  destroyOnHide: false
}))(ActionConfirmModal);

exports["default"] = _default;