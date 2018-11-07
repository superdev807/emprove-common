'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimezoneField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _fp = require('lodash/fp');

var _fp2 = _interopRequireDefault(_fp);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormHelperText = require('@material-ui/core/FormHelperText');

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _deburr = require('lodash/deburr');

var _deburr2 = _interopRequireDefault(_deburr);

var _match = require('autosuggest-highlight/match');

var _match2 = _interopRequireDefault(_match);

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _parse = require('autosuggest-highlight/parse');

var _parse2 = _interopRequireDefault(_parse);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Popper = require('@material-ui/core/Popper');

var _Popper2 = _interopRequireDefault(_Popper);

var _styles = require('@material-ui/core/styles');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var suggestions = _momentTimezone2.default.tz.names().map(function (timezone) {
  return {
    value: timezone,
    label: timezone //.replace('/', ' - ').replace('_', ' ')
  };
});

var renderInputComponent = function renderInputComponent(inputProps) {
  var classes = inputProps.classes,
      _inputProps$inputRef = inputProps.inputRef,
      _inputRef = _inputProps$inputRef === undefined ? function () {} : _inputProps$inputRef,
      ref = inputProps.ref,
      other = _objectWithoutProperties(inputProps, ['classes', 'inputRef', 'ref']);

  return _react2.default.createElement(_TextField2.default, _extends({
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

  var matches = (0, _match2.default)(suggestion.label, query);
  var parts = (0, _parse2.default)(suggestion.label, matches);

  return _react2.default.createElement(
    _MenuItem2.default,
    { selected: isHighlighted, component: 'div' },
    _react2.default.createElement(
      'div',
      null,
      parts.map(function (part, index) {
        return part.highlight ? _react2.default.createElement(
          'span',
          { key: String(index), style: { fontWeight: 500 } },
          part.text
        ) : _react2.default.createElement(
          'strong',
          { key: String(index), style: { fontWeight: 300 } },
          part.text
        );
      })
    )
  );
};

var getSuggestions = function getSuggestions(value) {
  var inputValue = (0, _deburr2.default)(value.trim()).toLowerCase();
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

var getSuggestionValue = _fp2.default.get('value');

var TimezoneField = exports.TimezoneField = function (_Component) {
  _inherits(TimezoneField, _Component);

  function TimezoneField(props) {
    _classCallCheck(this, TimezoneField);

    var _this = _possibleConstructorReturn(this, (TimezoneField.__proto__ || Object.getPrototypeOf(TimezoneField)).call(this, props));

    _this.handleSuggestionsFetchRequested = function (_ref2) {
      var value = _ref2.value;

      _this.setState({
        suggestions: getSuggestions(value)
      });
    };

    _this.handleSuggestionsClearRequested = function () {
      _this.setState({
        suggestions: []
      });
    };

    _this.handleChange = function (event, _ref3) {
      var newValue = _ref3.newValue;
      var input = _this.props.input;

      input.onChange(newValue);
    };

    _this.handleBlur = function () {
      var input = _this.props.input;

      input.onBlur(input.value);
    };

    _this.state = {
      suggestions: []
    };
    return _this;
  }

  _createClass(TimezoneField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          classes = _props.classes,
          disabled = _props.disabled,
          helperText = _props.helperText,
          input = _props.input,
          label = _props.label,
          placeholder = _props.placeholder,
          _props$meta = _props.meta,
          error = _props$meta.error,
          touched = _props$meta.touched,
          theme = _props.theme;


      var autosuggestProps = {
        renderInputComponent: renderInputComponent,
        suggestions: this.state.suggestions,
        onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
        getSuggestionValue: getSuggestionValue,
        renderSuggestion: renderSuggestion
      };

      return _react2.default.createElement(
        _FormControl2.default,
        { className: className, error: touched && !!error, fullWidth: true },
        helperText && _react2.default.createElement(
          _FormHelperText2.default,
          { className: classes.formHelperText },
          helperText
        ),
        _react2.default.createElement(_reactAutosuggest2.default, _extends({}, autosuggestProps, {
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
            return _react2.default.createElement(
              _Popper2.default,
              { anchorEl: _this2.popperNode, open: Boolean(options.children), className: classes.suggestionsContainer },
              _react2.default.createElement(
                _Paper2.default,
                _extends({ square: true }, options.containerProps, { style: { width: _this2.popperNode ? _this2.popperNode.clientWidth : null } }),
                options.children
              )
            );
          }
        })),
        touched && error && _react2.default.createElement(
          _FormHelperText2.default,
          null,
          error
        )
      );
    }
  }]);

  return TimezoneField;
}(_react.Component);

TimezoneField.propTypes = {
  className: _propTypes2.default.string,
  classes: _propTypes2.default.object.isRequired,
  disabled: _propTypes2.default.bool,
  helperText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  input: _propTypes2.default.object.isRequired,
  label: _propTypes2.default.string,
  placeholder: _propTypes2.default.string
};
exports.default = (0, _styles.withStyles)(_styles3.default)(TimezoneField);