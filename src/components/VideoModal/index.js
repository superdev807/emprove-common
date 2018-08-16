'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import { compose } from 'redux';
import { connectModal } from 'redux-modal';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import IconClose from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import Vimeo from '@u-wave/react-vimeo';

import './style.scss';

class VideoModal extends Component {
  handleClose = () => {
    this.props.handleHide();
  };
  render() {
    const { classes, show } = this.props;

    return (
      <Dialog maxWidth={false} open={show} classes={{ paper: classes.dialogContentPaper }} onClose={this.handleClose}>
        <div className={classes.videoContainer}>
          <IconButton className={classes.fixedCloseIcon} onClick={this.handleClose}>
            <IconClose className={classes.iconClose} />
          </IconButton>

          <DialogContent className={cx(classes.dialogContent, 'responsiveVideoBackground')}>
            <Vimeo id="video" video={process.env.EMPROVE_HOME_VIDEO_ID} autoplay />
          </DialogContent>
        </div>
      </Dialog>
    );
  }
}

export default compose(
  withStyles(styles),
  connectModal({
    name: 'videoModal',
    destroyOnHide: true
  })
)(VideoModal);
