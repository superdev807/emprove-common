'use strict';

import "core-js/modules/es.function.name";
import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _setTimeout from "@babel/runtime-corejs3/core-js-stable/set-timeout";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
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
    var _getPrototypeOf2, _context;

    var _this;

    _classCallCheck(this, DropdownField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownField)).call.apply(_getPrototypeOf2, _concatInstanceProperty(_context = [this]).call(_context, args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var _this$props = _this.props,
          input = _this$props.input,
          onValidBlur = _this$props.onValidBlur;
      input.onBlur(event);

      _setTimeout(function () {
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
      }, placeholder), options && _mapInstanceProperty(options).call(options, function (option, index) {
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
      }, placeholder), options && _mapInstanceProperty(options).call(options, function (option, index) {
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