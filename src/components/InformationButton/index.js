'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import IconInfoOutline from '@material-ui/icons/InfoOutline';
import { connect } from 'react-redux';
import { show as showModal } from 'redux-modal';

import './styles.scss';

class InformationButton extends Component {
  handleClick = () => {
    this.props.showModal('informationModal', this.props.information);
  };

  render() {
    return (
      <IconButton
        className={cx('information-button', { 'information-button--size-16': this.props.size === 16 }, this.props.className)}
        onClick={this.handleClick}
      >
        <IconInfoOutline
          className={cx({ 'information-button--size-16': this.props.size === 16 })}
        />
      </IconButton>
    );
  }
}

InformationButton.propTypes = {
  information: PropTypes.object.isRequired,
  size: PropTypes.oneOf([16]),
  className: PropTypes.string,
};

const actions = {
  showModal,
};

export default connect(null, actions)(InformationButton);
export { InformationButton }; // for testing
