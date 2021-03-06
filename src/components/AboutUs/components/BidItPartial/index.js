'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from '@material-ui/core/Button';
import './style.scss';

class BidItPartial extends Component {
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
        <div id="bidItImages" className="bidItImages">
          <div id="bidItCircle" className="bidItCircle">
            <div id="bidItStep1" className={cx('bidItStep1', { onStep })}>
              <div
                id="bidItStep1Inner"
                className="bidItStep1Inner"
                style={{ backgroundImage: 'url(' + domain + 'images/bidItStep1.png)' }}
                title="Turn your project dream into a comprehensive request-for-proposal package for contractors to bid!">
                <div className="bidItStepNumber">1</div>
              </div>
            </div>
            <div id="bidItStep2" className={cx('bidItStep2', { onStep })}>
              <div
                id="bidItStep2Inner"
                className="bidItStep2Inner"
                style={{ backgroundImage: 'url(' + domain + 'images/bidItStep2.png)' }}
                title="Turn your project dream into a comprehensive request-for-proposal package for contractors to bid!">
                <div className="bidItStepNumber">
                  2
                </div>
              </div>
            </div>
            <div id="bidItStep3" className={cx('bidItStep3', { onStep })}>
              <div
                id="bidItStep3Inner"
                className="bidItStep3Inner"
                style={{ backgroundImage: 'url(' + domain + 'images/bidItStep3.png)' }}
                title="Turn your project dream into a comprehensive request-for-proposal package for contractors to bid!">
                <div className="bidItStepNumber">3</div>
              </div>
            </div>
          </div>
        </div>
        <div id="bidIt" className={cx('partial__description', 'bidIt', { onStep })}>
          <div id="bidItTitle" className="bidItTitle">
            GET IT DONE
          </div>
          <div id="bidItBody" className="bidItBody">
            When you&apos;re comfortable with your project details and estimate, we&apos;ll send it to at least three qualified contractors in your area. Review their preliminary pricing and select the pros to meet. After a site visit, your contractor can nail down a price.
          </div>
          <div id="bidItButton" className="partial__button">
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

export default BidItPartial;
