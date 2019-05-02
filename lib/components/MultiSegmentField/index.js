'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _xor = _interopRequireDefault(require("lodash/xor"));

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

var MultiSegmentField =
/*#__PURE__*/
function (_Component) {
  _inherits(MultiSegmentField, _Component);

  function MultiSegmentField(props) {
    var _this;

    _classCallCheck(this, MultiSegmentField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiSegmentField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "isMobile", function (mobileWidth) {
      if (mobileWidth.matches) {
        _this.setState({
          isMobile: true
        });
      } else {
        _this.setState({
          isMobile: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      return function () {
        var _this$props = _this.props,
            input = _this$props.input,
            disableDeselectAll = _this$props.disableDeselectAll;
        var deselectAllTried = _this.state.deselectAllTried;
        var newValue = (0, _xor["default"])(input.value, [value]);

        if (disableDeselectAll && newValue.length === 0) {
          _this.setState({
            deselectAllTried: true
          });
        } else {
          deselectAllTried && _this.setState({
            deselectAllTried: false
          });
          input.onBlur(newValue);
        }
      };
    });

    _this.state = {
      deselectAllTried: false,
      isMobile: false
    };
    _this.mobileWidth = window.matchMedia('(max-width: 400px)');
    return _this;
  }

  _createClass(MultiSegmentField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mobileWidth.addListener(this.isMobile);
      this.isMobile(this.mobileWidth);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mobileWidth.removeListener(this.isMobile);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          deselectAllErrorMessage = _this$props2.deselectAllErrorMessage,
          input = _this$props2.input,
          options = _this$props2.options,
          _this$props2$meta = _this$props2.meta,
          touched = _this$props2$meta.touched,
          error = _this$props2$meta.error;
      var _this$state = this.state,
          deselectAllTried = _this$state.deselectAllTried,
          isMobile = _this$state.isMobile;
      return _react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 0
      }, options.map(function (option, index) {
        var isSelected = input.value.indexOf(option.value) > -1;
        return _react["default"].createElement(_Grid["default"], {
          key: index,
          item: true,
          xs: isMobile ? 4 : 2
        }, _react["default"].createElement(_Button["default"], {
          fullWidth: true,
          className: classes.segment,
          variant: "contained",
          color: isSelected ? 'primary' : 'default',
          onClick: _this2.handleChange(option.value)
        }, option.label));
      }), touched && error && _react["default"].createElement(_FormHelperText["default"], {
        error: true
      }, error), deselectAllTried && _react["default"].createElement(_FormHelperText["default"], {
        error: true
      }, deselectAllErrorMessage));
    }
  }]);

  return MultiSegmentField;
}(_react.Component);

_defineProperty(MultiSegmentField, "propTypes", {
  classes: _propTypes["default"].object.isRequired,
  deselectAllErrorMessage: _propTypes["default"].string,
  disableDeselectAll: _propTypes["default"].bool,
  input: _propTypes["default"].object.isRequired,
  meta: _propTypes["default"].object.isRequired,
  options: _propTypes["default"].array.isRequired
});

var _default = (0, _styles.withStyles)(_styles2["default"])(MultiSegmentField);

exports["default"] = _default;