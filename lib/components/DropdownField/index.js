'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownField = function (_Component) {
  _inherits(DropdownField, _Component);

  function DropdownField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropdownField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownField.__proto__ || Object.getPrototypeOf(DropdownField)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
      var _this$props = _this.props,
          input = _this$props.input,
          onValidBlur = _this$props.onValidBlur;

      input.onBlur(event);
      setTimeout(function () {
        // Trigger onValidBlur with a delay, so that meta.valid is reflected correctly.
        // TODO: Consider to separate input.onChange in this.handleChange and input.onBlur in this.handleBlur
        // after testing thoroughly in both contractor & consumer
        var _this$props2 = _this.props,
            input = _this$props2.input,
            meta = _this$props2.meta;

        onValidBlur && meta.valid && onValidBlur(event, input.value);
      }, 100);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DropdownField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          classes = _props.classes,
          capitalize = _props.capitalize,
          disabled = _props.disabled,
          disableUnderline = _props.disableUnderline,
          fullWidth = _props.fullWidth,
          helperText = _props.helperText,
          helperTextClassName = _props.helperTextClassName,
          id = _props.id,
          input = _props.input,
          inputClassName = _props.inputClassName,
          inputLabelProps = _props.inputLabelProps,
          label = _props.label,
          menuItemClassName = _props.menuItemClassName,
          _props$meta = _props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          options = _props.options,
          overrideClasses = _props.overrideClasses,
          placeholder = _props.placeholder,
          selectOverride = _props.selectOverride,
          variant = _props.variant;

      return variant === 'outlined' ? _react2.default.createElement(
        _FormControl2.default,
        { id: id, className: className, error: touched && !!error, fullWidth: fullWidth },
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
            name: input.name,
            onChange: this.handleChange,
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
              capitalize ? option.label.toUpperCase() : option.label
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
        { id: id, className: className, error: touched && !!error, fullWidth: fullWidth },
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
            onChange: this.handleChange,
            value: input.value,
            name: input.name,
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
              capitalize ? option.label.toUpperCase() : option.label
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
    }
  }]);

  return DropdownField;
}(_react.Component);

DropdownField.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  disableUnderline: _propTypes2.default.bool,
  fullWidth: _propTypes2.default.bool,
  helperText: _propTypes2.default.string,
  helperTextClassName: _propTypes2.default.string,
  id: _propTypes2.default.string,
  input: _propTypes2.default.object.isRequired,
  inputClassName: _propTypes2.default.string,
  inputLabelProps: _propTypes2.default.object,
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  menuItemClassName: _propTypes2.default.string,
  meta: _propTypes2.default.object.isRequired,
  onValidBlur: _propTypes2.default.func,
  options: _propTypes2.default.array.isRequired,
  overrideClasses: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,
  selectOverride: _propTypes2.default.object,
  variant: _propTypes2.default.string
};
exports.DropdownField = DropdownField;
exports.default = (0, _styles.withStyles)(_styles3.default)(DropdownField);