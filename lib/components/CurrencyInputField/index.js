'use strict';

import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _parseInt from "@babel/runtime-corejs3/core-js-stable/parse-int";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(source, true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(source)).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      if (propsChanged(['focused'], prevState, this.state) && this.state.focused && _parseInt(this.props.input.value, 10) === 0) {
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