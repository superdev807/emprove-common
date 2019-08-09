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
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/index-of";
import _setTimeout from "@babel/runtime-corejs3/core-js-stable/set-timeout";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(source, true)).call(_context2, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(source)).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Component } from 'react';
import cx from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import get from 'lodash/get';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { NumberMask, PhoneNumberMask } from '../../utils/mask';
import { NumberFormatCustom } from '../../utils/numberFunctions';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
export var InputField =
/*#__PURE__*/
function (_Component) {
  _inherits(InputField, _Component);

  function InputField(props) {
    var _this;

    _classCallCheck(this, InputField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      var target = event.target;
      var input = _this.props.input;
      event.target.placeholder = '';
      input.onFocus(event);

      if (_this.props.moveToFirstMaskPlaceholderOnFocus) {
        _setTimeout(function () {
          var _context;

          var cursorPosition = _indexOfInstanceProperty(_context = target.value).call(_context, '_');

          if (cursorPosition !== -1) {
            target.setSelectionRange(cursorPosition, cursorPosition);
          }
        }, 0);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var _this$props = _this.props,
          input = _this$props.input,
          placeholder = _this$props.placeholder,
          meta = _this$props.meta,
          onValidBlur = _this$props.onValidBlur;

      if (placeholder) {
        event.target.placeholder = placeholder;
      }

      input.onBlur(event);
      onValidBlur && meta.valid && onValidBlur(event, input.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var input = _this.props.input;
      var value = event.target.value;
      input.onChange(value);
    });

    _this.labelRef = React.createRef();
    return _this;
  }

  _createClass(InputField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.variant === 'outlined') {
        this.labelNode = ReactDOM.findDOMNode(this.labelRef.current);
        this.forceUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _cx;

      var _this$props2 = this.props,
          autoFocus = _this$props2.autoFocus,
          className = _this$props2.className,
          classes = _this$props2.classes,
          disabled = _this$props2.disabled,
          disableUnderline = _this$props2.disableUnderline,
          fullWidth = _this$props2.fullWidth,
          helperText = _this$props2.helperText,
          errorMessageClass = _this$props2.errorMessageClass,
          input = _this$props2.input,
          inputClasses = _this$props2.inputClasses,
          inputClassName = _this$props2.inputClassName,
          inputLabelProps = _this$props2.inputLabelProps,
          inputProps = _this$props2.inputProps,
          label = _this$props2.label,
          mask = _this$props2.mask,
          max = _this$props2.max,
          min = _this$props2.min,
          step = _this$props2.step,
          multiline = _this$props2.multiline,
          placeholder = _this$props2.placeholder,
          type = _this$props2.type,
          hideErrorText = _this$props2.hideErrorText,
          rightAligned = _this$props2.rightAligned,
          rows = _this$props2.rows,
          rowsMax = _this$props2.rowsMax,
          startAdornment = _this$props2.startAdornment,
          endAdornment = _this$props2.endAdornment,
          variant = _this$props2.variant,
          _this$props2$meta = _this$props2.meta,
          touched = _this$props2$meta.touched,
          error = _this$props2$meta.error;
      var outlined = variant === 'outlined';
      var InputComponent = outlined ? OutlinedInput : Input;
      var moreProps = {};

      if (outlined) {
        if (typeof inputLabelProps.shrink !== 'undefined') {
          moreProps.notched = inputLabelProps.shrink;
        }

        moreProps.labelWidth = this.labelNode && this.labelNode.offsetWidth || 0;
      }

      var maskingComponent;

      if (mask === 'plainNumber') {
        maskingComponent = NumberMask;
      } else if (mask === 'withThousandSeparator') {
        maskingComponent = NumberFormatCustom;
      } else if (mask === 'phoneNumber') {
        maskingComponent = PhoneNumberMask;
      }

      var labelContent = label && React.createElement(InputLabel, _extends({
        ref: this.labelRef
      }, inputLabelProps), label);

      var inputComponentProps = _objectSpread({}, input, {
        classes: inputClasses,
        type: type,
        placeholder: placeholder,
        multiline: multiline,
        className: cx(classes.input, inputClassName),
        disabled: disabled,
        rows: rows,
        rowsMax: rowsMax,
        inputProps: _objectSpread({
          min: min,
          max: max,
          step: step
        }, inputProps, {
          className: cx((_cx = {}, _defineProperty(_cx, get(inputProps, 'className'), Boolean(get(inputProps, 'className'))), _defineProperty(_cx, 'text-right', Boolean(rightAligned)), _cx))
        }),
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        startAdornment: startAdornment,
        endAdornment: endAdornment,
        inputComponent: maskingComponent,
        autoFocus: autoFocus
      }, moreProps);

      if (!outlined) {
        inputComponentProps.disableUnderline = disableUnderline;
      }

      return React.createElement(FormControl, {
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth,
        variant: variant
      }, !outlined && labelContent, helperText && React.createElement(FormHelperText, {
        className: classes.formHelperText
      }, helperText), React.createElement(InputComponent, inputComponentProps), outlined && labelContent, !hideErrorText && touched && error && React.createElement(FormHelperText, {
        className: errorMessageClass
      }, error));
    }
  }]);

  return InputField;
}(Component);

_defineProperty(InputField, "propTypes", {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  errorMessageClass: PropTypes.string,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  input: PropTypes.object.isRequired,
  inputClassName: PropTypes.string,
  inputProps: PropTypes.object,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  max: PropTypes.number,
  meta: PropTypes.object.isRequired,
  min: PropTypes.number,
  moveToFirstMaskPlaceholderOnFocus: PropTypes.bool,
  multiline: PropTypes.bool,
  onValidBlur: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  hideErrorText: PropTypes.bool,
  rightAligned: PropTypes.bool,
  rows: PropTypes.number,
  rowsMax: PropTypes.number,
  startAdornment: PropTypes.object,
  endAdornment: PropTypes.object
});

_defineProperty(InputField, "defaultProps", {
  inputLabelProps: {}
});

export default withStyles(styles)(InputField);