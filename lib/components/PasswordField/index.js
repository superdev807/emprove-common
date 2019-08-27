'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PasswordField = exports.ValidationText = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Fade = _interopRequireDefault(require("@material-ui/core/Fade"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _get = _interopRequireDefault(require("lodash/get"));

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Popper = _interopRequireDefault(require("@material-ui/core/Popper"));

var _styles = require("@material-ui/core/styles");

var _styles2 = _interopRequireWildcard(require("./styles"));

var _validators = require("../../utils/validators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ValidationText = (0, _styles.withStyles)(_styles2.validatorTextStyles)(function (_ref) {
  var _cx;

  var children = _ref.children,
      classes = _ref.classes,
      success = _ref.success;
  return _react["default"].createElement(_Typography["default"], {
    variant: "caption",
    gutterBottom: true,
    className: (0, _classnames["default"])(classes.validationText, (_cx = {}, _defineProperty(_cx, classes.success, success), _defineProperty(_cx, classes.fail, !success), _cx))
  }, success ? _react["default"].createElement(_Check["default"], {
    color: "inherit",
    className: classes.icon
  }) : _react["default"].createElement(_Close["default"], {
    color: "inherit",
    className: classes.icon
  }), _react["default"].createElement("span", {
    className: classes.text
  }, children));
});
exports.ValidationText = ValidationText;

var PasswordField =
/*#__PURE__*/
function (_Component) {
  _inherits(PasswordField, _Component);

  function PasswordField(props) {
    var _this;

    _classCallCheck(this, PasswordField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PasswordField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      var input = _this.props.input;
      event.target.placeholder = '';

      _this.setState({
        meterOpen: true
      });

      input.onFocus(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var _this$props = _this.props,
          input = _this$props.input,
          placeholder = _this$props.placeholder;

      if (placeholder) {
        event.target.placeholder = placeholder;
      }

      _this.setState({
        meterOpen: false
      });

      input.onBlur(event);
    });

    _this.state = {
      meterOpen: false
    };
    return _this;
  }

  _createClass(PasswordField, [{
    key: "render",
    value: function render() {
      var _cx2;

      var _this$props2 = this.props,
          className = _this$props2.className,
          classes = _this$props2.classes,
          disabled = _this$props2.disabled,
          endAdornment = _this$props2.endAdornment,
          fullWidth = _this$props2.fullWidth,
          helperText = _this$props2.helperText,
          input = _this$props2.input,
          inputClassName = _this$props2.inputClassName,
          inputProps = _this$props2.inputProps,
          inputRef = _this$props2.inputRef,
          label = _this$props2.label,
          max = _this$props2.max,
          min = _this$props2.min,
          multiline = _this$props2.multiline,
          placeholder = _this$props2.placeholder,
          type = _this$props2.type,
          hideErrorText = _this$props2.hideErrorText,
          rightAligned = _this$props2.rightAligned,
          rows = _this$props2.rows,
          rowsMax = _this$props2.rowsMax,
          _this$props2$meta = _this$props2.meta,
          touched = _this$props2$meta.touched,
          error = _this$props2$meta.error;
      var meterOpen = this.state.meterOpen;

      var hasLetters = _validators.passwordValidator.hasLetters(input.value || '');

      var hasNumbers = _validators.passwordValidator.hasNumbers(input.value || '');

      var hasSpecialChars = _validators.passwordValidator.hasSpecialChars(input.value || '');

      var hasMinLengthChars = _validators.passwordValidator.hasMinLengthChars(input.value || '');

      return _react["default"].createElement("div", null, _react["default"].createElement(_FormControl["default"], {
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth
      }, label && _react["default"].createElement(_InputLabel["default"], null, label), helperText && _react["default"].createElement(_FormHelperText["default"], {
        className: classes.formHelperText
      }, helperText), _react["default"].createElement(_Input["default"], _extends({}, input, {
        type: type,
        placeholder: placeholder,
        multiline: multiline,
        className: (0, _classnames["default"])(classes.input, inputClassName),
        disabled: disabled,
        rows: rows,
        rowsMax: rowsMax,
        inputProps: _objectSpread({
          min: min,
          max: max
        }, inputProps, {
          className: (0, _classnames["default"])((_cx2 = {}, _defineProperty(_cx2, (0, _get["default"])(inputProps, 'className'), Boolean((0, _get["default"])(inputProps, 'className'))), _defineProperty(_cx2, 'text-right', Boolean(rightAligned)), _cx2))
        }),
        endAdornment: endAdornment,
        inputRef: inputRef,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      })), !hideErrorText && touched && error && _react["default"].createElement(_FormHelperText["default"], null, error)), _react["default"].createElement(_Popper["default"], {
        style: {
          position: 'fixed',
          zIndex: 1
        } // assigning style because doesn't take className
        ,
        open: true // open={meterOpen && !(hasMinLengthChars && hasLetters && hasNumbers && hasSpecialChars)}
        ,
        transition: true,
        disablePortal: false
      }, function (_ref2) {
        var TransitionProps = _ref2.TransitionProps,
            placement = _ref2.placement;
        return _react["default"].createElement(_Fade["default"], TransitionProps, _react["default"].createElement(_Paper["default"], {
          "aria-hidden": !meterOpen,
          elevation: 5,
          className: classes.paper
        }, _react["default"].createElement(ValidationText, {
          success: hasMinLengthChars
        }, "At least 8 characters"), _react["default"].createElement(ValidationText, {
          success: hasLetters
        }, "At least 1 letter (a, b, c, ...)"), _react["default"].createElement(ValidationText, {
          success: hasNumbers
        }, "At least 1 number (1, 2, 3, ...)"), _react["default"].createElement(ValidationText, {
          success: hasSpecialChars
        }, "At least special character ($, @, %, ...)")));
      }));
    }
  }]);

  return PasswordField;
}(_react.Component);

exports.PasswordField = PasswordField;

_defineProperty(PasswordField, "propTypes", {
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object.isRequired,
  disabled: _propTypes["default"].bool,
  fullWidth: _propTypes["default"].bool,
  helperText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  input: _propTypes["default"].object.isRequired,
  inputClassName: _propTypes["default"].string,
  inputProps: _propTypes["default"].object,
  label: _propTypes["default"].string,
  max: _propTypes["default"].number,
  min: _propTypes["default"].number,
  multiline: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  type: _propTypes["default"].string,
  hideErrorText: _propTypes["default"].bool,
  rightAligned: _propTypes["default"].bool,
  rows: _propTypes["default"].number,
  rowsMax: _propTypes["default"].number
});

var _default = (0, _styles.withStyles)(_styles2["default"])(PasswordField);

exports["default"] = _default;