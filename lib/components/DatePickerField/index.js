'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePickerField = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _reactTextMask = _interopRequireDefault(require("react-text-mask"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _styles = require("@material-ui/core/styles");

var _TetheredDateTime = _interopRequireDefault(require("./TetheredDateTime"));

var _IconCalendar = _interopRequireDefault(require("../../icons/IconCalendar"));

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var DateMask = function DateMask(_ref) {
  var inputRef = _ref.inputRef,
      otherProps = _objectWithoutProperties(_ref, ["inputRef"]);

  return _react.default.createElement(_reactTextMask.default, _extends({
    ref: inputRef
  }, otherProps, {
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    guide: true,
    placeholderChar: "\u2000"
  }));
};

var convertTimezone = function convertTimezone(date, timezone) {
  return (// date parameter in onChange of DateTime is always UTC time regardless of timezone.
    // If timezone is specified, we need to make the date whose time is all set to zero in the specified timezone.
    // (e.g. from YYYY-MM-DD 00:00:00 UTC to YYYY-MM-DD 00:00:00 PST, if timezone is PST)
    _momentTimezone.default.tz((0, _momentTimezone.default)(date).format('YYYY-MM-DD'), 'YYYY-MM-DD', timezone)
  );
};

var DatePickerField =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePickerField, _Component);

  function DatePickerField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DatePickerField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DatePickerField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (date) {
      var _this$props = _this.props,
          input = _this$props.input,
          timezone = _this$props.timezone;
      input.onChange(date && timezone ? convertTimezone(date, timezone) : date);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (date) {
      var _this$props2 = _this.props,
          input = _this$props2.input,
          meta = _this$props2.meta,
          onValidBlur = _this$props2.onValidBlur,
          timezone = _this$props2.timezone;
      var value = date && timezone ? convertTimezone(date, timezone) : date || input.value;
      input.onBlur(value);
      onValidBlur && meta.valid && onValidBlur(null, value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputRef", function (ref) {
      var inputRef = _this.props.inputRef;
      inputRef && ref && inputRef(ref.inputElement);
    });

    _defineProperty(_assertThisInitialized(_this), "renderInput", function (props) {
      var _this$props3 = _this.props,
          classes = _this$props3.classes,
          datePickerInputText = _this$props3.datePickerInputText,
          helperText = _this$props3.helperText,
          input = _this$props3.input,
          inputRef = _this$props3.inputRef,
          label = _this$props3.label,
          placeholder = _this$props3.placeholder,
          variant = _this$props3.variant;

      var inputProps = _objectSpread({}, props, {
        className: datePickerInputText ? datePickerInputText : 'datePickerInputText'
      });

      return variant === 'outlined' ? _react.default.createElement("div", null, _react.default.createElement(_TextField.default, _extends({}, inputProps, {
        inputRef: _this.handleInputRef,
        type: "text",
        placeholder: label && !input.value ? undefined : placeholder,
        label: helperText,
        variant: "outlined",
        InputProps: {
          inputComponent: DateMask,
          classes: {
            input: classes.input
          }
        },
        InputLabelProps: {
          shrink: true
        }
      }))) : _react.default.createElement("div", null, _react.default.createElement(_Input.default, _extends({}, inputProps, {
        inputRef: _this.handleInputRef,
        type: "text",
        placeholder: label && !input.value ? undefined : placeholder,
        inputComponent: DateMask
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "handleValidDatePast", function (current) {
      var _this$props4 = _this.props,
          disableDatePast = _this$props4.disableDatePast,
          timezone = _this$props4.timezone;

      if (disableDatePast) {
        var disableDate = _momentTimezone.default.tz(disableDatePast, timezone).startOf('day');

        return current.isSameOrAfter(disableDate);
      } else {
        return true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleValidDateFuture", function (current) {
      var _this$props5 = _this.props,
          disableDateFuture = _this$props5.disableDateFuture,
          timezone = _this$props5.timezone;

      if (disableDateFuture) {
        var disableDate = _momentTimezone.default.tz(disableDateFuture, timezone).endOf('day');

        return current.isSameOrBefore(disableDate);
      } else {
        return true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleValidDate", function (current) {
      return _this.handleValidDatePast(current) && _this.handleValidDateFuture(current);
    });

    return _this;
  }

  _createClass(DatePickerField, [{
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          input = _this$props6.input,
          classes = _this$props6.classes,
          className = _this$props6.className,
          datePickerClassName = _this$props6.datePickerClassName,
          timeFormat = _this$props6.timeFormat,
          timezone = _this$props6.timezone,
          label = _this$props6.label,
          fullWidth = _this$props6.fullWidth,
          _this$props6$meta = _this$props6.meta,
          touched = _this$props6$meta.touched,
          error = _this$props6$meta.error,
          helperText = _this$props6.helperText,
          errorClassName = _this$props6.errorClassName,
          hideErrorText = _this$props6.hideErrorText,
          disableDatePast = _this$props6.disableDatePast,
          viewDate = _this$props6.viewDate,
          alignment = _this$props6.alignment,
          variant = _this$props6.variant;
      var inputDate = input.value !== 'Invalid date' && input.value !== '' ? _momentTimezone.default.tz(input.value, timezone) : input.value;
      var sanitizedViewDate = viewDate && viewDate !== 'Invalid date' ? _momentTimezone.default.tz(viewDate, timezone) : inputDate || undefined;
      return _react.default.createElement(_FormControl.default, {
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth
      }, label && _react.default.createElement(_InputLabel.default, {
        shrink: !!input.value || undefined
      }, label), helperText && variant !== 'outlined' && _react.default.createElement(_FormHelperText.default, null, helperText), _react.default.createElement("div", {
        className: classes.inputWrapper
      }, _react.default.createElement(_TetheredDateTime.default, {
        renderInput: this.renderInput,
        className: datePickerClassName,
        defaultValue: inputDate,
        viewDate: sanitizedViewDate // determines the calendar month to display
        ,
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        dateFormat: "MM/DD/YYYY",
        displayTimeZone: timezone,
        timeFormat: timeFormat ? timeFormat : false,
        closeOnSelect: true,
        isValidDate: this.handleValidDate
      }), variant === 'outlined' ? _react.default.createElement(_IconCalendar.default, {
        className: classes.icon
      }) : _react.default.createElement(_IconCalendar.default, {
        className: (0, _classnames.default)(classes.icon, classes.originIcon)
      })), !hideErrorText && touched && error && _react.default.createElement(_FormHelperText.default, {
        className: errorClassName
      }, error));
    }
  }]);

  return DatePickerField;
}(_react.Component);

exports.DatePickerField = DatePickerField;

_defineProperty(DatePickerField, "propTypes", {
  className: _propTypes.default.string,
  datePickerInputText: _propTypes.default.string,
  disableDateFuture: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  disableDatePast: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  fullWidth: _propTypes.default.bool,
  hideErrorText: _propTypes.default.bool,
  input: _propTypes.default.object,
  inputRef: _propTypes.default.func,
  label: _propTypes.default.string,
  meta: _propTypes.default.object,
  onValidBlur: _propTypes.default.func,
  timezone: _propTypes.default.string
});

var _default = (0, _styles.withStyles)(_styles2.default)(DatePickerField); //for testing


exports.default = _default;