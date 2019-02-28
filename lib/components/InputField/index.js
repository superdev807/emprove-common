'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InputField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _get = _interopRequireDefault(require("lodash/get"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _OutlinedInput = _interopRequireDefault(require("@material-ui/core/OutlinedInput"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _mask = require("../../utils/mask");

var _numberFunctions = require("../../utils/numberFunctions");

var _styles = require("@material-ui/core/styles");

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputField =
/*#__PURE__*/
function (_Component) {
  _inherits(InputField, _Component);

  function InputField(props) {
    var _this;

    _classCallCheck(this, InputField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      var input = _this.props.input;
      event.target.placeholder = '';
      input.onFocus(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var _this$props = _this.props,
          input = _this$props.input,
          placeholder = _this$props.placeholder,
          meta = _this$props.meta,
          onValidBlur = _this$props.onValidBlur;

      if (placeholder) {
        event.target.placeholder = placeholder;
      }

      input.onBlur(event);
      onValidBlur && meta.valid && onValidBlur(event, input.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var input = _this.props.input;
      var value = event.target.value;
      input.onChange(value);
    });

    _this.labelRef = _react.default.createRef();
    return _this;
  }

  _createClass(InputField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.variant === 'outlined') {
        this.labelNode = _reactDom.default.findDOMNode(this.labelRef.current);
        this.forceUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _cx;

      var _this$props2 = this.props,
          className = _this$props2.className,
          classes = _this$props2.classes,
          disabled = _this$props2.disabled,
          fullWidth = _this$props2.fullWidth,
          helperText = _this$props2.helperText,
          errorMessageClass = _this$props2.errorMessageClass,
          input = _this$props2.input,
          inputClasses = _this$props2.inputClasses,
          inputClassName = _this$props2.inputClassName,
          inputLabelProps = _this$props2.inputLabelProps,
          inputProps = _this$props2.inputProps,
          label = _this$props2.label,
          mask = _this$props2.mask,
          max = _this$props2.max,
          min = _this$props2.min,
          multiline = _this$props2.multiline,
          placeholder = _this$props2.placeholder,
          type = _this$props2.type,
          hideErrorText = _this$props2.hideErrorText,
          rightAligned = _this$props2.rightAligned,
          rows = _this$props2.rows,
          rowsMax = _this$props2.rowsMax,
          startAdornment = _this$props2.startAdornment,
          endAdornment = _this$props2.endAdornment,
          variant = _this$props2.variant,
          _this$props2$meta = _this$props2.meta,
          touched = _this$props2$meta.touched,
          error = _this$props2$meta.error;
      var outlined = variant === 'outlined';
      var InputComponent = outlined ? _OutlinedInput.default : _Input.default;
      var moreProps = {};

      if (outlined) {
        if (typeof inputLabelProps.shrink !== 'undefined') {
          moreProps.notched = inputLabelProps.shrink;
        }

        moreProps.labelWidth = this.labelNode && this.labelNode.offsetWidth || 0;
      }

      var maskingComponent;

      if (mask === 'plainNumber') {
        maskingComponent = _mask.NumberMask;
      } else if (mask === 'withThousandSeparator') {
        maskingComponent = _numberFunctions.NumberFormatCustom;
      } else if (mask === 'phoneNumber') {
        maskingComponent = _mask.PhoneNumberMask;
      }

      var labelContent = label && _react.default.createElement(_InputLabel.default, _extends({
        ref: this.labelRef
      }, inputLabelProps), label);

      return _react.default.createElement(_FormControl.default, {
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth,
        variant: variant
      }, !outlined && labelContent, helperText && _react.default.createElement(_FormHelperText.default, {
        className: classes.formHelperText
      }, helperText), _react.default.createElement(InputComponent, _extends({}, input, {
        classes: inputClasses,
        type: type,
        placeholder: placeholder,
        multiline: multiline,
        className: (0, _classnames.default)(classes.input, inputClassName),
        disabled: disabled,
        rows: rows,
        rowsMax: rowsMax,
        inputProps: _objectSpread({
          min: min,
          max: max
        }, inputProps, {
          className: (0, _classnames.default)((_cx = {}, _defineProperty(_cx, (0, _get.default)(inputProps, 'className'), Boolean((0, _get.default)(inputProps, 'className'))), _defineProperty(_cx, 'text-right', Boolean(rightAligned)), _cx))
        }),
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        startAdornment: startAdornment,
        endAdornment: endAdornment,
        inputComponent: maskingComponent
      }, moreProps)), outlined && labelContent, !hideErrorText && touched && error && _react.default.createElement(_FormHelperText.default, {
        className: errorMessageClass
      }, error));
    }
  }]);

  return InputField;
}(_react.Component);

exports.InputField = InputField;

_defineProperty(InputField, "propTypes", {
  className: _propTypes.default.string,
  classes: _propTypes.default.object.isRequired,
  disabled: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  helperText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  input: _propTypes.default.object.isRequired,
  inputClassName: _propTypes.default.string,
  inputProps: _propTypes.default.object,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  max: _propTypes.default.number,
  meta: _propTypes.default.object.isRequired,
  min: _propTypes.default.number,
  multiline: _propTypes.default.bool,
  onValidBlur: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  type: _propTypes.default.string,
  hideErrorText: _propTypes.default.bool,
  rightAligned: _propTypes.default.bool,
  rows: _propTypes.default.number,
  rowsMax: _propTypes.default.number,
  startAdornment: _propTypes.default.object,
  endAdornment: _propTypes.default.object
});

_defineProperty(InputField, "defaultProps", {
  inputLabelProps: {}
});

var _default = (0, _styles.withStyles)(_styles2.default)(InputField);

exports.default = _default;