'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DropdownField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _OutlinedInput = _interopRequireDefault(require("@material-ui/core/OutlinedInput"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _styles = require("@material-ui/core/styles");

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
          disabled = _this$props3.disabled,
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
      return variant === 'outlined' ? _react["default"].createElement(_FormControl["default"], {
        id: id,
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth
      }, helperText && _react["default"].createElement(_FormHelperText["default"], {
        className: helperTextClassName
      }, helperText), _react["default"].createElement(_TextField["default"], {
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
      }, placeholder && _react["default"].createElement(_MenuItem["default"], {
        value: ""
      }, placeholder), options && options.map(function (option, index) {
        return option.value ? _react["default"].createElement(_MenuItem["default"], {
          key: option.value,
          className: menuItemClassName,
          value: option.value
        }, capitalize ? option.label.toUpperCase() : option.label) : _react["default"].createElement(_MenuItem["default"], {
          key: index,
          className: menuItemClassName,
          value: option
        }, option);
      })), touched && error && _react["default"].createElement(_FormHelperText["default"], {
        className: errorMessageClass
      }, error)) : _react["default"].createElement(_FormControl["default"], {
        id: id,
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth
      }, helperText && _react["default"].createElement(_FormHelperText["default"], {
        className: helperTextClassName
      }, helperText), label && _react["default"].createElement(_InputLabel["default"], null, label), _react["default"].createElement(_Select["default"], {
        onChange: this.handleChange,
        value: input.value,
        name: input.name,
        className: (0, _classnames["default"])(classes.originSelect, inputClassName),
        displayEmpty: !!placeholder,
        disableUnderline: disableUnderline,
        classes: overrideClasses
      }, placeholder && _react["default"].createElement(_MenuItem["default"], {
        value: ""
      }, placeholder), options && options.map(function (option, index) {
        return option.value ? _react["default"].createElement(_MenuItem["default"], {
          key: option.value,
          className: menuItemClassName,
          value: option.value
        }, capitalize ? option.label.toUpperCase() : option.label) : _react["default"].createElement(_MenuItem["default"], {
          key: index,
          className: menuItemClassName,
          value: option
        }, option);
      })), touched && error && _react["default"].createElement(_FormHelperText["default"], {
        className: errorMessageClass
      }, error));
    }
  }]);

  return DropdownField;
}(_react.Component);

exports.DropdownField = DropdownField;

_defineProperty(DropdownField, "propTypes", {
  classes: _propTypes["default"].object.isRequired,
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  disableUnderline: _propTypes["default"].bool,
  errorMessageClass: _propTypes["default"].string,
  fullWidth: _propTypes["default"].bool,
  helperText: _propTypes["default"].string,
  helperTextClassName: _propTypes["default"].string,
  id: _propTypes["default"].string,
  input: _propTypes["default"].object.isRequired,
  inputClassName: _propTypes["default"].string,
  inputLabelProps: _propTypes["default"].object,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  menuItemClassName: _propTypes["default"].string,
  meta: _propTypes["default"].object.isRequired,
  onValidBlur: _propTypes["default"].func,
  options: _propTypes["default"].array.isRequired,
  overrideClasses: _propTypes["default"].object,
  placeholder: _propTypes["default"].string,
  selectOverride: _propTypes["default"].object,
  variant: _propTypes["default"].string
});

var _default = (0, _styles.withStyles)(_styles2["default"])(DropdownField);

exports["default"] = _default;