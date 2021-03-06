'use strict';

import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';

import './styles.scss';

const CollapseButton = props => {
  return (
    <IconButton className={cx('collapse-button', props.className)} onClick={props.onClick}>
      {props.collapsed ? <IconExpandMore /> : <IconExpandLess />}
    </IconButton>
  );
};

CollapseButton.propTypes = {
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  onClick: PropTypes.func
};

export default CollapseButton;
