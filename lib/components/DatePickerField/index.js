'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePickerField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _FormHelperText = require('@material-ui/core/FormHelperText');

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Input = require('@material-ui/core/Input');

var _Input2 = _interopRequireDefault(_Input);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePickerField = function (_Component) {
  _inherits(DatePickerField, _Component);

  function DatePickerField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatePickerField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatePickerField.__proto__ || Object.getPrototypeOf(DatePickerField)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (date) {
      var input = _this.props.input;

      if (typeof date === 'string') {
        input.onChange(input.value);
      } else {
        input.onChange && input.onChange(date);
      }
    }, _this.renderInput = function (props) {
      var datePickerInputText = _this.props.datePickerInputText;

      var inputProps = _extends({}, props, { className: datePickerInputText ? datePickerInputText : 'datePickerInputText' });
      (function () {
        props.onChange({ target: { value: '' } });
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Input2.default, _extends({}, inputProps, { type: 'text' }))
      );
    }, _this.disablePast = function (current) {
      var disableDatePast = _this.props.disableDatePast;


      var disableMomentDate = disableDatePast ? _moment2.default.isMoment(disableDatePast) ? disableDatePast : (0, _moment2.default)(disableDatePast, 'YYYY-MM-DD') : (0, _moment2.default)();
      var dayDiff = disableMomentDate.diff((0, _moment2.default)(), 'd');
      var disableDate = (0, _moment2.default)().add(dayDiff, 'd');
      return current.isAfter(disableDate);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePickerField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          input = _props.input,
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
          viewDate = _props.viewDate;


      var inputDate = input.value !== '' ? _moment2.default.isMoment(input.value) ? input.value.format('MM/DD/YYYY') : (0, _moment2.default)(input.value, 'YYYY-MM-DD').format('MM/DD/YYYY') : null;

      return _react2.default.createElement(
        _FormControl2.default,
        { className: className, error: touched && !!error, fullWidth: fullWidth },
        label && _react2.default.createElement(
          InputLabel,
          { shrink: !!input.value || undefined },
          label
        ),
        helperText && _react2.default.createElement(
          _FormHelperText2.default,
          null,
          helperText
        ),
        _react2.default.createElement(_reactDatetime2.default, {
          renderInput: this.renderInput,
          className: datePickerClassName,
          value: inputDate,
          viewDate: viewDate ? viewDate : inputDate,
          onChange: this.handleChange,
          timeFormat: timeFormat ? timeFormat : false,
          closeOnSelect: true,
          isValidDate: disableDatePast && this.disablePast //if disableDatePast is given, dates before that date become unavailable
        }),
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
  className: _propTypes2.default.string,
  fullWidth: _propTypes2.default.bool,
  hideErrorText: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  meta: _propTypes2.default.object,
  disableDatePast: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  datePickerInputText: _propTypes2.default.string
};
exports.default = DatePickerField;
exports.DatePickerField = DatePickerField; //for testing