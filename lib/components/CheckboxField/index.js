'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _styles = require("@material-ui/core/styles");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Checkbox = (0, _styles.withStyles)(_styles2.checkboxStyles)(_Checkbox["default"]);

var CheckboxField = function CheckboxField(_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      disabled = _ref.disabled,
      hideErrorText = _ref.hideErrorText,
      input = _ref.input,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;
  return _react["default"].createElement(_FormControl["default"], {
    className: className,
    error: touched && !!error
  }, label ? _react["default"].createElement(_FormControlLabel["default"], {
    control: _react["default"].createElement(Checkbox, {
      name: input.name,
      color: "primary",
      checked: Boolean(input.value),
      disabled: disabled,
      onChange: input.onChange,
      onBlur: input.onBlur
    }),
    label: label,
    classes: {
      root: classes.rootLabel,
      label: hideErrorText && touched && error ? classes.redLabel : undefined
    }
  }) : _react["default"].createElement(Checkbox, {
    name: input.name,
    color: "primary",
    checked: Boolean(input.value),
    disabled: disabled,
    onChange: input.onChange,
    onBlur: input.onBlur
  }), !hideErrorText && touched && error && _react["default"].createElement(_FormHelperText["default"], {
    style: {
      marginTop: 0
    }
  }, error));
};

var _default = (0, _styles.withStyles)(_styles2.styles)(CheckboxField);

exports["default"] = _default;