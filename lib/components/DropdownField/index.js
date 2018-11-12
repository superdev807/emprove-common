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
    _classCallCheck(this, DropdownField);

    return _possibleConstructorReturn(this, (DropdownField.__proto__ || Object.getPrototypeOf(DropdownField)).apply(this, arguments));
  }

  _createClass(DropdownField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          classes = _props.classes,
          disabled = _props.disabled,
          inputProps = _props.inputProps,
          disableUnderline = _props.disableUnderline,
          fullWidth = _props.fullWidth,
          helperText = _props.helperText,
          helperTextClassName = _props.helperTextClassName,
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
          variant = _props.variant;


      var outlined = variant === 'outlined';

      return _react2.default.createElement(
        _FormControl2.default,
        { className: className, error: touched && !!error, fullWidth: fullWidth, variant: variant },
        helperText && _react2.default.createElement(
          _FormHelperText2.default,
          { className: helperTextClassName },
          helperText
        ),
        label && _react2.default.createElement(
          _InputLabel2.default,
          _extends({
            ref: function ref(_ref) {
              _this2.labelRef = _reactDom2.default.findDOMNode(_ref);
            }
          }, inputLabelProps),
          label
        ),
        _react2.default.createElement(
          _Select2.default,
          {
            onChange: input.onBlur,
            value: input.value,
            className: (0, _classnames2.default)(classes.select, inputClassName),
            displayEmpty: !!placeholder
            // disableUnderline={disableUnderline}
            , classes: overrideClasses
            // inputProps={{ ...inputProps }}
            , input: outlined ? _react2.default.createElement(_OutlinedInput2.default, {
              labelWidth: variant === 'outlined' && this.labelRef ? this.labelRef.offsetWidth : 0,
              name: 'age',
              id: 'outlined-age-simple'
            }) : undefined },
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
  input: _propTypes2.default.object.isRequired,
  inputClassName: _propTypes2.default.string,
  label: _propTypes2.default.string,
  menuItemClassName: _propTypes2.default.string,
  meta: _propTypes2.default.object.isRequired,
  options: _propTypes2.default.array.isRequired,
  overrideClasses: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,
  variant: _propTypes2.default.string
};

exports.DropdownField = DropdownField;
exports.default = (0, _styles.withStyles)(_styles3.default)(DropdownField);