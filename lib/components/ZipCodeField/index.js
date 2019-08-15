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