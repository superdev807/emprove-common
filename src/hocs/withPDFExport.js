'use strict';

import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { downloadRfpPdf, exportRfpPdf, downloadBidPdf, exportBidPdf } from '../redux/modules/pdf';
import { exportStatusSelector } from '../redux/selectors';
import { getLocalTimezone } from '../utils/timeFunctions';
import { setSnackbar } from '../redux/modules/globalStatus';
import { show as showModal } from 'redux-modal';
import { withRouter } from 'react-router';
import { API_PENDING, API_SUCCESS } from '../redux/api/request';
import { VIEW_PDF_KIND } from '../config/constants';

export default timezoneSelector => WrappedComponent => {
  class PDFExportWrapper extends Component {
    handleExportRfp = (exportRfpId = null, callback) => {
      const rfpId = exportRfpId || this.props.match.params.rfpId;
      const { exportRfpPdf, setSnackbar } = this.props;

      exportRfpPdf({
        id: rfpId,
        params: {
          timezone: getLocalTimezone()
        },
        success: ({ url, fileName }) => {
          this.downloadFile(url, fileName);
          setSnackbar({ message: 'Successfully exported!', variant: 'success' });
          callback && callback(true);
        },
        fail: error => {
          setSnackbar({ message: 'Something went wrong!', variant: 'error' });
          callback && callback(false);
        }
      });
    };

    handleDownloadRfp = (downloadRfpId, callback) => {
      const rfpId = downloadRfpId || this.props.match.params.rfpId;
      const { downloadRfpPdf, setSnackbar } = this.props;

      downloadRfpPdf({
        id: rfpId,
        params: {
          timezone: getLocalTimezone()
        },
        success: () => {
          setSnackbar({ message: 'Successfully Sent to Your Email!', variant: 'success' });
          callback && callback(true);
        },
        fail: error => {
          setSnackbar({ message: 'Something went wrong!', variant: 'error' });
          callback && callback(false);
        }
      });
    };

    handleViewRfpBrief = (viewRfpId, callback, onClose, blocker, disableDownload) => {
      const { exportRfpPdf, match, setSnackbar, showModal, timezone } = this.props;
      const rfpId = viewRfpId || match.params.rfpId;

      exportRfpPdf({
        id: rfpId,
        params: {
          timezone: getLocalTimezone()
        },
        success: ({ url, fileName }) => {
          showModal('pdfViewerModal', {
            pdfKind: VIEW_PDF_KIND.FULL_RFP,
            source: url,
            type: 'rfp',
            fileName,
            rfpId,
            onClose,
            timezone,
            blocker,
            disableDownload
          });
          callback && callback(true);
        },
        fail: error => {
          setSnackbar({ message: 'Something went wrong!', variant: 'error' });
          callback && callback(false);
        }
      });
    };

    handleExportBid = () => {
      const bidId = this.props.match.params.bidId;
      const { exportBidPdf, setSnackbar } = this.props;

      exportBidPdf({
        id: bidId,
        success: ({ url, fileName }) => {
          this.downloadFile(url, fileName);
          setSnackbar({ message: 'Successfully exported!', variant: 'success' });
        },
        fail: () => {
          setSnackbar({ message: 'Something went wrong!', variant: 'error' });
        }
      });
    };

    handleDownloadBid = (downloadBidId, callback) => {
      const bidId = downloadBidId || this.props.match.params.bidId;
      const { downloadBidPdf, setSnackbar } = this.props;

      downloadBidPdf({
        id: bidId,
        success: () => {
          setSnackbar({ message: 'Successfully Sent to Your Email!', variant: 'success' });
          callback && callback(true);
        },
        fail: error => {
          setSnackbar({ message: 'Something went wrong!', variant: 'error' });
          callback && callback(false);
        }
      });
    };

    handleViewBidBrief = (viewBidId, callback, onClose) => {
      const { exportBidPdf, match, setSnackbar, showModal, timezone } = this.props;
      const bidId = viewBidId || match.params.bidId;

      exportBidPdf({
        id: bidId,
        success: ({ url, fileName }) => {
          showModal('pdfViewerModal', {
            pdfKind: VIEW_PDF_KIND.FULL_RFP,
            source: url,
            type: 'bid',
            fileName,
            bidId,
            onClose,
            timezone
          });
          callback && callback(true);
        },
        fail: error => {
          setSnackbar({ message: 'Something went wrong!', variant: 'error' });
          callback && callback(false);
        }
      });
    };

    downloadFile = (url, fileName) => {
      let link = document.createElement('a');
      link.href = url;
      link.download = fileName;

      let event = null;
      if (typeof MouseEvent === 'function') {
        event = new MouseEvent('click');
      } else {
        event = document.createEvent('MouseEvent');
        event.initEvent('click', true, true);
      }

      link.dispatchEvent(event);
    };

    render() {
      const { exportStatus, ...others } = this.props;
      const isExporting = exportStatus === API_PENDING;
      return (
        <WrappedComponent
          {...others}
          isExportingPDF={isExporting}
          onExportRfp={this.handleExportRfp}
          onDownloadRfp={this.handleDownloadRfp}
          onViewRfpBrief={this.handleViewRfpBrief}
          onExportBid={this.handleExportBid}
          onDownloadBid={this.handleDownloadBid}
          onViewBidBrief={this.handleViewBidBrief}
          downloadFile={this.downloadFile}
        />
      );
    }
  }

  const selector = createStructuredSelector({
    exportStatus: exportStatusSelector,
    timezone: timezoneSelector
  });

  const actions = {
    downloadRfpPdf,
    exportRfpPdf,
    downloadBidPdf,
    exportBidPdf,
    setSnackbar,
    showModal
  };

  return compose(withRouter, connect(selector, actions))(PDFExportWrapper);
};
