'use strict';

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { connectModal } from 'redux-modal';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import cx from 'classnames';

import Button from '@material-ui/core/Button';
import CloseButton from '../CloseButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

class ActionConfirmModal extends Component {
  static propTypes = {
    classNames: PropTypes.object, // can't name classes because of withStyles
    modalTitle: PropTypes.string,
    description: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    confirmButtonText: PropTypes.string,
    cancelButtonText: PropTypes.string,
    objectName: PropTypes.string,
    params: PropTypes.object,
    onCancel: PropTypes.func,
    onClose: PropTypes.func, // if given, X button will no longer use onCancel
    onConfirm: PropTypes.func,
    onlyConfirmButton: PropTypes.bool,
    show: PropTypes.bool.isRequired,
    handleHide: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    showCloseButton: PropTypes.bool,
    withExtraPadding: PropTypes.bool
  };

  static defaultProps = {
    classNames: {},
    showCloseButton: false,
    withExtraPadding: false
  };

  handleCancel = () => {
    this.props.handleHide();
    this.props.onCancel && this.props.onCancel();
  };

  handleClose = () => {
    this.props.handleHide();
    this.props.onClose && this.props.onClose();
  };

  handleConfirm = () => {
    this.props.onConfirm && this.props.onConfirm();
    this.handleClose();
  };

  renderDescription() {
    const { classNames, description } = this.props;

    if (description === undefined) {
      return null;
    }
    let entries;
    if (typeof description === 'string' || (typeof description === 'object' && description.length === undefined)) {
      entries = [description];
    } else {
      entries = description;
    }

    return entries.map(text => {
      return (
        <Typography key={text} className={cx(this.props.classes.description, classNames.description)} variant="body1" gutterBottom>
          {text}
        </Typography>
      );
    });
  }

  render() {
    const {
      classes,
      classNames,
      modalTitle,
      confirmButtonText,
      cancelButtonText,
      objectName,
      show,
      showCloseButton,
      fullScreen,
      onlyConfirmButton,
      withExtraPadding
    } = this.props;

    return (
      <Dialog
        fullScreen={fullScreen}
        open={show}
        onClose={this.handleCancel}
        classes={{ paper: classNames.paper }}
        disableEnforceFocus={true}>
        {showCloseButton && (
          <CloseButton className={classes.closeButton} onClick={this.props.onClose ? this.handleClose : this.handleCancel} />
        )}
        <DialogTitle className={cx({ [classes.dialogTitleExtraPadding]: withExtraPadding }, classNames.dialogTitle)} disableTypography>
          <Typography variant="subtitle2" color="primary">
            {modalTitle}
          </Typography>
        </DialogTitle>
        <DialogContent className={cx({ [classes.dialogContentExtraPadding]: withExtraPadding }, classNames.dialogContent)}>
          {this.renderDescription()}
          {objectName && (
            <Typography variant="body1">
              <strong>{objectName}</strong>
            </Typography>
          )}
          <div className={classes.dialogActions}>
            {!onlyConfirmButton && (
              <Button className={cx(classes.button, classes.cancelButton)} onClick={this.handleCancel} variant="outlined" color="primary">
                {cancelButtonText || 'CANCEL'}
              </Button>
            )}
            <Button className={classes.button} onClick={this.handleConfirm} variant="contained" color="primary">
              {confirmButtonText || 'DELETE'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}

export default compose(
  withStyles(styles),
  connectModal({
    name: 'actionConfirmModal',
    destroyOnHide: false
  })
)(ActionConfirmModal);
