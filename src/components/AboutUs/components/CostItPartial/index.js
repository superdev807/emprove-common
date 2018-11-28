'use strict';

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

class CostItPartial extends Component {
  static propTypes = {
    domain: PropTypes.string,
    onStep: PropTypes.bool,
    actionText: PropTypes.string,
    action: PropTypes.func
  };

  render() {
    const { domain, onStep, actionText, action } = this.props;

    return (
      <div className="partial__container">
        <div id="laptop" className="laptop">
          <div
            id="laptopScreen"
            className={cx('laptopScreen', { onStep })}
            style={{
              backgroundImage: 'url(' + domain + 'images/laptopScreen.png)'
            }}>
            <div style={{ paddingTop: '66%', height: 0, width: 0 }} />
            <img
              id="laptopContent"
              className="laptopContent"
              src={domain + 'images/laptopContent.png'}
              alt="Get instant and comprehensive project cost estimates for your home renovation project!"
            />
          </div>
          <img src={domain + 'images/laptopBottom.png'} style={{ width: '100%' }} />
        </div>
        <div id="costIt" className={cx('partial__description', 'costIt', { onStep })}>
          <div id="costItTitle" className="costItTitle">
            ESTIMATE IT
          </div>
          <div id="costItBody" className="costItBody">
            Don't believe it? Our <img src="/images/ic_e_logo_grey.svg" />
            stimator has real time pricing on virtually everything that goes into a home renovation... by zip code. If your first estimate isn't
            what you expected, you can just adjust materials and scope and watch the numbers change.
          </div>

          <div id="costItButton" className="partial__button">
            {actionText && (
              <Button
                className="partial__button-start-now"
                variant="contained"
                color="primary"
                onClick={action}
                style={{ display: 'block', marginTop: '5vh' }}>
                {actionText}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CostItPartial;
