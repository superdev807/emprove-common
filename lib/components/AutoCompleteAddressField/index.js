'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _get = _interopRequireDefault(require("lodash/get"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _reactPlacesAutocomplete = _interopRequireWildcard(require("react-places-autocomplete"));

var _loadScript = _interopRequireDefault(require("../../utils/loadScript"));

var _promiseFunctions = require("../../utils/promiseFunctions");

require("./styles.scss");

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

var AutoCompleteAddressField =
/*#__PURE__*/
function (_Component) {
  _inherits(AutoCompleteAddressField, _Component);

  function AutoCompleteAddressField(props) {
    var _this;

    _classCallCheck(this, AutoCompleteAddressField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AutoCompleteAddressField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (address) {
      _this.props.input.onChange(address);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (address, placeId) {
      (0, _reactPlacesAutocomplete.geocodeByPlaceId)(placeId).then(function (results) {
        var found = results[0].address_components.find(function (item) {
          return item.types[0] === 'postal_code';
        });

        if (found) {
          _this.props.input.onBlur({
            name: address,
            postcode: found.long_name
          });
        } else {
          _this.props.input.onBlur(address);
        }
      })["catch"](function (error) {
        _this.props.input.onBlur(address);
      });
    });

    _this.state = {
      googleReady: Boolean(window.google)
    };
    _this.cancelableLoadScript = null;
    return _this;
  }

  _createClass(AutoCompleteAddressField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!window.google) {
        this.cancelableLoadScript = (0, _promiseFunctions.makeCancelable)((0, _loadScript["default"])("https://maps.googleapis.com/maps/api/js?key=".concat(process.env.GOOGLE_MAP_API_KEY, "&libraries=places")));
        this.cancelableLoadScript.promise.then(function () {
          _this2.setState({
            googleReady: true
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelableLoadScript && this.cancelableLoadScript.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          errorMessageClass = _this$props.errorMessageClass,
          hideErrorText = _this$props.hideErrorText,
          input = _this$props.input,
          type = _this$props.type,
          _this$props$meta = _this$props.meta,
          touched = _this$props$meta.touched,
          error = _this$props$meta.error;
      var errorEl = !hideErrorText && touched && error ? _react["default"].createElement(_FormHelperText["default"], {
        className: errorMessageClass
      }, error) : null;

      if (type === 'text') {
        return this.state.googleReady ? _react["default"].createElement(_reactPlacesAutocomplete["default"], {
          value: (0, _get["default"])(input, 'value.name', input.value),
          onChange: this.handleChange,
          onSelect: this.handleSelect,
          searchOptions: {
            types: ['address'],
            componentRestrictions: {
              country: 'us'
            }
          }
        }, function (_ref) {
          var getInputProps = _ref.getInputProps,
              suggestions = _ref.suggestions,
              getSuggestionItemProps = _ref.getSuggestionItemProps,
              loading = _ref.loading;
          return _react["default"].createElement(_FormControl["default"], {
            className: (0, _classnames["default"])('auto-complete-address-field', className),
            error: touched && !!error
          }, _react["default"].createElement("div", {
            className: "auto-complete-address-field__formControl"
          }, _react["default"].createElement("input", getInputProps({
            className: 'auto-complete-address-field__input'
          }))), suggestions.length > 0 && _react["default"].createElement("div", {
            className: "auto-complete-address-field__dropdown"
          }, suggestions.map(function (suggestion) {
            return _react["default"].createElement("div", getSuggestionItemProps(suggestion, {
              className: (0, _classnames["default"])('auto-complete-address-field__dropdown-item', {
                'auto-complete-address-field__dropdown-item--active': suggestion.active
              })
            }), _react["default"].createElement("span", null, suggestion.description));
          })), errorEl);
        }) : null;
      } else {
        return _react["default"].createElement(_FormControl["default"], {
          className: (0, _classnames["default"])('auto-complete-address-field', className),
          error: touched && !!error
        }, _react["default"].createElement("div", {
          className: "auto-complete-address-field__formControl"
        }, _react["default"].createElement("div", {
          className: "auto-complete-address-field__input"
        }, input.value)), errorEl);
      }
    }
  }]);

  return AutoCompleteAddressField;
}(_react.Component);

var _default = AutoCompleteAddressField;
exports["default"] = _default;