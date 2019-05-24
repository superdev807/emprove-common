'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconClose from '@material-ui/icons/Close';
import IconDownload from '../../icons/IconFileDownload';
import IconButton from '@material-ui/core/IconButton';
import LoadingIndicator from '../LoadingIndicator';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';

import PdfView from '../PdfView';
import styles from './styles';
import { API_PENDING } from '../../redux/api/request';
import { VIEW_PDF_KIND } from '../../config/constants';
import { sendRfpPdf, sendBidPdf } from '../../redux/modules/pdf';
import { isMobileSelector, sendPdfStatusSelector } from '../../redux/selectors';
import { setSnackbar } from '../../redux/modules/globalStatus';

class PdfViewerModal extends Component {
  static propTypes = {
    blocker: PropTypes.func,
    disableDownload: PropTypes.bool,
    fileName: PropTypes.string,
    handleHide: PropTypes.func,
    isMobile: PropTypes.bool,
    sendStatus: PropTypes.string,
    show: PropTypes.bool,
    source: PropTypes.string,
    timezone: PropTypes.string,
    type: PropTypes.oneOf(['bid', 'rfp'])
  };

  handleSendRfpPDF = async () => {
    const { blocker, fileName, rfpId, sendRfpPdf, setSnackbar, timezone } = this.props;

    if (rfpId && (!blocker || (await blocker()))) {
      sendRfpPdf({
        id: rfpId,
        data: {
          fileName,
          timezone
        },
        success: () => {
          setSnackbar({ message: 'Successfully Sent to Your Email!', variant: 'success' });
        }
      });
    }
  };

  handleSendBidPDF = () => {
    const { fileName, bidId, sendBidPdf, setSnackbar, timezone } = this.props;

    if (bidId) {
      sendBidPdf({
        id: bidId,
        data: {
          fileName,
          timezone
        },
        success: () => {
          setSnackbar({ message: 'Successfully Sent to Your Email!', variant: 'success' });
        }
      });
    }
  };

  handleClose = () => {
    const { handleHide, onClose } = this.props;
    onClose && onClose();
    handleHide();
  };

  handleDownloadPDF = async () => {
    const { blocker, source } = this.props;
    let link = document.createElement('a');

    if (!blocker || (await blocker())) {
      if (source.indexOf('data:application/pdf;base64,') === -1) {
        link.href = source;
      } else {
        const raw = atob(source.slice(28));
        const rawLength = raw.length;
        const array = new Uint8Array(rawLength);

        for (let i = 0; i < rawLength; i++) {
          array[i] = raw.charCodeAt(i);
        }
        link.href = URL.createObjectURL(new Blob([array], { type: 'application/pdf' }));
      }
      link.download = this.props.fileName;
      link.dispatchEvent(new MouseEvent('click'));
    }
  };

  render() {
    const { classes, disableDownload, isMobile, pdfKind, sendStatus, source, show, type, showEditButton } = this.props;

    return (
      <Dialog
        open={show}
        fullScreen={isMobile}
        maxWidth={false}
        disableEnforceFocus
        onClose={this.handleClose}
        className={classes.noMarginTop}>
        <DialogTitle className={classes.topIconBox}>
          {!disableDownload &&
            (!isMobile ? (
              <IconButton onClick={this.handleDownloadPDF}>
                <IconDownload className={classes.topIcon} />
              </IconButton>
            ) : pdfKind === VIEW_PDF_KIND.FULL_RFP ? (
              <Button
                id="buttons_downloaded_rfp"
                className={classes.downloadButton}
                color="primary"
                variant="contained"
                onClick={type === 'rfp' ? this.handleSendRfpPDF : this.handleSendBidPDF}>
                DOWNLOAD
              </Button>
            ) : null)}
          {showEditButton && (
            <Button variant="outlined" color="primary" className={classes.editButton}>
              SIGN UP TO EDIT PLAN
            </Button>
          )}
          <IconButton id={pdfKind === VIEW_PDF_KIND.FULL_RFP ? 'buttons_closed_page_rfp' : undefined} onClick={this.handleClose}>
            <IconClose className={classes.topIcon} />
          </IconButton>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <PdfView source={source} />
        </DialogContent>
        {sendStatus === API_PENDING && <LoadingIndicator fixed={true} />}
      </Dialog>
    );
  }
}

const selector = createStructuredSelector({
  isMobile: isMobileSelector,
  sendStatus: sendPdfStatusSelector
});

const actions = {
  sendBidPdf,
  sendRfpPdf,
  setSnackbar
};

export default compose(withStyles(styles), connect(selector, actions))(PdfViewerModal);
