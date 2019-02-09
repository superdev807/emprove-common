'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _redux = require('redux');

var _reactStripeElements = require('react-stripe-elements');

var _styles = require('@material-ui/core/styles');

var _LoadingIndicator = require('../LoadingIndicator');

var _LoadingIndicator2 = _interopRequireDefault(_LoadingIndicator);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardForm = function (_Component) {
  _inherits(CardForm, _Component);

  function CardForm(props) {
    _classCallCheck(this, CardForm);

    var _this = _possibleConstructorReturn(this, (CardForm.__proto__ || Object.getPrototypeOf(CardForm)).call(this, props));

    _this.handleSubmit = function (event) {
      event.preventDefault();

      _this.setState({
        tokenCreating: true
      });

      var _this$props = _this.props,
          email = _this$props.email,
          stripe = _this$props.stripe,
          onSubmit = _this$props.onSubmit;

      stripe.createToken({ email: email }).then(function (payload) {
        _this.setState({
          error: (0, _get2.default)(payload, 'error.message') || null,
          tokenCreating: false
        });
        !payload.error && onSubmit(payload);
      }).catch(function (ex) {
        _this.setState({
          tokenCreating: false
        });
      });
    };

    _this.state = {
      error: null,
      tokenCreating: false
    };
    return _this;
  }

  _createClass(CardForm, [{
    key: 'getElementOptions',
    value: function getElementOptions() {
      var theme = this.props.theme;

      return {
        style: {
          base: {
            color: (0, _get2.default)(theme, 'palette.text.primary'),
            letterSpacing: '0.025em',
            '::placeholder': {
              color: (0, _get2.default)(theme, 'palette.bottomLine')
            }
          },
          invalid: {
            color: (0, _get2.default)(theme, 'palette.error.main')
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          disabled = _props.disabled;
      var _state = this.state,
          error = _state.error,
          tokenCreating = _state.tokenCreating;


      if (this.props.stripe === null) {
        return _react2.default.createElement(_LoadingIndicator2.default, null);
      }

      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleSubmit, className: 'credit-card-form' },
        _react2.default.createElement(_reactStripeElements.CardNumberElement, _extends({ className: 'card-form__input' }, this.getElementOptions)),
        _react2.default.createElement(
          _Grid2.default,
          { container: true, spacing: 16 },
          _react2.default.createElement(
            _Grid2.default,
            { item: true, xs: 8 },
            _react2.default.createElement(_reactStripeElements.CardExpiryElement, _extends({ className: 'card-form__input' }, this.getElementOptions))
          ),
          _react2.default.createElement(
            _Grid2.default,
            { item: true, xs: 4 },
            _react2.default.createElement(_reactStripeElements.CardCVCElement, _extends({ className: 'card-form__input' }, this.getElementOptions))
          )
        ),
        error && _react2.default.createElement(
          _Typography2.default,
          { variant: 'caption', color: 'error', className: 'card-form__error' },
          error
        ),
        _react2.default.createElement(
          _Button2.default,
          { variant: 'contained', fullWidth: true, type: 'submit', color: 'primary', disabled: tokenCreating || disabled },
          'Confirm'
        )
      );
    }
  }]);

  return CardForm;
}(_react.Component);

CardForm.propTypes = {
  disabled: _propTypes2.default.bool,
  email: _propTypes2.default.string.isRequired,
  onSubmit: _propTypes2.default.func.isRequired,
  stripe: _propTypes2.default.object,
  theme: _propTypes2.default.object.isRequired
};
exports.default = (0, _redux.compose)(_reactStripeElements.injectStripe, (0, _styles.withTheme)())(CardForm);