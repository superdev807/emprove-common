'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import Autosuggest from 'react-autosuggest';
import deburr from 'lodash/deburr';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import fp from 'lodash/fp';
import match from 'autosuggest-highlight/match';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import parse from 'autosuggest-highlight/parse';
import Popper from '@material-ui/core/Popper';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { getAllTimezones } from '../../utils/timeFunctions';
import styles from './styles';
var suggestions = getAllTimezones().map(function (timezone) {
  return {
    value: timezone,
    label: timezone //.replace('/', ' - ').replace('_', ' ')

  };
});

var renderInputComponent = function renderInputComponent(inputProps) {
  var classes = inputProps.classes,
      _inputProps$inputRef = inputProps.inputRef,
      _inputRef = _inputProps$inputRef === void 0 ? function () {} : _inputProps$inputRef,
      ref = inputProps.ref,
      other = _objectWithoutProperties(inputProps, ["classes", "inputRef", "ref"]);

  return React.createElement(TextField, _extends({
    fullWidth: true,
    InputProps: {
      inputRef: function inputRef(node) {
        ref(node);

        _inputRef(node);
      },
      classes: {
        underline: classes.input
      }
    }
  }, other));
};

var renderSuggestion = function renderSuggestion(suggestion, _ref) {
  var query = _ref.query,
      isHighlighted = _ref.isHighlighted;
  var matches = match(suggestion.label, query);
  var parts = parse(suggestion.label, matches);
  return React.createElement(MenuItem, {
    selected: isHighlighted,
    component: "div"
  }, React.createElement("div", null, parts.map(function (part, index) {
    return part.highlight ? React.createElement("span", {
      key: String(index),
      style: {
        fontWeight: 500
      }
    }, part.text) : React.createElement("strong", {
      key: String(index),
      style: {
        fontWeight: 300
      }
    }, part.text);
  })));
};

var getSuggestions = function getSuggestions(value) {
  var inputValue = deburr(value.trim()).toLowerCase();
  var inputLength = inputValue.length;
  var count = 0;
  return inputLength === 0 ? [] : suggestions.filter(function (suggestion) {
    var keep = count < 5 && suggestion.label.toLowerCase().includes(inputValue);

    if (keep) {
      count += 1;
    }

    return keep;
  });
};

var getSuggestionValue = fp.get('value');
export var TimezoneField =
/*#__PURE__*/
function (_Component) {
  _inherits(TimezoneField, _Component);

  function TimezoneField(props) {
    var _this;

    _classCallCheck(this, TimezoneField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimezoneField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleSuggestionsFetchRequested", function (_ref2) {
      var value = _ref2.value;

      _this.setState({
        suggestions: getSuggestions(value)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSuggestionsClearRequested", function () {
      _this.setState({
        suggestions: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event, _ref3) {
      var newValue = _ref3.newValue;
      var input = _this.props.input;
      input.onChange(newValue);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      var input = _this.props.input;
      input.onBlur(input.value);
    });

    _this.state = {
      suggestions: []
    };
    return _this;
  }

  _createClass(TimezoneField, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          classes = _this$props.classes,
          helperText = _this$props.helperText,
          input = _this$props.input,
          label = _this$props.label,
          placeholder = _this$props.placeholder,
          _this$props$meta = _this$props.meta,
          error = _this$props$meta.error,
          touched = _this$props$meta.touched;
      var autosuggestProps = {
        renderInputComponent: renderInputComponent,
        suggestions: this.state.suggestions,
        onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
        getSuggestionValue: getSuggestionValue,
        renderSuggestion: renderSuggestion
      };
      return React.createElement(FormControl, {
        className: className,
        error: touched && !!error,
        fullWidth: true
      }, helperText && React.createElement(FormHelperText, {
        className: classes.formHelperText
      }, helperText), React.createElement(Autosuggest, _extends({}, autosuggestProps, {
        inputProps: {
          classes: classes,
          label: label,
          placeholder: placeholder,
          value: input.value,
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          inputRef: function inputRef(node) {
            _this2.popperNode = node;
          },
          InputLabelProps: {
            shrink: true
          }
        },
        theme: {
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        },
        renderSuggestionsContainer: function renderSuggestionsContainer(options) {
          return React.createElement(Popper, {
            anchorEl: _this2.popperNode,
            open: Boolean(options.children),
            className: classes.suggestionsContainer
          }, React.createElement(Paper, _extends({
            square: true
          }, options.containerProps, {
            style: {
              width: _this2.popperNode ? _this2.popperNode.clientWidth : null
            }
          }), options.children));
        }
      })), touched && error && React.createElement(FormHelperText, null, error));
    }
  }]);

  return TimezoneField;
}(Component);

_defineProperty(TimezoneField, "propTypes", {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string
});

export default withStyles(styles)(TimezoneField);