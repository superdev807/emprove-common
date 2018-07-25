'use strict';

import React from 'react';

import './styles.scss';

const WatchHowItWorks = props => {
  return (
    <div className="about-us-hero-watch-how-it-works">
      <img className="about-us-hero-watch-how-it-works__icon" src="/images/ic_play_video.png" onClick={props.onPlayClick} />
      <div className="about-us-hero-watch-how-it-works__text">
        WATCH <strong>HOW IT WORKS</strong>
      </div>
    </div>
  );
};

const AboutUsHero = props => {
  return (
    <section className="about-us-hero">
      <div className="about-us-hero__title">
        Home Improvement <strong>RENEWED</strong>
        <WatchHowItWorks onPlayClick={props.onPlayClick} />
      </div>
    </section>
  );
};

export default AboutUsHero;
