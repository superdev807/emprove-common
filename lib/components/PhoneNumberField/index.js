'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _reactTextMask = _interopRequireDefault(require("react-text-mask"));

var _styles = require("@material-ui/core/styles");

var _phonenumberFunctions = require("../../utils/phonenumberFunctions");

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PhoneNumberMask = function PhoneNumberMask(_ref) {
  var inputRef = _ref.inputRef,
      inputProps = _objectWithoutProperties(_ref, ["inputRef"]);

  return _react["default"].createElement(_reactTextMask["default"], _extends({}, inputProps, {
    mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] // eslint-disable-next-line no-extra-boolean-cast
    ,
    showMask: !Boolean(inputProps.placeholder) //placeholder doesn't show if showMask is true

  }));
};

var PhoneNumberField =
/*#__PURE__*/
function (_Component) {
  _inherits(PhoneNumberField, _Component);

  function PhoneNumberField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PhoneNumberField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PhoneNumberField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var input = _this.props.input;
      input.onChange((0, _phonenumberFunctions.sanitizePhoneNumber)(event.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var input = _this.props.input;
      input.onBlur((0, _phonenumberFunctions.sanitizePhoneNumber)(event.target.value));
    });

    return _this;
  }

  _createClass(PhoneNumberField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          classes = _this$props.classes,
          disabled = _this$props.disabled,
          errorMessageClass = _this$props.errorMessageClass,
          fullWidth = _this$props.fullWidth,
          helperText = _this$props.helperText,
          input = _this$props.input,
          inputClassName = _this$props.inputClassName,
          label = _this$props.label,
          labelClassName = _this$props.labelClassName,
          _this$props$meta = _this$props.meta,
          touched = _this$props$meta.touched,
          error = _this$props$meta.error,
          placeholder = _this$props.placeholder,
          inputProps = _this$props.inputProps,
          type = _this$props.type;
      return _react["default"].createElement(_FormControl["default"], {
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth
      }, label && _react["default"].createElement(_InputLabel["default"], {
        className: labelClassName
      }, label), helperText && _react["default"].createElement(_FormHelperText["default"], null, helperText), _react["default"].createElement(_Input["default"], _extends({}, input, {
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        type: type,
        className: (0, _classnames["default"])(classes.phoneNumber, inputClassName),
        placeholder: placeholder,
        disabled: disabled,
        inputComponent: PhoneNumberMask,
        inputProps: _objectSpread({}, inputProps)
      })), touched && error && _react["default"].createElement(_FormHelperText["default"], {
        className: errorMessageClass
      }, error));
    }
  }]);

  return PhoneNumberField;
}(_react.Component);

var _default = (0, _styles.withStyles)(_styles2["default"])(PhoneNumberField);

exports["default"] = _default;