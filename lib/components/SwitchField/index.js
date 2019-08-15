'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _styles = require("@material-ui/core/styles");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ControlLabel = (0, _styles.withStyles)(_styles2.labelStyles)(_FormControlLabel["default"]);
var Switch = (0, _styles.withStyles)(_styles2.switchStyles)(_Switch["default"]);

var SwitchField = function SwitchField(_ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      input = _ref.input,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;
  return _react["default"].createElement(_FormControl["default"], {
    className: className,
    error: touched && !!error
  }, label ? _react["default"].createElement(ControlLabel, {
    control: _react["default"].createElement(Switch, {
      name: input.name,
      color: "primary",
      checked: Boolean(input.value),
      disabled: disabled,
      onChange: input.onChange,
      onBlur: input.onBlur
    }),
    label: label
  }) : _react["default"].createElement(Switch, {
    name: input.name,
    color: "primary",
    checked: Boolean(input.value),
    disabled: disabled,
    onChange: input.onChange,
    onBlur: input.onBlur
  }), touched && error && _react["default"].createElement(_FormHelperText["default"], {
    style: {
      marginTop: 0
    }
  }, error));
};

var _default = SwitchField;
exports["default"] = _default;