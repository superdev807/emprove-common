'use strict';

import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
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