'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { FormattedNumber } from 'react-intl';
import TranslatedMessage from '../TranslatedMessage';
import { COUPON_VALUE_TYPE } from '../../config/constants';
import { truncateToCentsWithoutRounding } from '../../utils/pureFunctions';
import './style.scss';

var CouponForm =
/*#__PURE__*/
function (_Component) {
  _inherits(CouponForm, _Component);

  function CouponForm() {
    _classCallCheck(this, CouponForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(CouponForm).apply(this, arguments));
  }

  _createClass(CouponForm, [{
    key: "getDiscountLabel",
    value: function getDiscountLabel(couponType, couponDiscount) {
      return couponType === COUPON_VALUE_TYPE.VALUE_DISCOUNT ? "$".concat(couponDiscount) : "".concat(couponDiscount, "%");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          couponCode = _this$props.couponCode,
          couponError = _this$props.couponError,
          couponType = _this$props.couponType,
          finalAmount = _this$props.finalAmount;
      return this.props.couponApplied ? React.createElement(Fragment, null, React.createElement(Typography, {
        variant: "caption"
      }, "Coupon ", React.createElement("strong", null, couponCode), " with ", this.getDiscountLabel(couponType, this.props.couponDiscount), " off applied"), (!this.props.forContractor || finalAmount === 0) && React.createElement(Typography, {
        variant: "caption"
      }, "Your new cost is", ' ', React.createElement("span", {
        className: "coupon-form__final-amount"
      }, React.createElement(FormattedNumber, {
        value: truncateToCentsWithoutRounding(this.props.finalAmount),
        format: "currencyWithCents"
      })), "!")) : React.createElement(Fragment, null, React.createElement("span", {
        className: "coupon-form__label"
      }, "Coupon Code:"), React.createElement(TextField, {
        className: "coupon-form__input",
        InputProps: {
          classes: {
            input: 'coupon-form__input-field'
          }
        },
        variant: "outlined",
        size: "small",
        value: couponCode,
        onChange: this.props.onCouponCodeChange
      }), React.createElement(Button, {
        className: "coupon-form__btn",
        variant: "contained",
        color: "primary",
        size: "small",
        onClick: this.props.onApplyCouponCode
      }, React.createElement(TranslatedMessage, {
        id: "HOP.CONCIERGE_PLAN.PAYMENT.COUPON_CODE",
        defaultMessage: "Apply"
      })), couponError && React.createElement(Typography, {
        color: "error",
        align: "center",
        variant: "caption",
        className: "coupon-form__error"
      }, couponError));
    }
  }]);

  return CouponForm;
}(Component);

export default CouponForm;