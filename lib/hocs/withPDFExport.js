'use strict';

import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.match";
import _Object$assign from "@babel/runtime-corejs3/core-js-stable/object/assign";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
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
import { VIEW_PDF_KIND } from '../config/constants'; // import { getPartnerFromHost } from '../utils/partnerFunctions';

export default (function (timezoneSelector, accountSelector) {
  return function (WrappedComponent) {
    var PDFExportWrapper =
    /*#__PURE__*/
    function (_Component) {
      _inherits(PDFExportWrapper, _Component);

      function PDFExportWrapper() {
        var _getPrototypeOf2, _context;

        var _this;

        _classCallCheck(this, PDFExportWrapper);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PDFExportWrapper)).call.apply(_getPrototypeOf2, _concatInstanceProperty(_context = [this]).call(_context, args)));

        _defineProperty(_assertThisInitialized(_this), "handleExportRfp", function () {
          var exportRfpId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var callback = arguments.length > 1 ? arguments[1] : undefined;
          var rfpId = exportRfpId || _this.props.match.params.rfpId;
          var _this$props = _this.props,
              exportRfpPdf = _this$props.exportRfpPdf,
              setSnackbar = _this$props.setSnackbar; // const hostPartner = getPartnerFromHost();

          exportRfpPdf({
            id: rfpId,
            params: {
              timezone: getLocalTimezone() // hostPartner

            },
            success: function success(_ref) {
              var url = _ref.url,
                  fileName = _ref.fileName;

              _this.downloadFile(url, fileName);

              setSnackbar({
                message: 'Successfully exported!',
                variant: 'success'
              });
              callback && callback(true);
            },
            fail: function fail(error) {
              setSnackbar({
                message: 'Something went wrong!',
                variant: 'error'
              });
              callback && callback(false);
            }
          });
        });

        _defineProperty(_assertThisInitialized(_this), "handleDownloadRfp", function (downloadRfpId, callback) {
          var rfpId = downloadRfpId || _this.props.match.params.rfpId;
          var _this$props2 = _this.props,
              downloadRfpPdf = _this$props2.downloadRfpPdf,
              setSnackbar = _this$props2.setSnackbar; // const hostPartner = getPartnerFromHost();

          downloadRfpPdf({
            id: rfpId,
            params: {
              timezone: getLocalTimezone() // hostPartner

            },
            success: function success() {
              setSnackbar({
                message: 'Successfully Sent to Your Email!',
                variant: 'success'
              });
              callback && callback(true);
            },
            fail: function fail(error) {
              setSnackbar({
                message: 'Something went wrong!',
                variant: 'error'
              });
              callback && callback(false);
            }
          });
        });

        _defineProperty(_assertThisInitialized(_this), "handleViewRfpBrief", function (viewRfpId) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var callback = options.callback,
              onClose = options.onClose,
              blocker = options.blocker,
              disableDownload = options.disableDownload,
              showEditButton = options.showEditButton,
              skipAccountIdMatching = options.skipAccountIdMatching,
              onEditClick = options.onEditClick;
          var _this$props3 = _this.props,
              exportRfpPdf = _this$props3.exportRfpPdf,
              match = _this$props3.match,
              setSnackbar = _this$props3.setSnackbar,
              showModal = _this$props3.showModal,
              timezone = _this$props3.timezone;
          var rfpId = viewRfpId || match.params.rfpId; // const hostPartner = getPartnerFromHost();

          exportRfpPdf({
            id: rfpId,
            params: {
              timezone: getLocalTimezone(),
              skipAccountIdMatching: skipAccountIdMatching // hostPartner

            },
            success: function success(_ref2) {
              var url = _ref2.url,
                  fileName = _ref2.fileName;
              showModal('pdfViewerModal', {
                pdfKind: VIEW_PDF_KIND.FULL_RFP,
                source: url,
                type: 'rfp',
                fileName: fileName,
                rfpId: rfpId,
                onClose: onClose,
                timezone: timezone,
                blocker: blocker,
                disableDownload: disableDownload,
                showEditButton: showEditButton,
                onEditClick: onEditClick
              });
              callback && callback(true);
            },
            fail: function fail(error) {
              setSnackbar({
                message: 'Something went wrong!',
                variant: 'error'
              });
              callback && callback(false);
            }
          });
        });

        _defineProperty(_assertThisInitialized(_this), "handleExportBid", function () {
          var bidId = _this.props.match.params.bidId;
          var _this$props4 = _this.props,
              exportBidPdf = _this$props4.exportBidPdf,
              setSnackbar = _this$props4.setSnackbar;
          exportBidPdf({
            id: bidId,
            success: function success(_ref3) {
              var url = _ref3.url,
                  fileName = _ref3.fileName;

              _this.downloadFile(url, fileName);

              setSnackbar({
                message: 'Successfully exported!',
                variant: 'success'
              });
            },
            fail: function fail() {
              setSnackbar({
                message: 'Something went wrong!',
                variant: 'error'
              });
            }
          });
        });

        _defineProperty(_assertThisInitialized(_this), "handleDownloadBid", function (downloadBidId, callback) {
          var bidId = downloadBidId || _this.props.match.params.bidId;
          var _this$props5 = _this.props,
              downloadBidPdf = _this$props5.downloadBidPdf,
              setSnackbar = _this$props5.setSnackbar;
          downloadBidPdf({
            id: bidId,
            success: function success() {
              setSnackbar({
                message: 'Successfully Sent to Your Email!',
                variant: 'success'
              });
              callback && callback(true);
            },
            fail: function fail(error) {
              setSnackbar({
                message: 'Something went wrong!',
                variant: 'error'
              });
              callback && callback(false);
            }
          });
        });

        _defineProperty(_assertThisInitialized(_this), "handleViewBidBrief", function (viewBidId, callback, onClose) {
          var _this$props6 = _this.props,
              exportBidPdf = _this$props6.exportBidPdf,
              match = _this$props6.match,
              setSnackbar = _this$props6.setSnackbar,
              showModal = _this$props6.showModal,
              timezone = _this$props6.timezone;
          var bidId = viewBidId || match.params.bidId;
          exportBidPdf({
            id: bidId,
            success: function success(_ref4) {
              var url = _ref4.url,
                  fileName = _ref4.fileName;
              showModal('pdfViewerModal', {
                pdfKind: VIEW_PDF_KIND.FULL_RFP,
                source: url,
                type: 'bid',
                fileName: fileName,
                bidId: bidId,
                onClose: onClose,
                timezone: timezone
              });
              callback && callback(true);
            },
            fail: function fail(error) {
              setSnackbar({
                message: 'Something went wrong!',
                variant: 'error'
              });
              callback && callback(false);
            }
          });
        });

        _defineProperty(_assertThisInitialized(_this), "handleExportRfpSummary", function (rfpId, callback) {
          // const hostPartner = getPartnerFromHost();
          _this.props.exportRfpSummaryPdf({
            id: rfpId,
            // params: {
            //   hostPartner
            // },
            success: function success(_ref5) {
              var url = _ref5.url,
                  fileName = _ref5.fileName;

              _this.props.showModal('pdfViewerModal', {
                pdfKind: VIEW_PDF_KIND.RFP_SUMMARY,
                source: url,
                type: 'rfpSummary',
                fileName: fileName,
                rfpId: rfpId,
                timezone: _this.props.timezone,
                email: get(_this.props.user, 'email')
              });

              callback && callback(true);
            },
            fail: function fail(error) {
              _this.props.setSnackbar({
                message: 'Something went wrong!',
                variant: 'error'
              });

              callback && callback(false);
            }
          });
        });

        _defineProperty(_assertThisInitialized(_this), "downloadFile", function (url, fileName) {
          var link = document.createElement('a');
          link.href = url;
          link.download = fileName;
          var event = null;

          if (typeof MouseEvent === 'function') {
            event = new MouseEvent('click');
          } else {
            event = document.createEvent('MouseEvent');
            event.initEvent('click', true, true);
          }

          link.dispatchEvent(event);
        });

        return _this;
      }

      _createClass(PDFExportWrapper, [{
        key: "render",
        value: function render() {
          var _this$props7 = this.props,
              exportStatus = _this$props7.exportStatus,
              others = _objectWithoutProperties(_this$props7, ["exportStatus"]);

          var isExporting = exportStatus === API_PENDING;
          return React.createElement(WrappedComponent, _extends({}, others, {
            isExportingPDF: isExporting,
            onExportRfp: this.handleExportRfp,
            onDownloadRfp: this.handleDownloadRfp,
            onViewRfpBrief: this.handleViewRfpBrief,
            onExportRfpSummary: this.handleExportRfpSummary,
            onExportBid: this.handleExportBid,
            onDownloadBid: this.handleDownloadBid,
            onViewBidBrief: this.handleViewBidBrief,
            downloadFile: this.downloadFile
          }));
        }
      }]);

      return PDFExportWrapper;
    }(Component);

    var selector = createStructuredSelector(_Object$assign({
      exportStatus: exportStatusSelector
    }, accountSelector ? {
      user: accountSelector
    } : {}, timezoneSelector ? {
      timezone: timezoneSelector
    } : {}));
    var actions = {
      downloadRfpPdf: downloadRfpPdf,
      exportRfpPdf: exportRfpPdf,
      exportRfpSummaryPdf: exportRfpSummaryPdf,
      downloadBidPdf: downloadBidPdf,
      exportBidPdf: exportBidPdf,
      setSnackbar: setSnackbar,
      showModal: showModal
    };
    return compose(withRouter, connect(selector, actions))(PDFExportWrapper);
  };
});