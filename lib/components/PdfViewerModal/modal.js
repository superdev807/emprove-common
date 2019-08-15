'use strict';

import _URL from "@babel/runtime-corejs3/core-js-stable/url";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/slice";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/index-of";
import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";
import _asyncToGenerator from "@babel/runtime-corejs3/helpers/asyncToGenerator";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
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
import { sendRfpPdf, sendRfpSummaryPdf, sendBidPdf } from '../../redux/modules/pdf';
import { isMobileSelector, sendPdfStatusSelector } from '../../redux/selectors';
import { setSnackbar } from '../../redux/modules/globalStatus';

var PdfViewerModal =
/*#__PURE__*/
function (_Component) {
  _inherits(PdfViewerModal, _Component);

  function PdfViewerModal() {
    var _getPrototypeOf2, _context;

    var _this;

    _classCallCheck(this, PdfViewerModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PdfViewerModal)).call.apply(_getPrototypeOf2, _concatInstanceProperty(_context = [this]).call(_context, args)));

    _defineProperty(_assertThisInitialized(_this), "handleSendPDF", function () {
      switch (_this.props.type) {
        case 'rfp':
          return _this.handleSendRfpPDF();

        case 'bid':
          return _this.handleSendBidPDF();

        case 'rfpSummary':
          return _this.handleSendRfpSummary();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSendRfpPDF",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      var _this$props, blocker, fileName, rfpId, sendRfpPdf, setSnackbar, timezone;

      return _regeneratorRuntime.wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$props = _this.props, blocker = _this$props.blocker, fileName = _this$props.fileName, rfpId = _this$props.rfpId, sendRfpPdf = _this$props.sendRfpPdf, setSnackbar = _this$props.setSnackbar, timezone = _this$props.timezone;
              _context2.t0 = rfpId;

              if (!_context2.t0) {
                _context2.next = 9;
                break;
              }

              _context2.t1 = !blocker;

              if (_context2.t1) {
                _context2.next = 8;
                break;
              }

              _context2.next = 7;
              return blocker();

            case 7:
              _context2.t1 = _context2.sent;

            case 8:
              _context2.t0 = _context2.t1;

            case 9:
              if (!_context2.t0) {
                _context2.next = 11;
                break;
              }

              sendRfpPdf({
                id: rfpId,
                data: {
                  fileName: fileName,
                  timezone: timezone
                },
                success: function success() {
                  setSnackbar({
                    message: 'Successfully Sent to Your Email!',
                    variant: 'success'
                  });
                }
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleSendBidPDF", function () {
      var _this$props2 = _this.props,
          fileName = _this$props2.fileName,
          bidId = _this$props2.bidId,
          sendBidPdf = _this$props2.sendBidPdf,
          setSnackbar = _this$props2.setSnackbar,
          timezone = _this$props2.timezone;

      if (bidId) {
        sendBidPdf({
          id: bidId,
          data: {
            fileName: fileName,
            timezone: timezone
          },
          success: function success() {
            setSnackbar({
              message: 'Successfully Sent to Your Email!',
              variant: 'success'
            });
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSendRfpSummary", function () {
      var rfpId = _this.props.rfpId;

      if (rfpId) {
        _this.props.sendRfpSummaryPdf({
          id: rfpId,
          data: {
            fileName: _this.props.fileName,
            timezone: _this.props.timezone
          },
          success: function success() {
            _this.props.setSnackbar({
              message: "Plan sent to ".concat(_this.props.email),
              variant: 'success'
            });
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      var _this$props3 = _this.props,
          handleHide = _this$props3.handleHide,
          onClose = _this$props3.onClose;
      onClose && onClose();
      handleHide();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDownloadPDF",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2() {
      var _this$props4, blocker, source, link, raw, rawLength, array, i;

      return _regeneratorRuntime.wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this$props4 = _this.props, blocker = _this$props4.blocker, source = _this$props4.source;
              link = document.createElement('a');
              _context3.t0 = !blocker;

              if (_context3.t0) {
                _context3.next = 7;
                break;
              }

              _context3.next = 6;
              return blocker();

            case 6:
              _context3.t0 = _context3.sent;

            case 7:
              if (!_context3.t0) {
                _context3.next = 12;
                break;
              }

              if (_indexOfInstanceProperty(source).call(source, 'data:application/pdf;base64,') === -1) {
                link.href = source;
              } else {
                raw = atob(_sliceInstanceProperty(source).call(source, 28));
                rawLength = raw.length;
                array = new Uint8Array(rawLength);

                for (i = 0; i < rawLength; i++) {
                  array[i] = raw.charCodeAt(i);
                }

                link.href = _URL.createObjectURL(new Blob([array], {
                  type: 'application/pdf'
                }));
              }

              link.download = _this.props.fileName;
              link.dispatchEvent(new MouseEvent('click'));

              _this.props.setSnackbar({
                message: 'Downloaded',
                variant: 'success'
              });

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee2);
    })));

    return _this;
  }

  _createClass(PdfViewerModal, [{
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          classes = _this$props5.classes,
          disableDownload = _this$props5.disableDownload,
          isMobile = _this$props5.isMobile,
          pdfKind = _this$props5.pdfKind,
          sendStatus = _this$props5.sendStatus,
          source = _this$props5.source,
          show = _this$props5.show,
          showEditButton = _this$props5.showEditButton,
          onEditClick = _this$props5.onEditClick;
      return React.createElement(Dialog, {
        open: show,
        fullScreen: isMobile,
        maxWidth: false,
        disableEnforceFocus: true,
        onClose: this.handleClose,
        className: classes.noMarginTop
      }, React.createElement(DialogTitle, {
        className: classes.topIconBox
      }, !disableDownload && (!isMobile ? React.createElement(IconButton, {
        onClick: this.handleDownloadPDF
      }, React.createElement(IconDownload, {
        className: classes.topIcon
      })) : pdfKind === VIEW_PDF_KIND.FULL_RFP || pdfKind === VIEW_PDF_KIND.RFP_SUMMARY ? React.createElement(Button, {
        id: "buttons_downloaded_rfp",
        className: classes.downloadButton,
        color: "primary",
        variant: "contained",
        onClick: this.handleSendPDF
      }, "DOWNLOAD") : null), showEditButton && React.createElement(Button, {
        variant: "outlined",
        color: "primary",
        className: classes.editButton,
        onClick: onEditClick
      }, "SIGN UP TO EDIT PLAN"), React.createElement(IconButton, {
        id: pdfKind === VIEW_PDF_KIND.FULL_RFP ? 'buttons_closed_page_rfp' : undefined,
        onClick: this.handleClose
      }, React.createElement(IconClose, {
        className: classes.topIcon
      }))), React.createElement(DialogContent, {
        className: classes.dialogContent
      }, React.createElement(PdfView, {
        source: source
      })), sendStatus === API_PENDING && React.createElement(LoadingIndicator, {
        fixed: true
      }));
    }
  }]);

  return PdfViewerModal;
}(Component);

_defineProperty(PdfViewerModal, "propTypes", {
  blocker: PropTypes.func,
  disableDownload: PropTypes.bool,
  fileName: PropTypes.string,
  handleHide: PropTypes.func,
  isMobile: PropTypes.bool,
  sendStatus: PropTypes.string,
  show: PropTypes.bool,
  source: PropTypes.string,
  timezone: PropTypes.string,
  type: PropTypes.oneOf(['bid', 'rfp', 'rfpSummary'])
});

var selector = createStructuredSelector({
  isMobile: isMobileSelector,
  sendStatus: sendPdfStatusSelector
});
var actions = {
  sendBidPdf: sendBidPdf,
  sendRfpPdf: sendRfpPdf,
  sendRfpSummaryPdf: sendRfpSummaryPdf,
  setSnackbar: setSnackbar
};
export default compose(withStyles(styles), connect(selector, actions))(PdfViewerModal);