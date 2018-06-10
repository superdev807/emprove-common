'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { connectModal } from 'redux-modal';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import IconClose from '@material-ui/icons/Close';
import './styles.scss';

const InformationDefinition = props => {
  return (
    <Typography className="information-modal-definition">
      <strong>• {props.term.name}</strong>: {props.term.definition}
    </Typography>
  );
};

const InformationModal = props => {
  return (
    <Dialog open={props.show} onClose={props.handleHide}>
      <IconButton className="information-modal-close-button" onClick={props.handleHide}>
        <IconClose />
      </IconButton>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        {props.body.map((paragraph, index) => (
          <Typography key={index} className="information-modal-body-paragraph">
            {paragraph}
          </Typography>
        ))}
        {props.terms.map(term => <InformationDefinition key={term.id} term={term} />)}
      </DialogContent>
    </Dialog>
  );
};

InformationModal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.arrayOf(PropTypes.string).isRequired,
  terms: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connectModal({ name: 'informationModal' })(InformationModal);
export { InformationModal }; // for testing
