'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.array.index-of";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.assign";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-properties";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.keys";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.for-each";
import "core-js/modules/web.dom-collections.iterator";

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

import React, { Component } from 'react';
import cx from 'classnames';
import moment from 'moment-timezone';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import DateTime from './TetheredDateTime';
import IconCalendar from '../../icons/IconCalendar';
import styles from './styles';

var DateMask = function DateMask(_ref) {
  var inputRef = _ref.inputRef,
      otherProps = _objectWithoutProperties(_ref, ["inputRef"]);

  return React.createElement(MaskedInput, _extends({
    ref: function ref(_ref2) {
      inputRef(_ref2 ? _ref2.inputElement : null);
    }
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
    moment.tz(moment(date).format('YYYY-MM-DD'), 'YYYY-MM-DD', timezone)
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
          label = _this$props3.label,
          placeholder = _this$props3.placeholder,
          variant = _this$props3.variant;

      var inputProps = _objectSpread({}, props, {
        className: datePickerInputText ? datePickerInputText : 'datePickerInputText'
      });

      return variant === 'outlined' ? React.createElement("div", null, React.createElement(TextField, _extends({}, inputProps, {
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
      }))) : React.createElement("div", null, React.createElement(Input, _extends({}, inputProps, {
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
        var disableDate = moment.tz(disableDatePast, timezone).startOf('day');
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
        var disableDate = moment.tz(disableDateFuture, timezone).endOf('day');
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
          viewDate = _this$props6.viewDate,
          variant = _this$props6.variant;
      var inputDate = input.value !== 'Invalid date' && input.value !== '' ? moment.tz(input.value, timezone) : input.value;
      var sanitizedViewDate = viewDate && viewDate !== 'Invalid date' ? moment.tz(viewDate, timezone) : inputDate || undefined;
      return React.createElement(FormControl, {
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth
      }, label && React.createElement(InputLabel, {
        shrink: !!input.value || undefined
      }, label), helperText && variant !== 'outlined' && React.createElement(FormHelperText, null, helperText), React.createElement("div", {
        className: classes.inputWrapper
      }, React.createElement(DateTime, {
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
      }), variant === 'outlined' ? React.createElement(IconCalendar, {
        className: classes.icon
      }) : React.createElement(IconCalendar, {
        className: cx(classes.icon, classes.originIcon)
      })), !hideErrorText && touched && error && React.createElement(FormHelperText, {
        className: errorClassName
      }, error));
    }
  }]);

  return DatePickerField;
}(Component);

_defineProperty(DatePickerField, "propTypes", {
  className: PropTypes.string,
  datePickerInputText: PropTypes.string,
  disableDateFuture: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  disableDatePast: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  fullWidth: PropTypes.bool,
  hideErrorText: PropTypes.bool,
  input: PropTypes.object,
  inputRef: PropTypes.func,
  label: PropTypes.string,
  meta: PropTypes.object,
  onValidBlur: PropTypes.func,
  timezone: PropTypes.string
});

export default withStyles(styles)(DatePickerField);
export { DatePickerField }; //for testing