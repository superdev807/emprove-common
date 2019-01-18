'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _pdf = require('../redux/modules/pdf');

var _selectors = require('../redux/selectors');

var _timeFunctions = require('../utils/timeFunctions');

var _globalStatus = require('../redux/modules/globalStatus');

var _reduxModal = require('redux-modal');

var _reactRouter = require('react-router');

var _request = require('../redux/api/request');

var _constants = require('../config/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (timezoneSelector) {
  return function (WrappedComponent) {
    var PDFExportWrapper = function (_Component) {
      _inherits(PDFExportWrapper, _Component);

      function PDFExportWrapper() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PDFExportWrapper);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PDFExportWrapper.__proto__ || Object.getPrototypeOf(PDFExportWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.handleExportRfp = function () {
          var exportRfpId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var callback = arguments[1];

          var rfpId = exportRfpId || _this.props.match.params.rfpId;
          var _this$props = _this.props,
              exportRfpPdf = _this$props.exportRfpPdf,
              setSnackbar = _this$props.setSnackbar;


          exportRfpPdf({
            id: rfpId,
            params: {
              timezone: (0, _timeFunctions.getLocalTimezone)()
            },
            success: function success(_ref2) {
              var url = _ref2.url,
                  fileName = _ref2.fileName;

              _this.downloadFile(url, fileName);
              setSnackbar({ message: 'Successfully exported!', variant: 'success' });
              callback && callback(true);
            },
            fail: function fail(error) {
              setSnackbar({ message: 'Something went wrong!', variant: 'error' });
              callback && callback(false);
            }
          });
        }, _this.handleDownloadRfp = function (downloadRfpId, callback) {
          var rfpId = downloadRfpId || _this.props.match.params.rfpId;
          var _this$props2 = _this.props,
              downloadRfpPdf = _this$props2.downloadRfpPdf,
              setSnackbar = _this$props2.setSnackbar;


          downloadRfpPdf({
            id: rfpId,
            params: {
              timezone: (0, _timeFunctions.getLocalTimezone)()
            },
            success: function success() {
              setSnackbar({ message: 'Successfully Sent to Your Email!', variant: 'success' });
              callback && callback(true);
            },
            fail: function fail(error) {
              setSnackbar({ message: 'Something went wrong!', variant: 'error' });
              callback && callback(false);
            }
          });
        }, _this.handleViewRfpBrief = function (viewRfpId, callback, onClose, blocker) {
          var _this$props3 = _this.props,
              exportRfpPdf = _this$props3.exportRfpPdf,
              match = _this$props3.match,
              setSnackbar = _this$props3.setSnackbar,
              showModal = _this$props3.showModal,
              timezone = _this$props3.timezone;

          var rfpId = viewRfpId || match.params.rfpId;

          exportRfpPdf({
            id: rfpId,
            params: {
              timezone: (0, _timeFunctions.getLocalTimezone)()
            },
            success: function success(_ref3) {
              var url = _ref3.url,
                  fileName = _ref3.fileName;

              showModal('pdfViewerModal', {
                pdfKind: _constants.VIEW_PDF_KIND.FULL_RFP,
                source: url,
                type: 'rfp',
                fileName: fileName,
                rfpId: rfpId,
                onClose: onClose,
                timezone: timezone,
                blocker: blocker
              });
              callback && callback(true);
            },
            fail: function fail(error) {
              setSnackbar({ message: 'Something went wrong!', variant: 'error' });
              callback && callback(false);
            }
          });
        }, _this.handleExportBid = function () {
          var bidId = _this.props.match.params.bidId;
          var _this$props4 = _this.props,
              exportBidPdf = _this$props4.exportBidPdf,
              setSnackbar = _this$props4.setSnackbar;


          exportBidPdf({
            id: bidId,
            success: function success(_ref4) {
              var url = _ref4.url,
                  fileName = _ref4.fileName;

              _this.downloadFile(url, fileName);
              setSnackbar({ message: 'Successfully exported!', variant: 'success' });
            },
            fail: function fail() {
              setSnackbar({ message: 'Something went wrong!', variant: 'error' });
            }
          });
        }, _this.handleDownloadBid = function (downloadBidId, callback) {
          var bidId = downloadBidId || _this.props.match.params.bidId;
          var _this$props5 = _this.props,
              downloadBidPdf = _this$props5.downloadBidPdf,
              setSnackbar = _this$props5.setSnackbar;


          downloadBidPdf({
            id: bidId,
            success: function success() {
              setSnackbar({ message: 'Successfully Sent to Your Email!', variant: 'success' });
              callback && callback(true);
            },
            fail: function fail(error) {
              setSnackbar({ message: 'Something went wrong!', variant: 'error' });
              callback && callback(false);
            }
          });
        }, _this.handleViewBidBrief = function (viewBidId, callback, onClose) {
          var _this$props6 = _this.props,
              exportBidPdf = _this$props6.exportBidPdf,
              match = _this$props6.match,
              setSnackbar = _this$props6.setSnackbar,
              showModal = _this$props6.showModal,
              timezone = _this$props6.timezone;

          var bidId = viewBidId || match.params.bidId;

          exportBidPdf({
            id: bidId,
            success: function success(_ref5) {
              var url = _ref5.url,
                  fileName = _ref5.fileName;

              showModal('pdfViewerModal', {
                pdfKind: _constants.VIEW_PDF_KIND.FULL_RFP,
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
              setSnackbar({ message: 'Something went wrong!', variant: 'error' });
              callback && callback(false);
            }
          });
        }, _this.downloadFile = function (url, fileName) {
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
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(PDFExportWrapper, [{
        key: 'render',
        value: function render() {
          var _props = this.props,
              exportStatus = _props.exportStatus,
              others = _objectWithoutProperties(_props, ['exportStatus']);

          var isExporting = exportStatus === _request.API_PENDING;
          return _react2.default.createElement(WrappedComponent, _extends({}, others, {
            isExportingPDF: isExporting,
            onExportRfp: this.handleExportRfp,
            onDownloadRfp: this.handleDownloadRfp,
            onViewRfpBrief: this.handleViewRfpBrief,
            onExportBid: this.handleExportBid,
            onDownloadBid: this.handleDownloadBid,
            onViewBidBrief: this.handleViewBidBrief,
            downloadFile: this.downloadFile
          }));
        }
      }]);

      return PDFExportWrapper;
    }(_react.Component);

    var selector = (0, _reselect.createStructuredSelector)({
      exportStatus: _selectors.exportStatusSelector,
      timezone: timezoneSelector
    });

    var actions = {
      downloadRfpPdf: _pdf.downloadRfpPdf,
      exportRfpPdf: _pdf.exportRfpPdf,
      downloadBidPdf: _pdf.downloadBidPdf,
      exportBidPdf: _pdf.exportBidPdf,
      setSnackbar: _globalStatus.setSnackbar,
      showModal: _reduxModal.show
    };

    return (0, _redux.compose)(_reactRouter.withRouter, (0, _reactRedux.connect)(selector, actions))(PDFExportWrapper);
  };
};