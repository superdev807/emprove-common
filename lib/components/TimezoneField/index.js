'use strict';

import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/includes";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _trimInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/trim";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";

var _context;

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

var suggestions = _mapInstanceProperty(_context = getAllTimezones()).call(_context, function (timezone) {
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
  }, React.createElement("div", null, _mapInstanceProperty(parts).call(parts, function (part, index) {
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
  var inputValue = deburr(_trimInstanceProperty(value).call(value)).toLowerCase();
  var inputLength = inputValue.length;
  var count = 0;
  return inputLength === 0 ? [] : _filterInstanceProperty(suggestions).call(suggestions, function (suggestion) {
    var _context2;

    var keep = count < 5 && _includesInstanceProperty(_context2 = suggestion.label.toLowerCase()).call(_context2, inputValue);

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