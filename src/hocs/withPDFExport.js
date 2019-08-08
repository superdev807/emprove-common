'use strict';

import React, { Component } from 'react';
import get from 'lodash/get';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { downloadRfpPdf, exportRfpPdf, exportRfpSummaryPdf, downloadBidPdf, exportBidPdf } from '../redux/modules/pdf';
import { exportStatusSelector } from '../redux/selectors';
import { getLocalTimezone } from '../utils/timeFunctions';
import { setSnackbar } from '../redux/modules/globalStatus';
import { show as showModal } from 'redux-modal';
import { withRouter } from 'react-router';
import { API_PENDING } from '../redux/api/request';
import { VIEW_PDF_KIND } from '../config/constants';
// import { getPartnerFromHost } from '../utils/partnerFunctions';

export default (timezoneSelector, accountSelector) => WrappedComponent => {
  class PDFExportWrapper extends Component {
    handleExportRfp = (exportRfpId = null, callback) => {
      const rfpId = exportRfpId || this.props.match.params.rfpId;
      const { exportRfpPdf, setSnackbar } = this.props;
      // const hostPartner = getPartnerFromHost();

      exportRfpPdf({
        id: rfpId,
        params: {
          timezone: getLocalTimezone()
          // hostPartner
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
      // const hostPartner = getPartnerFromHost();

      downloadRfpPdf({
        id: rfpId,
        params: {
          timezone: getLocalTimezone()
          // hostPartner
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

    handleViewRfpBrief = (viewRfpId, options = {}) => {
      const { callback, onClose, blocker, disableDownload, showEditButton, skipAccountIdMatching, onEditClick } = options;
      const { exportRfpPdf, match, setSnackbar, showModal, timezone } = this.props;
      const rfpId = viewRfpId || match.params.rfpId;
      // const hostPartner = getPartnerFromHost();

      exportRfpPdf({
        id: rfpId,
        params: {
          timezone: getLocalTimezone(),
          skipAccountIdMatching
          // hostPartner
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
            disableDownload,
            showEditButton,
            onEditClick
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

    handleExportRfpSummary = (rfpId, callback) => {
      // const hostPartner = getPartnerFromHost();
      this.props.exportRfpSummaryPdf({
        id: rfpId,
        // params: {
        //   hostPartner
        // },
        success: ({ url, fileName }) => {
          this.props.showModal('pdfViewerModal', {
            pdfKind: VIEW_PDF_KIND.RFP_SUMMARY,
            source: url,
            type: 'rfpSummary',
            fileName,
            rfpId,
            timezone: this.props.timezone,
            email: get(this.props.user, 'email')
          });
          callback && callback(true);
        },
        fail: error => {
          this.props.setSnackbar({ message: 'Something went wrong!', variant: 'error' });
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
          onExportRfpSummary={this.handleExportRfpSummary}
          onExportBid={this.handleExportBid}
          onDownloadBid={this.handleDownloadBid}
          onViewBidBrief={this.handleViewBidBrief}
          downloadFile={this.downloadFile}
        />
      );
    }
  }

  const selector = createStructuredSelector(
    Object.assign(
      { exportStatus: exportStatusSelector },
      accountSelector ? { user: accountSelector } : {},
      timezoneSelector ? { timezone: timezoneSelector } : {}
    )
  );

  const actions = {
    downloadRfpPdf,
    exportRfpPdf,
    exportRfpSummaryPdf,
    downloadBidPdf,
    exportBidPdf,
    setSnackbar,
    showModal
  };

  return compose(withRouter, connect(selector, actions))(PDFExportWrapper);
};
