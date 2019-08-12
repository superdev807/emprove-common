'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _get = _interopRequireDefault(require("lodash/get"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _redux = require("redux");

var _reactStripeElements = require("react-stripe-elements");

var _styles = require("@material-ui/core/styles");

var _LoadingIndicator = _interopRequireDefault(require("../LoadingIndicator"));

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CardForm =
/*#__PURE__*/
function (_Component) {
  _inherits(CardForm, _Component);

  function CardForm(props) {
    var _this;

    _classCallCheck(this, CardForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CardForm).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (event) {
      event.preventDefault();

      _this.setState({
        tokenCreating: true
      });

      var _this$props = _this.props,
          email = _this$props.email,
          stripe = _this$props.stripe,
          onSubmit = _this$props.onSubmit;
      stripe.createToken({
        email: email
      }).then(function (payload) {
        _this.setState({
          error: (0, _get["default"])(payload, 'error.message') || null,
          tokenCreating: false
        });

        !payload.error && onSubmit(payload);
      })["catch"](function (ex) {
        _this.setState({
          tokenCreating: false
        });
      });
    });

    _this.state = {
      error: null,
      tokenCreating: false
    };
    return _this;
  }

  _createClass(CardForm, [{
    key: "getElementOptions",
    value: function getElementOptions() {
      var theme = this.props.theme;
      return {
        style: {
          base: {
            color: (0, _get["default"])(theme, 'palette.text.primary'),
            letterSpacing: '0.025em',
            '::placeholder': {
              color: (0, _get["default"])(theme, 'palette.bottomLine')
            }
          },
          invalid: {
            color: (0, _get["default"])(theme, 'palette.error.main')
          }
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          stripe = _this$props2.stripe;
      var _this$state = this.state,
          error = _this$state.error,
          tokenCreating = _this$state.tokenCreating;

      if (stripe === null) {
        return _react["default"].createElement(_LoadingIndicator["default"], null);
      }

      return _react["default"].createElement("form", {
        onSubmit: this.handleSubmit,
        className: "credit-card-form"
      }, _react["default"].createElement(_reactStripeElements.CardNumberElement, _extends({
        className: "card-form__input"
      }, this.getElementOptions)), _react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 16
      }, _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 8
      }, _react["default"].createElement(_reactStripeElements.CardExpiryElement, _extends({
        className: "card-form__input"
      }, this.getElementOptions))), _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 4
      }, _react["default"].createElement(_reactStripeElements.CardCVCElement, _extends({
        className: "card-form__input"
      }, this.getElementOptions)))), error && _react["default"].createElement(_Typography["default"], {
        variant: "caption",
        color: "error",
        className: "card-form__error"
      }, error), _react["default"].createElement(_Button["default"], {
        variant: "contained",
        fullWidth: true,
        type: "submit",
        color: "primary",
        disabled: tokenCreating || disabled
      }, this.props.buttonText));
    }
  }]);

  return CardForm;
}(_react.Component);

_defineProperty(CardForm, "propTypes", {
  disabled: _propTypes["default"].bool,
  buttonText: _propTypes["default"].string,
  email: _propTypes["default"].string.isRequired,
  onSubmit: _propTypes["default"].func.isRequired,
  stripe: _propTypes["default"].object,
  theme: _propTypes["default"].object.isRequired
});

_defineProperty(CardForm, "defaultProps", {
  buttonText: 'Confirm'
});

var _default = (0, _redux.compose)(_reactStripeElements.injectStripe, (0, _styles.withTheme)())(CardForm);

exports["default"] = _default;