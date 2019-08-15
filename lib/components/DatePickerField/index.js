'use strict';

import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(source, true)).call(_context2, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(source)).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    var _getPrototypeOf2, _context;

    var _this;

    _classCallCheck(this, DatePickerField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DatePickerField)).call.apply(_getPrototypeOf2, _concatInstanceProperty(_context = [this]).call(_context, args)));

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