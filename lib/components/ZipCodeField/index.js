'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ZipCodeField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _OutlinedInput = _interopRequireDefault(require("@material-ui/core/OutlinedInput"));

var _reactTextMask = _interopRequireDefault(require("react-text-mask"));

var _styles = require("@material-ui/core/styles");

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ZipCodeMask = function ZipCodeMask(_ref) {
  var inputRef = _ref.inputRef,
      inputProps = _objectWithoutProperties(_ref, ["inputRef"]);

  return _react["default"].createElement(_reactTextMask["default"], _extends({}, inputProps, {
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/],
    guide: false,
    showMask: true
  }));
};

var ZipCodeField =
/*#__PURE__*/
function (_Component) {
  _inherits(ZipCodeField, _Component);

  function ZipCodeField(props) {
    var _this;

    _classCallCheck(this, ZipCodeField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ZipCodeField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var _this$props = _this.props,
          input = _this$props.input,
          meta = _this$props.meta,
          onValidBlur = _this$props.onValidBlur;
      input.onBlur(event);
      onValidBlur && meta.valid && onValidBlur(event, input.value);
    });

    _this.labelRef = _react["default"].createRef();
    return _this;
  }

  _createClass(ZipCodeField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.variant === 'outlined') {
        this.labelNode = _reactDom["default"].findDOMNode(this.labelRef.current);
        this.forceUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          classes = _this$props2.classes,
          disabled = _this$props2.disabled,
          disableUnderline = _this$props2.disableUnderline,
          errorMessageClass = _this$props2.errorMessageClass,
          fullWidth = _this$props2.fullWidth,
          helperText = _this$props2.helperText,
          id = _this$props2.id,
          input = _this$props2.input,
          inputClassName = _this$props2.inputClassName,
          inputClasses = _this$props2.inputClasses,
          inputLabelProps = _this$props2.inputLabelProps,
          label = _this$props2.label,
          _this$props2$meta = _this$props2.meta,
          touched = _this$props2$meta.touched,
          error = _this$props2$meta.error,
          placeholder = _this$props2.placeholder,
          type = _this$props2.type,
          hideErrorText = _this$props2.hideErrorText,
          endAdornment = _this$props2.endAdornment,
          inputProps = _this$props2.inputProps,
          variant = _this$props2.variant;
      var outlined = variant === 'outlined';
      var InputComponent = outlined ? _OutlinedInput["default"] : _Input["default"];
      var moreProps = {};

      if (outlined) {
        if (typeof inputLabelProps.shrink !== 'undefined') {
          moreProps.notched = inputLabelProps.shrink;
        }

        moreProps.labelWidth = this.labelNode && this.labelNode.offsetWidth || 0;
      }

      var inputComponentProps = _objectSpread({}, input, {
        onBlur: this.handleBlur,
        type: type,
        className: (0, _classnames["default"])(classes.zipCode, inputClassName),
        classes: inputClasses,
        placeholder: placeholder,
        disabled: disabled,
        inputComponent: ZipCodeMask,
        endAdornment: endAdornment,
        inputProps: _objectSpread({}, inputProps)
      }, moreProps);

      if (!outlined) {
        inputComponentProps.disableUnderline = disableUnderline;
      }

      return _react["default"].createElement(_FormControl["default"], {
        id: id,
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth,
        variant: variant
      }, label && _react["default"].createElement(_InputLabel["default"] // classeName={inputLabelClassName}
      , _extends({
        ref: this.labelRef
      }, inputLabelProps), label), helperText && _react["default"].createElement(_FormHelperText["default"], null, helperText), _react["default"].createElement(InputComponent, inputComponentProps), !hideErrorText && touched && error && _react["default"].createElement(_FormHelperText["default"], {
        className: errorMessageClass
      }, error));
    }
  }]);

  return ZipCodeField;
}(_react.Component);

exports.ZipCodeField = ZipCodeField;

_defineProperty(ZipCodeField, "defaultProps", {
  inputLabelProps: {}
});

var _default = (0, _styles.withStyles)(_styles2["default"])(ZipCodeField);

exports["default"] = _default;