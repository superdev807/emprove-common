'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePickerField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _FormHelperText = require('@material-ui/core/FormHelperText');

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Input = require('@material-ui/core/Input');

var _Input2 = _interopRequireDefault(_Input);

var _InputLabel = require('@material-ui/core/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _reactTextMask = require('react-text-mask');

var _reactTextMask2 = _interopRequireDefault(_reactTextMask);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _TetheredDateTime = require('./TetheredDateTime');

var _TetheredDateTime2 = _interopRequireDefault(_TetheredDateTime);

var _IconCalendar = require('../../icons/IconCalendar');

var _IconCalendar2 = _interopRequireDefault(_IconCalendar);

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DateMask = function DateMask(_ref) {
  var inputRef = _ref.inputRef,
      otherProps = _objectWithoutProperties(_ref, ['inputRef']);

  return _react2.default.createElement(_reactTextMask2.default, _extends({
    ref: inputRef
  }, otherProps, {
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    guide: true,
    placeholderChar: '\u2000'
  }));
};

var DatePickerField = function (_Component) {
  _inherits(DatePickerField, _Component);

  function DatePickerField(props) {
    _classCallCheck(this, DatePickerField);

    var _this = _possibleConstructorReturn(this, (DatePickerField.__proto__ || Object.getPrototypeOf(DatePickerField)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(DatePickerField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          input = _props.input,
          classes = _props.classes,
          className = _props.className,
          datePickerClassName = _props.datePickerClassName,
          timeFormat = _props.timeFormat,
          label = _props.label,
          fullWidth = _props.fullWidth,
          _props$meta = _props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          helperText = _props.helperText,
          errorClassName = _props.errorClassName,
          hideErrorText = _props.hideErrorText,
          disableDatePast = _props.disableDatePast,
          viewDate = _props.viewDate,
          alignment = _props.alignment;
      var open = this.state.open;


      var inputDate = input.value !== 'Invalid date' && input.value !== '' ? _moment2.default.isMoment(input.value) ? input.value.format('MM/DD/YYYY') : (0, _moment2.default)(input.value, 'YYYY-MM-DD').format('MM/DD/YYYY') : input.value;

      return _react2.default.createElement(
        _FormControl2.default,
        { className: className, error: touched && !!error, fullWidth: fullWidth },
        label && _react2.default.createElement(
          _InputLabel2.default,
          { shrink: !!input.value || undefined },
          label
        ),
        helperText && _react2.default.createElement(
          _FormHelperText2.default,
          null,
          helperText
        ),
        _react2.default.createElement(
          'div',
          { className: classes.inputWrapper },
          _react2.default.createElement(_TetheredDateTime2.default, {
            renderInput: this.renderInput,
            className: datePickerClassName,
            defaultValue: inputDate,
            viewDate: viewDate && viewDate !== 'Invalid date' ? viewDate : inputDate !== '' ? inputDate : new Date() // determines the calendar month to display
            , onChange: this.handleChange,
            onBlur: this.handleBlur,
            timeFormat: timeFormat ? timeFormat : false,
            closeOnSelect: true,
            isValidDate: disableDatePast && this.disablePast //if disableDatePast is given, dates before that date become unavailable
            , open: open
          }),
          _react2.default.createElement(_IconCalendar2.default, { className: classes.icon })
        ),
        !hideErrorText && touched && error && _react2.default.createElement(
          _FormHelperText2.default,
          { className: errorClassName },
          error
        )
      );
    }
  }]);

  return DatePickerField;
}(_react.Component);

DatePickerField.propTypes = {
  input: _propTypes2.default.object,
  inputRef: _propTypes2.default.func,
  className: _propTypes2.default.string,
  fullWidth: _propTypes2.default.bool,
  hideErrorText: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  meta: _propTypes2.default.object,
  disableDatePast: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  datePickerInputText: _propTypes2.default.string
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.toggleDateWidget = function () {
    _this2.setState({
      open: !_this2.state.open
    });
  };

  this.closeDateWidget = function () {
    _this2.setState({
      open: false
    });
  };

  this.handleChange = function (date) {
    var input = _this2.props.input;

    input.onChange && input.onChange(date);
    //close the widget when the date var becomes a date. when the var is not a date, it's a string.
    if (typeof date !== 'string') {
      _this2.closeDateWidget();
    }
  };

  this.handleBlur = function (date) {
    var input = _this2.props.input;

    input.onBlur && input.onBlur(date);
    _this2.closeDateWidget();
  };

  this.handleInputRef = function (ref) {
    var inputRef = _this2.props.inputRef;

    inputRef && ref && inputRef(ref.inputElement);
  };

  this.renderInput = function (props) {
    var _props2 = _this2.props,
        datePickerInputText = _props2.datePickerInputText,
        input = _props2.input,
        inputRef = _props2.inputRef,
        label = _props2.label,
        placeholder = _props2.placeholder;

    var inputProps = _extends({}, props, { className: datePickerInputText ? datePickerInputText : 'datePickerInputText' });

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Input2.default, _extends({}, inputProps, {
        inputRef: _this2.handleInputRef,
        type: 'text',
        placeholder: label && !input.value ? undefined : placeholder,
        inputComponent: DateMask
      }))
    );
  };

  this.disablePast = function (current) {
    var disableDatePast = _this2.props.disableDatePast;


    var disableMomentDate = disableDatePast ? _moment2.default.isMoment(disableDatePast) ? disableDatePast : (0, _moment2.default)(disableDatePast, 'YYYY-MM-DD') : (0, _moment2.default)();
    var dayDiff = disableMomentDate.diff((0, _moment2.default)(), 'd');
    var disableDate = (0, _moment2.default)().add(dayDiff, 'd');
    return current.isAfter(disableDate);
  };
};

exports.default = (0, _styles.withStyles)(_styles3.default)(DatePickerField);
exports.DatePickerField = DatePickerField; //for testing