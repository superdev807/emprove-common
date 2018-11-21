'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormHelperText = require('@material-ui/core/FormHelperText');

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _Input = require('@material-ui/core/Input');

var _Input2 = _interopRequireDefault(_Input);

var _InputLabel = require('@material-ui/core/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _OutlinedInput = require('@material-ui/core/OutlinedInput');

var _OutlinedInput2 = _interopRequireDefault(_OutlinedInput);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Select = require('@material-ui/core/Select');

var _Select2 = _interopRequireDefault(_Select);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _styles = require('@material-ui/core/styles');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownField = function DropdownField(_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      disabled = _ref.disabled,
      disableUnderline = _ref.disableUnderline,
      fullWidth = _ref.fullWidth,
      helperText = _ref.helperText,
      helperTextClassName = _ref.helperTextClassName,
      input = _ref.input,
      inputClassName = _ref.inputClassName,
      inputLabelProps = _ref.inputLabelProps,
      label = _ref.label,
      menuItemClassName = _ref.menuItemClassName,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      options = _ref.options,
      overrideClasses = _ref.overrideClasses,
      placeholder = _ref.placeholder,
      selectOverride = _ref.selectOverride,
      variant = _ref.variant;

  return variant === 'outlined' ? _react2.default.createElement(
    _FormControl2.default,
    { className: className, error: touched && !!error, fullWidth: fullWidth },
    helperText && _react2.default.createElement(
      _FormHelperText2.default,
      { className: helperTextClassName },
      helperText
    ),
    _react2.default.createElement(
      _TextField2.default,
      {
        select: true,
        label: label,
        onChange: input.onBlur,
        value: input.value,
        className: inputClassName,
        classes: overrideClasses,
        variant: 'outlined',
        InputProps: { classes: { input: classes.input } },
        InputLabelProps: _extends({}, inputLabelProps),
        SelectProps: {
          classes: _extends({}, selectOverride, {
            selectMenu: classes.select
          })
        } },
      placeholder && _react2.default.createElement(
        _MenuItem2.default,
        { value: '' },
        placeholder
      ),
      options && options.map(function (option, index) {
        return option.value ? _react2.default.createElement(
          _MenuItem2.default,
          { key: option.value, className: menuItemClassName, value: option.value },
          option.label
        ) : _react2.default.createElement(
          _MenuItem2.default,
          { key: index, className: menuItemClassName, value: option },
          option
        );
      })
    ),
    touched && error && _react2.default.createElement(
      _FormHelperText2.default,
      null,
      error
    )
  ) : _react2.default.createElement(
    _FormControl2.default,
    { className: className, error: touched && !!error, fullWidth: fullWidth },
    helperText && _react2.default.createElement(
      _FormHelperText2.default,
      { className: helperTextClassName },
      helperText
    ),
    label && _react2.default.createElement(
      _InputLabel2.default,
      null,
      label
    ),
    _react2.default.createElement(
      _Select2.default,
      {
        onChange: input.onBlur,
        value: input.value,
        className: (0, _classnames2.default)(classes.originSelect, inputClassName),
        displayEmpty: !!placeholder,
        disableUnderline: disableUnderline,
        classes: overrideClasses },
      placeholder && _react2.default.createElement(
        _MenuItem2.default,
        { value: '' },
        placeholder
      ),
      options && options.map(function (option, index) {
        return option.value ? _react2.default.createElement(
          _MenuItem2.default,
          { key: option.value, className: menuItemClassName, value: option.value },
          option.label
        ) : _react2.default.createElement(
          _MenuItem2.default,
          { key: index, className: menuItemClassName, value: option },
          option
        );
      })
    ),
    touched && error && _react2.default.createElement(
      _FormHelperText2.default,
      null,
      error
    )
  );
};

DropdownField.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  disableUnderline: _propTypes2.default.bool,
  fullWidth: _propTypes2.default.bool,
  helperText: _propTypes2.default.string,
  helperTextClassName: _propTypes2.default.string,
  input: _propTypes2.default.object.isRequired,
  inputClassName: _propTypes2.default.string,
  inputLabelProps: _propTypes2.default.object,
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  menuItemClassName: _propTypes2.default.string,
  meta: _propTypes2.default.object.isRequired,
  options: _propTypes2.default.array.isRequired,
  overrideClasses: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,
  selectOverride: _propTypes2.default.object,
  variant: _propTypes2.default.string
};

exports.DropdownField = DropdownField;
exports.default = (0, _styles.withStyles)(_styles3.default)(DropdownField);