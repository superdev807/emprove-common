'use strict';

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
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MaskedInput from 'react-text-mask';
import { withStyles } from '@material-ui/core/styles';
import { sanitizePhoneNumber } from '../../utils/phonenumberFunctions';
import styles from './styles';

var PhoneNumberMask = function PhoneNumberMask(_ref) {
  var inputRef = _ref.inputRef,
      inputProps = _objectWithoutProperties(_ref, ["inputRef"]);

  return React.createElement(MaskedInput, _extends({}, inputProps, {
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
      input.onChange(sanitizePhoneNumber(event.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var input = _this.props.input;
      input.onBlur(sanitizePhoneNumber(event.target.value));
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
      return React.createElement(FormControl, {
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth
      }, label && React.createElement(InputLabel, {
        className: labelClassName
      }, label), helperText && React.createElement(FormHelperText, null, helperText), React.createElement(Input, _extends({}, input, {
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        type: type,
        className: cx(classes.phoneNumber, inputClassName),
        placeholder: placeholder,
        disabled: disabled,
        inputComponent: PhoneNumberMask,
        inputProps: _objectSpread({}, inputProps)
      })), touched && error && React.createElement(FormHelperText, {
        className: errorMessageClass
      }, error));
    }
  }]);

  return PhoneNumberField;
}(Component);

export default withStyles(styles)(PhoneNumberField);