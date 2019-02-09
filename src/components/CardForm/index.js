'use strict';

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

class CardForm extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    email: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    stripe: PropTypes.object,
    theme: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      tokenCreating: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      tokenCreating: true
    });

    const { email, stripe, onSubmit } = this.props;
    stripe
      .createToken({ email })
      .then(payload => {
        this.setState({
          error: get(payload, 'error.message') || null,
          tokenCreating: false
        });
        !payload.error && onSubmit(payload);
      })
      .catch(ex => {
        this.setState({
          tokenCreating: false
        });
      });
  };

  getElementOptions() {
    const { theme } = this.props;
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

  render() {
    const { classes, disabled } = this.props;
    const { error, tokenCreating } = this.state;

    if (this.props.stripe === null) {
      return <LoadingIndicator />;
    }

    return (
      <form onSubmit={this.handleSubmit} className="credit-card-form">
        <CardNumberElement className="card-form__input" {...this.getElementOptions} />
        <Grid container spacing={16}>
          <Grid item xs={8}>
            <CardExpiryElement className="card-form__input" {...this.getElementOptions} />
          </Grid>
          <Grid item xs={4}>
            <CardCVCElement className="card-form__input" {...this.getElementOptions} />
          </Grid>
        </Grid>
        {error && (
          <Typography variant="caption" color="error" className="card-form__error">
            {error}
          </Typography>
        )}
        <Button variant="contained" fullWidth type="submit" color="primary" disabled={tokenCreating || disabled}>
          Confirm
        </Button>
      </form>
    );
  }
}

export default compose(injectStripe, withTheme())(CardForm);
