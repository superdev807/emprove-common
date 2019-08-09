'use strict';

import React from 'react';
import './styles.scss';

var WatchHowItWorks = function WatchHowItWorks(props) {
  return React.createElement("div", {
    className: "about-us-hero-watch-how-it-works"
  }, React.createElement("img", {
    className: "about-us-hero-watch-how-it-works__icon",
    src: "/images/ic_play_video.png",
    onClick: props.onPlayClick
  }), React.createElement("div", {
    className: "about-us-hero-watch-how-it-works__text"
  }, "WATCH ", React.createElement("strong", null, "HOW IT WORKS")));
};

var AboutUsHero = function AboutUsHero(props) {
  return React.createElement("section", {
    className: "about-us-hero"
  }, React.createElement("div", {
    className: "about-us-hero__title"
  }, "Home Improvement ", React.createElement("strong", null, "RENEWED"), React.createElement(WatchHowItWorks, {
    onPlayClick: props.onPlayClick
  })));
};

export default AboutUsHero;