'use strict';

import React, { Component } from 'react';
import './style.scss';

class FallbackView extends Component {
  handleClickLiveChat = () => {
    window.Intercom && window.Intercom('show');
  };

  render() {
    const { header, isMobile } = this.props;

    return (
      <div className="fallback-view">
        {header}
        <div className="fallback-view__container">
          <div className="fallback-view__heading">OOPS!</div>
          <div className="fallback-view__subheading">Looks like something went wrong!</div>
          <div className="fallback-view__image">
            <img
              className="fallback-view__character fallback-view__character-left"
              src="/images/ic_page_not_found_filled.png"
              alt="pageNotFound"
            />
            <img
              className="fallback-view__character fallback-view__character-right"
              src="/images/ic_page_not_found_consumer_filled_01.png"
              alt="pageNotFound"
            />
          </div>
          <div className="fallback-view__error-code">Error code: 500</div>
          <div className="fallback-view__message">
            <p className="fallback-view__message-text">We track these errors automatically so we can address them quickly!</p>
            <p className="fallback-view__message-text">
              If the problem persists, please feel free to contact us. In the meantime, try refreshing. For urgent matters, please call us.
            </p>
          </div>
          <div className="fallback-view__links">
            {!isMobile && (
              <div className="fallback-view__link" onClick={this.handleClickLiveChat}>
                Live Chat
              </div>
            )}
            {!isMobile && <div className="fallback-view__vertical-bar" />}
            <a className="fallback-view__link" href="mailto:contact@emproveit.com">
              Contact Us
            </a>
            <div className="fallback-view__vertical-bar" />
            <a className="fallback-view__link" href="/about-emprove">
              About Us
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FallbackView;
