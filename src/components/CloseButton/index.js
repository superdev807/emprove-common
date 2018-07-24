'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import IconClose from '@material-ui/icons/Close';

import './styles.scss';

const CloseButton = (props) => {
  return (
    <IconButton className={cx('close-button', props.className)} onClick={props.onClick}>
      <IconClose />
    </IconButton>
  );
};

CloseButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default CloseButton;
