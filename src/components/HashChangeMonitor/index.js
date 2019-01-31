'use strict';

import React, { Component } from 'react';
import { show as showModal } from 'redux-modal';
import { connect } from 'react-redux';
import { parseQueryString } from '../../utils/pureFunctions';

export const getModalParams = hash => {
  /* Parses the following patterns
   * E.g. #modal:feeScheduleModal, #modal:feeScheduleModal?hideMenu=yes
   */
  const matches = hash.match(/#modal:(.*?)(\?.*|$)/);
  const modalId = matches[1];
  const modalParams = parseQueryString(matches[2]);
  return { modalId, modalParams };
};

/*
 * HashChangeMonitor is used to detect hashchange of the window,
 * and if it's related showing of modal and any other actions,
 * it prevents the hashchange, and does the desired actions.
 */
class HashChangeMonitor extends Component {
  componentDidMount() {
    window.addEventListener('hashchange', this.handleHashChange);
  }

  componentWillUnMount() {
    window.removeEventListener('hashchange', this.handleHashChange);
  }

  handleHashChange = event => {
    const { showModal } = this.props;
    const hash = window.location.hash || '';
    if (hash.startsWith('#modal:')) {
      const { modalId, modalParams } = getModalParams(hash);
      // shows modal
      showModal(modalId, modalParams);
      history.replaceState(null, null, event.oldURL);
    }
  };

  render() {
    return null;
  }
}

const actions = {
  showModal
};

export default connect(null, actions)(HashChangeMonitor);
