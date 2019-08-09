'use strict';

import React from 'react';
import './styles.scss';

var FooterHeading = function FooterHeading(props) {
  return React.createElement("section", {
    className: "footer-heading"
  }, React.createElement("div", {
    className: "footer-heading__text"
  }, "Renovating your home just got easier. With the ", React.createElement("strong", null, React.createElement("span", {
    className: "footer-heading__text--highlighted"
  }, "click"), " ", React.createElement("span", {
    className: "footer-heading__text--emphasized"
  }, "of your mouse"))), React.createElement("div", {
    className: "footer-heading__text"
  }, "you can ", React.createElement("span", {
    className: "footer-heading__text--highlighted"
  }, React.createElement("strong", null, "dream")), ", ", React.createElement("span", {
    className: "footer-heading__text--highlighted"
  }, React.createElement("strong", null, "cost")), ", and ", React.createElement("strong", null, React.createElement("span", {
    className: "footer-heading__text--highlighted"
  }, React.createElement("strong", null, "bid")), " ", React.createElement("span", {
    className: "footer-heading__text--emphasized"
  }, "your home renovation"))));
};

export default FooterHeading;