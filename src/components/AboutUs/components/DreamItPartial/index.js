'use strict';

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

class DreamItPartial extends Component {
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
        <div
          id="monitor"
          className="monitor"
          style={{ backgroundImage: 'url(' + domain + 'images/monitor.png)' }}
          title="Dream up your home improvements with Emprove's interactive scope definition cost estimation tools!">
          {/*
              quality = the quality of the video,
              background = muted video, loop, autoplay, no player bar
            */}
          <iframe
            id="monitorContent"
            className="monitorContent"
            src="https://player.vimeo.com/video/252014513?quality=720p&background=1"
            width="640"
            height="360"
            frameBorder="0"
          />
        </div>
        <div id="dreamIt" className={cx('dreamIt', 'partial__description', { onStep })}>
          <div id="dreamItTitle" className="dreamItTitle">
            STYLE IT
          </div>
          <div id="dreamItBody" className="dreamItBody">
            Our photos aren't just pretty... they're PrettySmart™! As you select photos you like, they send costing information to our{' '}
            <img src="/images/ic_e_logo_grey.svg" />
            stimator, the most advanced budgeting tool in the residential design and construction industry.
          </div>

          <div id="dreamItButton" className="partial__button">
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

export default DreamItPartial;
