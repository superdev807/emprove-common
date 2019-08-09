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
    var _getPrototypeOf2, _context;

    var _this;

    _classCallCheck(this, PhoneNumberField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PhoneNumberField)).call.apply(_getPrototypeOf2, _concatInstanceProperty(_context = [this]).call(_context, args)));

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