'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _pureFunctions = require("~/utils/pureFunctions");

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  menuList: function menuList(provided) {
    return _objectSpread({}, provided, {
      height: 132
    });
  }
};

var SearchableDropdownField =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchableDropdownField, _Component);

  function SearchableDropdownField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchableDropdownField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchableDropdownField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (option) {
      _this.props.input.onChange(option.value);
    });

    return _this;
  }

  _createClass(SearchableDropdownField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _pureFunctions.propsChanged)(['options'], prevProps, this.props)) {
        var _this$props = this.props,
            input = _this$props.input,
            options = _this$props.options;

        if (!options.find(function (option) {
          return option.value === input.value;
        })) {
          input.onChange(null);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          errorMessageClass = _this$props2.errorMessageClass,
          fullWidth = _this$props2.fullWidth,
          id = _this$props2.id,
          input = _this$props2.input,
          _this$props2$meta = _this$props2.meta,
          touched = _this$props2$meta.touched,
          error = _this$props2$meta.error,
          options = _this$props2.options,
          selectClassName = _this$props2.selectClassName,
          selectClassNamePrefix = _this$props2.selectClassNamePrefix;
      var selectedOption = options.find(function (option) {
        return option.value === input.value;
      }) || {};
      return _react["default"].createElement(_FormControl["default"], {
        id: id,
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth
      }, _react["default"].createElement(_reactSelect["default"], {
        className: selectClassName,
        classNamePrefix: selectClassNamePrefix,
        value: selectedOption,
        onChange: this.handleChange,
        options: options,
        styles: styles
      }), touched && error && _react["default"].createElement(_FormHelperText["default"], {
        className: errorMessageClass
      }, error));
    }
  }]);

  return SearchableDropdownField;
}(_react.Component);

_defineProperty(SearchableDropdownField, "propTypes", {
  className: _propTypes["default"].string,
  errorMessageClass: _propTypes["default"].string,
  fullWidth: _propTypes["default"].bool,
  id: _propTypes["default"].string,
  input: _propTypes["default"].object.isRequired,
  options: _propTypes["default"].array.isRequired,
  selectClassName: _propTypes["default"].string,
  selectClassNamePrefix: _propTypes["default"].string
});

var _default = SearchableDropdownField;
exports["default"] = _default;