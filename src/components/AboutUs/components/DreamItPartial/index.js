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
            <b>DREAM</b> IT<span style={{ color: '#ff9e3c', fontWeight: 'bold' }}>!</span>
          </div>
          <div id="dreamItBody" className="dreamItBody">
            Dream with <b>precision</b>! Sink into an intelligent and interactive design environment that learns your design sensibilities
            and guides you to personalize your <b>Styleboard</b>!
          </div>

          <div id="dreamItButton" className="partial__button">
            {actionText && (
              <Button
                className="partial__button-start-now"
                variant="raised"
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
