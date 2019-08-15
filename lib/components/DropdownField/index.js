'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.map";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-properties";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.keys";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.for-each";
import "core-js/modules/web.dom-collections.iterator";
import "core-js/modules/web.timers";

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

import React, { Component } from 'react';
import cx from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

var DropdownField =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownField, _Component);

  function DropdownField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
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
    });

    return _this;
  }

  _createClass(DropdownField, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          classes = _this$props3.classes,
          capitalize = _this$props3.capitalize,
          disableUnderline = _this$props3.disableUnderline,
          errorMessageClass = _this$props3.errorMessageClass,
          fullWidth = _this$props3.fullWidth,
          helperText = _this$props3.helperText,
          helperTextClassName = _this$props3.helperTextClassName,
          id = _this$props3.id,
          input = _this$props3.input,
          inputClassName = _this$props3.inputClassName,
          inputLabelProps = _this$props3.inputLabelProps,
          label = _this$props3.label,
          menuItemClassName = _this$props3.menuItemClassName,
          _this$props3$meta = _this$props3.meta,
          touched = _this$props3$meta.touched,
          error = _this$props3$meta.error,
          options = _this$props3.options,
          overrideClasses = _this$props3.overrideClasses,
          placeholder = _this$props3.placeholder,
          selectOverride = _this$props3.selectOverride,
          inputOverride = _this$props3.inputOverride,
          variant = _this$props3.variant;
      return variant === 'outlined' ? React.createElement(FormControl, {
        id: id,
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth
      }, helperText && React.createElement(FormHelperText, {
        className: helperTextClassName
      }, helperText), React.createElement(TextField, {
        select: true,
        label: label,
        name: input.name,
        onChange: this.handleChange,
        value: input.value,
        className: inputClassName,
        classes: overrideClasses,
        variant: "outlined",
        InputProps: {
          classes: _objectSpread({}, inputOverride, {
            input: classes.input
          })
        },
        InputLabelProps: _objectSpread({}, inputLabelProps),
        SelectProps: {
          classes: _objectSpread({}, selectOverride, {
            selectMenu: classes.select
          })
        }
      }, placeholder && React.createElement(MenuItem, {
        value: ""
      }, placeholder), options && options.map(function (option, index) {
        return option.value ? React.createElement(MenuItem, {
          key: option.value,
          className: menuItemClassName,
          value: option.value
        }, capitalize ? option.label.toUpperCase() : option.label) : React.createElement(MenuItem, {
          key: index,
          className: menuItemClassName,
          value: option
        }, option);
      })), touched && error && React.createElement(FormHelperText, {
        className: errorMessageClass
      }, error)) : React.createElement(FormControl, {
        id: id,
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth
      }, helperText && React.createElement(FormHelperText, {
        className: helperTextClassName
      }, helperText), label && React.createElement(InputLabel, null, label), React.createElement(Select, {
        onChange: this.handleChange,
        value: input.value,
        name: input.name,
        className: cx(classes.originSelect, inputClassName),
        displayEmpty: !!placeholder,
        disableUnderline: disableUnderline,
        classes: overrideClasses
      }, placeholder && React.createElement(MenuItem, {
        value: ""
      }, placeholder), options && options.map(function (option, index) {
        return option.value ? React.createElement(MenuItem, {
          key: option.value,
          className: menuItemClassName,
          value: option.value
        }, capitalize ? option.label.toUpperCase() : option.label) : React.createElement(MenuItem, {
          key: index,
          className: menuItemClassName,
          value: option
        }, option);
      })), touched && error && React.createElement(FormHelperText, {
        className: errorMessageClass
      }, error));
    }
  }]);

  return DropdownField;
}(Component);

_defineProperty(DropdownField, "propTypes", {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disableUnderline: PropTypes.bool,
  errorMessageClass: PropTypes.string,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  helperTextClassName: PropTypes.string,
  id: PropTypes.string,
  input: PropTypes.object.isRequired,
  inputClassName: PropTypes.string,
  inputLabelProps: PropTypes.object,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  menuItemClassName: PropTypes.string,
  meta: PropTypes.object.isRequired,
  onValidBlur: PropTypes.func,
  options: PropTypes.array.isRequired,
  overrideClasses: PropTypes.object,
  placeholder: PropTypes.string,
  selectOverride: PropTypes.object,
  variant: PropTypes.string
});

export { DropdownField };
export default withStyles(styles)(DropdownField);