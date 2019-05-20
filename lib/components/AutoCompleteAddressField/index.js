'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _algoliaPlacesReact = _interopRequireDefault(require("algolia-places-react"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _pureFunctions = require("../../utils/pureFunctions");

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

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (payload) {
      _this.props.input.onChange(payload.suggestion);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClear", function () {
      _this.props.input.onChange(null);
    });

    _this.algoliaPlaces = _react["default"].createRef();
    return _this;
  }

  _createClass(AutoCompleteAddressField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setAddress();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _pureFunctions.propsChanged)(['input.value', 'type'], prevProps, this.props)) {
        this.setAddress();
      }
    }
  }, {
    key: "setAddress",
    value: function setAddress() {
      var input = this.props.input;

      if (typeof input.value === 'string' && this.algoliaPlaces.current) {
        this.algoliaPlaces.current.autocomplete.setVal(input.value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          classes = _this$props.classes,
          errorMessageClass = _this$props.errorMessageClass,
          hideErrorText = _this$props.hideErrorText,
          input = _this$props.input,
          placeholder = _this$props.placeholder,
          _this$props$meta = _this$props.meta,
          touched = _this$props$meta.touched,
          error = _this$props$meta.error,
          searchType = _this$props.searchType,
          type = _this$props.type;
      return _react["default"].createElement(_FormControl["default"], {
        className: (0, _classnames["default"])('auto-complete-address-field', className),
        error: touched && !!error
      }, type === 'text' ? _react["default"].createElement(_algoliaPlacesReact["default"], {
        ref: this.algoliaPlaces,
        placeholder: placeholder,
        options: {
          appId: process.env.ALGOLIA_PLACES_APP_ID,
          apiKey: process.env.ALGOLIA_PLACES_API_KEY,
          type: searchType,
          countries: ['us']
        },
        onChange: this.handleChange,
        onClear: this.handleClear
      }) : _react["default"].createElement("div", {
        className: "button"
      }, typeof input.value === 'string' ? input.value : ''), !hideErrorText && touched && error && _react["default"].createElement(_FormHelperText["default"], {
        className: errorMessageClass
      }, error));
    }
  }]);

  return AutoCompleteAddressField;
}(_react.Component);

_defineProperty(AutoCompleteAddressField, "propTypes", {
  searchType: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(['text', 'button'])
});

_defineProperty(AutoCompleteAddressField, "defaultPropTypes", {
  searchType: 'address',
  type: 'text'
});

var _default = AutoCompleteAddressField;
exports["default"] = _default;