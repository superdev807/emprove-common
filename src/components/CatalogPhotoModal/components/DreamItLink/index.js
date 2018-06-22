'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import IconDreamIt from '../../../../icons/IconDreamIt';
import './styles.scss';

const DreamItLink = (props) => {
  const path = `/browse/${props.browseFilter}`;
  let TheLink;
  const linkProps = {};
  if (props.fromContractor) {
    TheLink = 'a';
    linkProps.href = process.env.CONSUMER_DOMAIN + path;
    linkProps.target = '_blank';
    linkProps.rel = 'noopener noreferrer';
  }
  else {
    TheLink = Link;
    linkProps.to = path;
  }

  return (
    <div className={cx('dream-it-link', { 'dream-it-link--disabled': props.disabled })}>
      <IconDreamIt className="dream-it-link__icon" />
      <TheLink className="dream-it-link__text" {...linkProps}>
        Go to Dream It
      </TheLink>
    </div>
  );
};

DreamItLink.propTypes = {
  browseFilter: PropTypes.string,
  disabled: PropTypes.bool,
  fromContractor: PropTypes.bool
}

DreamItLink.defaultProps = {
  browseFilter: 'any-home',
  disabled: false,
  fromContractor: false
};

export default DreamItLink;
