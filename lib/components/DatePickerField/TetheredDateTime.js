'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _CalendarContainer = _interopRequireDefault(require("react-datetime/src/CalendarContainer"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _reactDatetime = _interopRequireDefault(require("react-datetime"));

var _Fade = _interopRequireDefault(require("@material-ui/core/Fade"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Popper = _interopRequireDefault(require("@material-ui/core/Popper"));

require("./datetime.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TetheredDateTime =
/*#__PURE__*/
function (_DateTime) {
  _inherits(TetheredDateTime, _DateTime);

  function TetheredDateTime() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TetheredDateTime);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TetheredDateTime)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      _this.setState({
        anchorEl: event.target
      });

      if (!_this.state.open) {
        _this.openCalendar(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickAway", function (event) {
      var anchorEl = _this.state.anchorEl;

      if (anchorEl !== event.target) {
        _this.handleClickOutside();
      }
    });

    return _this;
  }

  _createClass(TetheredDateTime, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var renderInput = this.props.renderInput;
      var _this$state = this.state,
          anchorEl = _this$state.anchorEl,
          currentView = _this$state.currentView,
          open = _this$state.open;
      var className = (0, _classnames["default"])('rdt', this.props.className);
      var input;

      if (this.props.input) {
        var props = _objectSpread({
          key: 'i',
          type: 'text',
          onFocus: this.handleFocus,
          onMouseDown: this.handleFocus,
          onChange: this.onInputChange,
          onKeyDown: this.onInputKey,
          value: this.state.inputValue
        }, this.props.inputProps);

        input = renderInput ? renderInput(props) : _react["default"].createElement("input", props);
      } else {
        className += ' rdtStatic';
      }

      return _react["default"].createElement("div", {
        className: className
      }, input, _react["default"].createElement(_Popper["default"], {
        open: open,
        anchorEl: anchorEl,
        placement: "bottom-start",
        transition: true,
        className: "rdtPopper"
      }, function (_ref) {
        var TransitionProps = _ref.TransitionProps;
        return _react["default"].createElement(_Fade["default"], _extends({}, TransitionProps, {
          timeout: 50
        }), _react["default"].createElement(_ClickAwayListener["default"], {
          onClickAway: _this2.handleClickAway
        }, _react["default"].createElement(_Paper["default"], {
          className: "rdtPicker",
          elevation: 3
        }, _react["default"].createElement(_CalendarContainer["default"], {
          view: currentView,
          viewProps: _this2.getComponentProps()
        }))));
      }));
    }
  }]);

  return TetheredDateTime;
}(_reactDatetime["default"]);

exports["default"] = TetheredDateTime;