'use strict';

import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(source, true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(source)).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Component } from 'react';
import cx from 'classnames';
import ReactDOM from 'react-dom';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MaskedInput from 'react-text-mask';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

var ZipCodeMask = function ZipCodeMask(_ref) {
  var inputRef = _ref.inputRef,
      inputProps = _objectWithoutProperties(_ref, ["inputRef"]);

  return React.createElement(MaskedInput, _extends({}, inputProps, {
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/],
    guide: false,
    showMask: true
  }));
};

export var ZipCodeField =
/*#__PURE__*/
function (_Component) {
  _inherits(ZipCodeField, _Component);

  function ZipCodeField(props) {
    var _this;

    _classCallCheck(this, ZipCodeField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ZipCodeField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var _this$props = _this.props,
          input = _this$props.input,
          meta = _this$props.meta,
          onValidBlur = _this$props.onValidBlur;
      input.onBlur(event);
      onValidBlur && meta.valid && onValidBlur(event, input.value);
    });

    _this.labelRef = React.createRef();
    return _this;
  }

  _createClass(ZipCodeField, [{
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
      var _this$props2 = this.props,
          className = _this$props2.className,
          classes = _this$props2.classes,
          disabled = _this$props2.disabled,
          disableUnderline = _this$props2.disableUnderline,
          errorMessageClass = _this$props2.errorMessageClass,
          fullWidth = _this$props2.fullWidth,
          helperText = _this$props2.helperText,
          id = _this$props2.id,
          input = _this$props2.input,
          inputClassName = _this$props2.inputClassName,
          inputClasses = _this$props2.inputClasses,
          inputLabelProps = _this$props2.inputLabelProps,
          label = _this$props2.label,
          _this$props2$meta = _this$props2.meta,
          touched = _this$props2$meta.touched,
          error = _this$props2$meta.error,
          placeholder = _this$props2.placeholder,
          type = _this$props2.type,
          hideErrorText = _this$props2.hideErrorText,
          endAdornment = _this$props2.endAdornment,
          inputProps = _this$props2.inputProps,
          variant = _this$props2.variant;
      var outlined = variant === 'outlined';
      var InputComponent = outlined ? OutlinedInput : Input;
      var moreProps = {};

      if (outlined) {
        if (typeof inputLabelProps.shrink !== 'undefined') {
          moreProps.notched = inputLabelProps.shrink;
        }

        moreProps.labelWidth = this.labelNode && this.labelNode.offsetWidth || 0;
      }

      var inputComponentProps = _objectSpread({}, input, {
        onBlur: this.handleBlur,
        type: type,
        className: cx(classes.zipCode, inputClassName),
        classes: inputClasses,
        placeholder: placeholder,
        disabled: disabled,
        inputComponent: ZipCodeMask,
        endAdornment: endAdornment,
        inputProps: _objectSpread({}, inputProps)
      }, moreProps);

      if (!outlined) {
        inputComponentProps.disableUnderline = disableUnderline;
      }

      return React.createElement(FormControl, {
        id: id,
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth,
        variant: variant
      }, label && React.createElement(InputLabel // classeName={inputLabelClassName}
      , _extends({
        ref: this.labelRef
      }, inputLabelProps), label), helperText && React.createElement(FormHelperText, null, helperText), React.createElement(InputComponent, inputComponentProps), !hideErrorText && touched && error && React.createElement(FormHelperText, {
        className: errorMessageClass
      }, error));
    }
  }]);

  return ZipCodeField;
}(Component);

_defineProperty(ZipCodeField, "defaultProps", {
  inputLabelProps: {}
});

export default withStyles(styles)(ZipCodeField);