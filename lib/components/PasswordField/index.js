'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordField = exports.ValidationText = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Fade = require('@material-ui/core/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormHelperText = require('@material-ui/core/FormHelperText');

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _Check = require('@material-ui/icons/Check');

var _Check2 = _interopRequireDefault(_Check);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Input = require('@material-ui/core/Input');

var _Input2 = _interopRequireDefault(_Input);

var _InputLabel = require('@material-ui/core/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Popper = require('@material-ui/core/Popper');

var _Popper2 = _interopRequireDefault(_Popper);

var _styles = require('@material-ui/core/styles');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

var _validators = require('../../utils/validators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ValidationText = exports.ValidationText = (0, _styles.withStyles)(_styles2.validatorTextStyles)(function (_ref) {
  var _cx;

  var children = _ref.children,
      classes = _ref.classes,
      success = _ref.success;
  return _react2.default.createElement(
    _Typography2.default,
    { variant: 'caption', gutterBottom: true, className: (0, _classnames2.default)((_cx = {}, _defineProperty(_cx, classes.success, success), _defineProperty(_cx, classes.fail, !success), _cx)) },
    success ? _react2.default.createElement(_Check2.default, { color: 'inherit', className: classes.icon }) : _react2.default.createElement(_Close2.default, { color: 'inherit', className: classes.icon }),
    _react2.default.createElement(
      'span',
      { className: classes.text },
      children
    )
  );
});

var PasswordField = exports.PasswordField = function (_Component) {
  _inherits(PasswordField, _Component);

  function PasswordField(props) {
    _classCallCheck(this, PasswordField);

    var _this = _possibleConstructorReturn(this, (PasswordField.__proto__ || Object.getPrototypeOf(PasswordField)).call(this, props));

    _this.handleFocus = function (event) {
      var input = _this.props.input;

      event.target.placeholder = '';
      _this.setState({ meterOpen: true });
      input.onFocus(event);
    };

    _this.handleBlur = function (event) {
      var _this$props = _this.props,
          input = _this$props.input,
          placeholder = _this$props.placeholder;

      if (placeholder) {
        event.target.placeholder = placeholder;
      }
      _this.setState({ meterOpen: false });
      input.onBlur(event);
    };

    _this.state = {
      meterOpen: false
    };
    return _this;
  }

  _createClass(PasswordField, [{
    key: 'render',
    value: function render() {
      var _cx2;

      var _props = this.props,
          className = _props.className,
          classes = _props.classes,
          disabled = _props.disabled,
          endAdornment = _props.endAdornment,
          fullWidth = _props.fullWidth,
          helperText = _props.helperText,
          input = _props.input,
          inputClassName = _props.inputClassName,
          inputProps = _props.inputProps,
          inputRef = _props.inputRef,
          label = _props.label,
          max = _props.max,
          min = _props.min,
          multiline = _props.multiline,
          placeholder = _props.placeholder,
          type = _props.type,
          hideErrorText = _props.hideErrorText,
          rightAligned = _props.rightAligned,
          rows = _props.rows,
          rowsMax = _props.rowsMax,
          _props$meta = _props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error;
      var meterOpen = this.state.meterOpen;

      var hasLetters = _validators.passwordValidator.hasLetters(input.value || '');
      var hasNumbers = _validators.passwordValidator.hasNumbers(input.value || '');
      var hasSpecialChars = _validators.passwordValidator.hasSpecialChars(input.value || '');
      var hasMinLengthChars = _validators.passwordValidator.hasMinLengthChars(input.value || '');

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _FormControl2.default,
          { className: className, error: touched && !!error, fullWidth: fullWidth },
          label && _react2.default.createElement(
            _InputLabel2.default,
            null,
            label
          ),
          helperText && _react2.default.createElement(
            _FormHelperText2.default,
            { className: classes.formHelperText },
            helperText
          ),
          _react2.default.createElement(_Input2.default, _extends({}, input, {
            type: type,
            placeholder: placeholder,
            multiline: multiline,
            className: (0, _classnames2.default)(classes.input, inputClassName),
            disabled: disabled,
            rows: rows,
            rowsMax: rowsMax,
            inputProps: _extends({
              min: min,
              max: max
            }, inputProps, {
              className: (0, _classnames2.default)((_cx2 = {}, _defineProperty(_cx2, (0, _get2.default)(inputProps, 'className'), Boolean((0, _get2.default)(inputProps, 'className'))), _defineProperty(_cx2, 'text-right', Boolean(rightAligned)), _cx2))
            }),
            endAdornment: endAdornment,
            inputRef: inputRef,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
          })),
          !hideErrorText && touched && error && _react2.default.createElement(
            _FormHelperText2.default,
            null,
            error
          )
        ),
        _react2.default.createElement(
          _Popper2.default,
          { open: meterOpen && !(hasMinLengthChars && hasLetters && hasNumbers && hasSpecialChars), transition: true, disablePortal: true },
          function (_ref2) {
            var TransitionProps = _ref2.TransitionProps,
                placement = _ref2.placement;
            return _react2.default.createElement(
              _Fade2.default,
              TransitionProps,
              _react2.default.createElement(
                _Paper2.default,
                { 'aria-hidden': !meterOpen, elevation: 5, className: classes.paper },
                _react2.default.createElement(
                  ValidationText,
                  { success: hasMinLengthChars },
                  'At least 8 characters'
                ),
                _react2.default.createElement(
                  ValidationText,
                  { success: hasLetters },
                  'At least 1 letter (a, b, c, ...)'
                ),
                _react2.default.createElement(
                  ValidationText,
                  { success: hasNumbers },
                  'At least 1 number (1, 2, 3, ...)'
                ),
                _react2.default.createElement(
                  ValidationText,
                  { success: hasSpecialChars },
                  'At least special character ($, @, %, ...)'
                )
              )
            );
          }
        )
      );
    }
  }]);

  return PasswordField;
}(_react.Component);

PasswordField.propTypes = {
  className: _propTypes2.default.string,
  classes: _propTypes2.default.object.isRequired,
  disabled: _propTypes2.default.bool,
  fullWidth: _propTypes2.default.bool,
  helperText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  input: _propTypes2.default.object.isRequired,
  inputClassName: _propTypes2.default.string,
  inputProps: _propTypes2.default.object,
  label: _propTypes2.default.string,
  max: _propTypes2.default.number,
  min: _propTypes2.default.number,
  multiline: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  type: _propTypes2.default.string,
  hideErrorText: _propTypes2.default.bool,
  rightAligned: _propTypes2.default.bool,
  rows: _propTypes2.default.number,
  rowsMax: _propTypes2.default.number
};
exports.default = (0, _styles.withStyles)(_styles3.default)(PasswordField);