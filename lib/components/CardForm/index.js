'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.assign";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

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
      }, this.props.buttonText));
    }
  }]);

  return CardForm;
}(Component);

_defineProperty(CardForm, "propTypes", {
  disabled: PropTypes.bool,
  buttonText: PropTypes.string,
  email: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  stripe: PropTypes.object,
  theme: PropTypes.object.isRequired
});

_defineProperty(CardForm, "defaultProps", {
  buttonText: 'Confirm'
});

export default compose(injectStripe, withTheme())(CardForm);