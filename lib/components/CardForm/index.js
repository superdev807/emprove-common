'use strict';

import _extends from "@babel/runtime-corejs3/helpers/extends";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { compose } from 'redux';
import { CardCVCElement, CardExpiryElement, CardNumberElement, injectStripe } from 'react-stripe-elements';
import { withTheme } from '@material-ui/core/styles';
import LoadingIndicator from '../LoadingIndicator';
import './style.scss';

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
          error: get(payload, 'error.message') || null,
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
            color: get(theme, 'palette.text.primary'),
            letterSpacing: '0.025em',
            '::placeholder': {
              color: get(theme, 'palette.bottomLine')
            }
          },
          invalid: {
            color: get(theme, 'palette.error.main')
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
        return React.createElement(LoadingIndicator, null);
      }

      return React.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "credit-card-form"
      }, React.createElement(CardNumberElement, _extends({
        className: "card-form__input"
      }, this.getElementOptions)), React.createElement(Grid, {
        container: true,
        spacing: 16
      }, React.createElement(Grid, {
        item: true,
        xs: 8
      }, React.createElement(CardExpiryElement, _extends({
        className: "card-form__input"
      }, this.getElementOptions))), React.createElement(Grid, {
        item: true,
        xs: 4
      }, React.createElement(CardCVCElement, _extends({
        className: "card-form__input"
      }, this.getElementOptions)))), error && React.createElement(Typography, {
        variant: "caption",
        color: "error",
        className: "card-form__error"
      }, error), React.createElement(Button, {
        variant: "contained",
        fullWidth: true,
        type: "submit",
        color: "primary",
        disabled: tokenCreating || disabled
      }, "Confirm"));
    }
  }]);

  return CardForm;
}(Component);

_defineProperty(CardForm, "propTypes", {
  disabled: PropTypes.bool,
  email: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  stripe: PropTypes.object,
  theme: PropTypes.object.isRequired
});

export default compose(injectStripe, withTheme())(CardForm);