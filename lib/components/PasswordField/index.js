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
import Fade from '@material-ui/core/Fade';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import get from 'lodash/get';
import IconCheck from '@material-ui/icons/Check';
import IconClose from '@material-ui/icons/Close';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';
import styles, { validatorTextStyles } from './styles';
import { passwordValidator } from '../../utils/validators';
export var ValidationText = withStyles(validatorTextStyles)(function (_ref) {
  var _cx;

  var children = _ref.children,
      classes = _ref.classes,
      success = _ref.success;
  return React.createElement(Typography, {
    variant: "caption",
    gutterBottom: true,
    className: cx((_cx = {}, _defineProperty(_cx, classes.success, success), _defineProperty(_cx, classes.fail, !success), _cx))
  }, success ? React.createElement(IconCheck, {
    color: "inherit",
    className: classes.icon
  }) : React.createElement(IconClose, {
    color: "inherit",
    className: classes.icon
  }), React.createElement("span", {
    className: classes.text
  }, children));
});
export var PasswordField =
/*#__PURE__*/
function (_Component) {
  _inherits(PasswordField, _Component);

  function PasswordField(props) {
    var _this;

    _classCallCheck(this, PasswordField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PasswordField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      var input = _this.props.input;
      event.target.placeholder = '';

      _this.setState({
        meterOpen: true
      });

      input.onFocus(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var _this$props = _this.props,
          input = _this$props.input,
          placeholder = _this$props.placeholder;

      if (placeholder) {
        event.target.placeholder = placeholder;
      }

      _this.setState({
        meterOpen: false
      });

      input.onBlur(event);
    });

    _this.state = {
      meterOpen: false
    };
    return _this;
  }

  _createClass(PasswordField, [{
    key: "render",
    value: function render() {
      var _cx2;

      var _this$props2 = this.props,
          className = _this$props2.className,
          classes = _this$props2.classes,
          disabled = _this$props2.disabled,
          endAdornment = _this$props2.endAdornment,
          fullWidth = _this$props2.fullWidth,
          helperText = _this$props2.helperText,
          input = _this$props2.input,
          inputClassName = _this$props2.inputClassName,
          inputProps = _this$props2.inputProps,
          inputRef = _this$props2.inputRef,
          label = _this$props2.label,
          max = _this$props2.max,
          min = _this$props2.min,
          multiline = _this$props2.multiline,
          placeholder = _this$props2.placeholder,
          type = _this$props2.type,
          hideErrorText = _this$props2.hideErrorText,
          rightAligned = _this$props2.rightAligned,
          rows = _this$props2.rows,
          rowsMax = _this$props2.rowsMax,
          _this$props2$meta = _this$props2.meta,
          touched = _this$props2$meta.touched,
          error = _this$props2$meta.error;
      var meterOpen = this.state.meterOpen;
      var hasLetters = passwordValidator.hasLetters(input.value || '');
      var hasNumbers = passwordValidator.hasNumbers(input.value || '');
      var hasSpecialChars = passwordValidator.hasSpecialChars(input.value || '');
      var hasMinLengthChars = passwordValidator.hasMinLengthChars(input.value || '');
      return React.createElement("div", null, React.createElement(FormControl, {
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth
      }, label && React.createElement(InputLabel, null, label), helperText && React.createElement(FormHelperText, {
        className: classes.formHelperText
      }, helperText), React.createElement(Input, _extends({}, input, {
        type: type,
        placeholder: placeholder,
        multiline: multiline,
        className: cx(classes.input, inputClassName),
        disabled: disabled,
        rows: rows,
        rowsMax: rowsMax,
        inputProps: _objectSpread({
          min: min,
          max: max
        }, inputProps, {
          className: cx((_cx2 = {}, _defineProperty(_cx2, get(inputProps, 'className'), Boolean(get(inputProps, 'className'))), _defineProperty(_cx2, 'text-right', Boolean(rightAligned)), _cx2))
        }),
        endAdornment: endAdornment,
        inputRef: inputRef,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      })), !hideErrorText && touched && error && React.createElement(FormHelperText, null, error)), React.createElement(Popper, {
        open: meterOpen && !(hasMinLengthChars && hasLetters && hasNumbers && hasSpecialChars),
        transition: true,
        disablePortal: true
      }, function (_ref2) {
        var TransitionProps = _ref2.TransitionProps,
            placement = _ref2.placement;
        return React.createElement(Fade, TransitionProps, React.createElement(Paper, {
          "aria-hidden": !meterOpen,
          elevation: 5,
          className: classes.paper
        }, React.createElement(ValidationText, {
          success: hasMinLengthChars
        }, "At least 8 characters"), React.createElement(ValidationText, {
          success: hasLetters
        }, "At least 1 letter (a, b, c, ...)"), React.createElement(ValidationText, {
          success: hasNumbers
        }, "At least 1 number (1, 2, 3, ...)"), React.createElement(ValidationText, {
          success: hasSpecialChars
        }, "At least special character ($, @, %, ...)")));
      }));
    }
  }]);

  return PasswordField;
}(Component);

_defineProperty(PasswordField, "propTypes", {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  input: PropTypes.object.isRequired,
  inputClassName: PropTypes.string,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  multiline: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  hideErrorText: PropTypes.bool,
  rightAligned: PropTypes.bool,
  rows: PropTypes.number,
  rowsMax: PropTypes.number
});

export default withStyles(styles)(PasswordField);