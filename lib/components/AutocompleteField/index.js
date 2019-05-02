'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AutocompleteField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactAutosuggest = _interopRequireDefault(require("react-autosuggest"));

var _classnames = _interopRequireDefault(require("classnames"));

var _fp = _interopRequireDefault(require("lodash/fp"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deburr = _interopRequireDefault(require("lodash/deburr"));

var _match = _interopRequireDefault(require("autosuggest-highlight/match"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _parse = _interopRequireDefault(require("autosuggest-highlight/parse"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Popper = _interopRequireDefault(require("@material-ui/core/Popper"));

var _timeFunctions = require("../../utils/timeFunctions");

var _styles = require("@material-ui/core/styles");

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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

var handlePreventEnterKey = function handlePreventEnterKey(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
};

var renderInputComponent = function renderInputComponent(inputProps) {
  var classes = inputProps.classes,
      _inputProps$inputRef = inputProps.inputRef,
      _inputRef = _inputProps$inputRef === void 0 ? function () {} : _inputProps$inputRef,
      ref = inputProps.ref,
      other = _objectWithoutProperties(inputProps, ["classes", "inputRef", "ref"]);

  return _react["default"].createElement(_TextField["default"], _extends({
    fullWidth: true,
    onKeyPress: handlePreventEnterKey,
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
  var matches = (0, _match["default"])(suggestion.label, query);
  var parts = (0, _parse["default"])(suggestion.label, matches);
  return _react["default"].createElement(_MenuItem["default"], {
    selected: isHighlighted,
    component: "div"
  }, _react["default"].createElement("div", null, parts.map(function (part, index) {
    return part.highlight ? _react["default"].createElement("span", {
      key: String(index),
      style: {
        fontWeight: 500
      }
    }, part.text) : _react["default"].createElement("strong", {
      key: String(index),
      style: {
        fontWeight: 300
      }
    }, part.text);
  })));
};

var getSuggestions = function getSuggestions(value, options) {
  var inputValue = (0, _deburr["default"])(value.trim()).toLowerCase();
  var inputLength = inputValue.length;
  var count = 0;
  return inputLength === 0 ? [] : options.filter(function (suggestion) {
    var keep = count < 5 && suggestion.label.toLowerCase().includes(inputValue);

    if (keep) {
      count += 1;
    }

    return keep;
  });
};

var getSuggestionValue = _fp["default"].get('value');

var AutocompleteField =
/*#__PURE__*/
function (_Component) {
  _inherits(AutocompleteField, _Component);

  function AutocompleteField(props) {
    var _this;

    _classCallCheck(this, AutocompleteField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AutocompleteField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleSuggestionsFetchRequested", function (_ref2) {
      var value = _ref2.value;
      var options = _this.props.options;

      _this.setState({
        suggestions: getSuggestions(value, options)
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

  _createClass(AutocompleteField, [{
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
      return _react["default"].createElement(_FormControl["default"], {
        className: className,
        error: touched && !!error,
        fullWidth: true
      }, helperText && _react["default"].createElement(_FormHelperText["default"], {
        className: classes.formHelperText
      }, helperText), _react["default"].createElement(_reactAutosuggest["default"], _extends({}, autosuggestProps, {
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
          return _react["default"].createElement(_Popper["default"], {
            anchorEl: _this2.popperNode,
            open: Boolean(options.children),
            className: classes.suggestionsContainer
          }, _react["default"].createElement(_Paper["default"], _extends({
            square: true
          }, options.containerProps, {
            style: {
              width: _this2.popperNode ? _this2.popperNode.clientWidth : null
            }
          }), options.children));
        }
      })), touched && error && _react["default"].createElement(_FormHelperText["default"], null, error));
    }
  }]);

  return AutocompleteField;
}(_react.Component);

exports.AutocompleteField = AutocompleteField;

_defineProperty(AutocompleteField, "propTypes", {
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object.isRequired,
  disabled: _propTypes["default"].bool,
  helperText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  input: _propTypes["default"].object.isRequired,
  label: _propTypes["default"].string,
  options: _propTypes["default"].array,
  placeholder: _propTypes["default"].string
});

var _default = (0, _styles.withStyles)(_styles2["default"])(AutocompleteField);

exports["default"] = _default;