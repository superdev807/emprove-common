'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import IconHelpOutline from '@material-ui/icons/HelpOutline';
import IconInfo from '../../icons/IconInfo';
import { connect } from 'react-redux';
import { show as showModal } from 'redux-modal';

import './styles.scss';

class InformationButton extends Component {
  handleClick = () => {
    this.props.showModal('informationModal', this.props.information);
  };

  render() {
    const { className, icon, iconClass, size } = this.props;
    const Icon = icon === 'help' ? IconHelpOutline : IconInfo;

    return (
      <IconButton
        className={cx('information-button', `information-button--size-${size}`, className)}
        onClick={this.handleClick}>
        <Icon className={cx(`information-button--size-${size}`, iconClass)} />
      </IconButton>
    );
  }
}

InformationButton.propTypes = {
  information: PropTypes.object.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
  icon: PropTypes.oneOf(['help', 'info']),
  iconClass: PropTypes.string
};

InformationButton.defaultProps = {
  icon: 'info'
};

const actions = {
  showModal
};

export default connect(null, actions)(InformationButton);
export { InformationButton }; // for testing
