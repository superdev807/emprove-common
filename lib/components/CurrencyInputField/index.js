'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _get = _interopRequireDefault(require("lodash/get"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _styles2 = _interopRequireDefault(require("./styles"));

var _pureFunctions = require("~/utils/pureFunctions");

var _numberFunctions = require("../../utils/numberFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CurrencyInputField =
/*#__PURE__*/
function (_Component) {
  _inherits(CurrencyInputField, _Component);

  function CurrencyInputField(props) {
    var _this;

    _classCallCheck(this, CurrencyInputField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CurrencyInputField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      var input = _this.props.input;

      _this.setState({
        focused: true
      });

      input.onFocus(input.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var _this$props = _this.props,
          input = _this$props.input,
          meta = _this$props.meta,
          onValidBlur = _this$props.onValidBlur;

      _this.setState({
        focused: false
      });

      input.onBlur(input.value);
      meta.valid && onValidBlur && onValidBlur(event, input.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var input = _this.props.input;
      var value = event.target.value;
      input.onChange(value ? Number(value) : value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleRef", function (ref) {
      _this.inputEl = ref;
    });

    _this.state = {
      focused: false
    };
    return _this;
  }

  _createClass(CurrencyInputField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if ((0, _pureFunctions.propsChanged)(['focused'], prevState, this.state) && this.state.focused && parseInt(this.props.input.value, 10) === 0) {
        this.inputEl.select();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _cx;

      var _this$props2 = this.props,
          allowNegative = _this$props2.allowNegative,
          classes = _this$props2.classes,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          fullWidth = _this$props2.fullWidth,
          hideErrorText = _this$props2.hideErrorText,
          input = _this$props2.input,
          inputClassName = _this$props2.inputClassName,
          inputProps = _this$props2.inputProps,
          label = _this$props2.label,
          _this$props2$meta = _this$props2.meta,
          touched = _this$props2$meta.touched,
          error = _this$props2$meta.error,
          placeholder = _this$props2.placeholder,
          rightAligned = _this$props2.rightAligned;
      return _react["default"].createElement(_FormControl["default"], {
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth
      }, label && _react["default"].createElement(_InputLabel["default"], null, label), _react["default"].createElement(_Input["default"], _extends({}, input, {
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onChange: this.handleChange,
        type: "text",
        inputComponent: _numberFunctions.NumberFormatCustom,
        className: (0, _classnames["default"])(classes.currencyInput, inputClassName),
        placeholder: placeholder,
        disabled: disabled,
        inputProps: _objectSpread({}, inputProps, {
          allowNegative: allowNegative || false,
          getInputRef: this.handleRef,
          className: (0, _classnames["default"])((_cx = {}, _defineProperty(_cx, (0, _get["default"])(inputProps, 'className'), Boolean((0, _get["default"])(inputProps, 'className'))), _defineProperty(_cx, 'text-right', Boolean(rightAligned)), _cx))
        }),
        startAdornment: _react["default"].createElement(_InputAdornment["default"], {
          position: "start"
        }, "$")
      })), !hideErrorText && touched && error && _react["default"].createElement(_FormHelperText["default"], null, error));
    }
  }]);

  return CurrencyInputField;
}(_react.Component);

_defineProperty(CurrencyInputField, "propTypes", {
  allowNegative: _propTypes["default"].bool,
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  fullWidth: _propTypes["default"].bool,
  hideErrorText: _propTypes["default"].bool,
  input: _propTypes["default"].object.isRequired,
  inputProps: _propTypes["default"].object,
  inputClassName: _propTypes["default"].string,
  label: _propTypes["default"].string,
  meta: _propTypes["default"].object.isRequired,
  onValidBlur: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  rightAligned: _propTypes["default"].bool
});

var _default = (0, _styles.withStyles)(_styles2["default"])(CurrencyInputField);

exports["default"] = _default;