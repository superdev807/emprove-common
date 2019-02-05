'use strict';

import React from 'react';
import Button from '@material-ui/core/Button';
import LoadingIndicator from '../LoadingIndicator';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '../SnackbarContent';

export default class LoadableLoading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorOpen: true
    };
  }

  handleClose = () => {
    this.setState({ errorOpen: false });
  };

  renderError() {
    return (
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={this.state.errorOpen} onClose={this.handleClose}>
        <SnackbarContent
          variant="warning"
          message="We had trouble with your request."
          action={[
            <Button key="try-again" style={{ marginLeft: '1rem' }} onClick={this.props.retry} variant="contained">
              TRY AGAIN
            </Button>
          ]}
        />
      </Snackbar>
    );
  }

  render() {
    if (this.props.error) {
      return this.renderError();
    }

    return <LoadingIndicator fixed />;
  }
}
