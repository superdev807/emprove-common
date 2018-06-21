'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import IconDreamIt from '../../../../icons/IconDreamIt';
import './styles.scss';

const DreamItLink = (props) => {
  return (
    <div className={cx('dream-it-link', { 'dream-it-link--disabled': props.disabled })}>
      <IconDreamIt className="dream-it-link__icon" />
      <Link className="dream-it-link__text" to={`/browse/${props.browseFilter}`}>
        Go to Dream It
      </Link>
    </div>
  );
};

DreamItLink.propTypes = {
  browseFilter: PropTypes.string,
  disabled: PropTypes.bool
}

DreamItLink.defaultProps = {
  browseFilter: 'any-home',
  disabled: false
};

export default DreamItLink;
