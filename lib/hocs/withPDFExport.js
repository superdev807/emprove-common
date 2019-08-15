'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.index-of";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.assign";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.keys";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.iterator";
import "core-js/modules/es.string.match";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, PDFExportWrapper);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PDFExportWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

    var selector = createStructuredSelector(Object.assign({
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