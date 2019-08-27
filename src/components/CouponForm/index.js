'use strict';

import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { FormattedNumber } from 'react-intl';

import TranslatedMessage from '../TranslatedMessage';
import { COUPON_VALUE_TYPE } from '../../config/constants';
import { truncateToCentsWithoutRounding } from '../../utils/pureFunctions';

import './style.scss';

class CouponForm extends Component {
  getDiscountLabel(couponType, couponDiscount) {
    return couponType === COUPON_VALUE_TYPE.VALUE_DISCOUNT ? `$${couponDiscount}` : `${couponDiscount}%`;
  }

  render() {
    const { couponCode, couponError, couponType, finalAmount } = this.props;

    return this.props.couponApplied ? (
      <Fragment>
        <Typography variant="caption">
          Coupon <strong>{couponCode}</strong> with {this.getDiscountLabel(couponType, this.props.couponDiscount)} off applied
        </Typography>
        {(!this.props.forContractor || finalAmount === 0) && (
          <Typography variant="caption">
            Your new cost is{' '}
            <span className="coupon-form__final-amount">
              <FormattedNumber value={truncateToCentsWithoutRounding(this.props.finalAmount)} format="currencyWithCents" />
            </span>!
          </Typography>
        )}
      </Fragment>
    ) : (
      <Fragment>
        <span className="coupon-form__label">Coupon Code:</span>
        <TextField
          className="coupon-form__input"
          classes={{ root: 'coupon-form__input-root' }}
          InputProps={{ classes: { input: 'coupon-form__input-field' } }}
          variant="outlined"
          size="small"
          value={couponCode}
          onChange={this.props.onCouponCodeChange}
        />
        <Button className="coupon-form__btn" variant="contained" color="primary" size="small" onClick={this.props.onApplyCouponCode}>
          <TranslatedMessage id="HOP.CONCIERGE_PLAN.PAYMENT.COUPON_CODE" defaultMessage="Apply" />
        </Button>
        {couponError && (
          <Typography color="error" align="center" variant="caption" className="coupon-form__error">
            {couponError}
          </Typography>
        )}
      </Fragment>
    );
  }
}

export default CouponForm;
