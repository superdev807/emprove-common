'use strict';

import _extends from "@babel/runtime-corejs3/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import IconDreamIt from '../../../../icons/IconDreamIt';
import './styles.scss';

var DreamItLink = function DreamItLink(props) {
  var path = "/browse/".concat(props.browseFilter);
  var TheLink;
  var linkProps = {};

  if (props.fromContractor) {
    TheLink = 'a';
    linkProps.href = process.env.CONSUMER_DOMAIN + path;
    linkProps.target = '_blank';
    linkProps.rel = 'noopener noreferrer';
  } else {
    TheLink = Link;
    linkProps.to = path;
  }

  return React.createElement("div", {
    className: cx('dream-it-link', {
      'dream-it-link--disabled': props.disabled
    })
  }, React.createElement(IconDreamIt, {
    className: "dream-it-link__icon"
  }), React.createElement(TheLink, _extends({
    className: "dream-it-link__text"
  }, linkProps), "Go to Dream It"));
};

DreamItLink.propTypes = {
  browseFilter: PropTypes.string,
  disabled: PropTypes.bool,
  fromContractor: PropTypes.bool
};
DreamItLink.defaultProps = {
  browseFilter: 'any-home',
  disabled: false,
  fromContractor: false
};
export default DreamItLink;