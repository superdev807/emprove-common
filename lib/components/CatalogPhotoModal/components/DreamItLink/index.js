'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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