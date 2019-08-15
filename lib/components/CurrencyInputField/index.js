'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

import React, { Component } from 'react';
import cx from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import get from 'lodash/get';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { propsChanged } from '~/utils/pureFunctions';
import { NumberFormatCustom } from '../../utils/numberFunctions';

var CurrencyInputField =
/*#__PURE__*/
function (_Component) {
  _inherits(CurrencyInputField, _Component);

  function CurrencyInputField(props) {
    var _this;

    _classCallCheck(this, CurrencyInputField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CurrencyInputField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      var input = _this.props.input;

      _this.setState({
        focused: true
      });

      input.onFocus(input.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var _this$props = _this.props,
          input = _this$props.input,
          meta = _this$props.meta,
          onValidBlur = _this$props.onValidBlur;

      _this.setState({
        focused: false
      });

      input.onBlur(input.value);
      meta.valid && onValidBlur && onValidBlur(event, input.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var input = _this.props.input;
      var value = event.target.value;
      input.onChange(value ? Number(value) : value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleRef", function (ref) {
      _this.inputEl = ref;
    });

    _this.state = {
      focused: false
    };
    return _this;
  }

  _createClass(CurrencyInputField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (propsChanged(['focused'], prevState, this.state) && this.state.focused && parseInt(this.props.input.value, 10) === 0) {
        this.inputEl.select();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _cx;

      var _this$props2 = this.props,
          allowNegative = _this$props2.allowNegative,
          classes = _this$props2.classes,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          fullWidth = _this$props2.fullWidth,
          hideErrorText = _this$props2.hideErrorText,
          input = _this$props2.input,
          inputClassName = _this$props2.inputClassName,
          inputProps = _this$props2.inputProps,
          label = _this$props2.label,
          _this$props2$meta = _this$props2.meta,
          touched = _this$props2$meta.touched,
          error = _this$props2$meta.error,
          placeholder = _this$props2.placeholder,
          rightAligned = _this$props2.rightAligned;
      return React.createElement(FormControl, {
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth
      }, label && React.createElement(InputLabel, null, label), React.createElement(Input, _extends({}, input, {
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onChange: this.handleChange,
        type: "text",
        inputComponent: NumberFormatCustom,
        className: cx(classes.currencyInput, inputClassName),
        placeholder: placeholder,
        disabled: disabled,
        inputProps: _objectSpread({}, inputProps, {
          allowNegative: allowNegative || false,
          getInputRef: this.handleRef,
          className: cx((_cx = {}, _defineProperty(_cx, get(inputProps, 'className'), Boolean(get(inputProps, 'className'))), _defineProperty(_cx, 'text-right', Boolean(rightAligned)), _cx))
        }),
        startAdornment: React.createElement(InputAdornment, {
          position: "start"
        }, "$")
      })), !hideErrorText && touched && error && React.createElement(FormHelperText, null, error));
    }
  }]);

  return CurrencyInputField;
}(Component);

_defineProperty(CurrencyInputField, "propTypes", {
  allowNegative: PropTypes.bool,
  classes: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  hideErrorText: PropTypes.bool,
  input: PropTypes.object.isRequired,
  inputProps: PropTypes.object,
  inputClassName: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.object.isRequired,
  onValidBlur: PropTypes.func,
  placeholder: PropTypes.string,
  rightAligned: PropTypes.bool
});

export default withStyles(styles)(CurrencyInputField);