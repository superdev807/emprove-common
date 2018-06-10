'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      <IconButton className="information-button" onClick={this.handleClick}>
        <IconInfoOutline />
      </IconButton>
    );
  }
}

InformationButton.propTypes = {
  information: PropTypes.object.isRequired,
};

const actions = {
  showModal,
};

export default connect(null, actions)(InformationButton);
