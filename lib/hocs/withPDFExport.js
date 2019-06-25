'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _pdf = require("../redux/modules/pdf");

var _selectors = require("../redux/selectors");

var _timeFunctions = require("../utils/timeFunctions");

var _globalStatus = require("../redux/modules/globalStatus");

var _reduxModal = require("redux-modal");

var _reactRouter = require("react-router");

var _request = require("../redux/api/request");

var _constants = require("../config/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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

var _default = function _default(timezoneSelector) {
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
              setSnackbar = _this$props.setSnackbar;
          exportRfpPdf({
            id: rfpId,
            params: {
              timezone: (0, _timeFunctions.getLocalTimezone)()
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
              setSnackbar = _this$props2.setSnackbar;
          downloadRfpPdf({
            id: rfpId,
            params: {
              timezone: (0, _timeFunctions.getLocalTimezone)()
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
          var rfpId = viewRfpId || match.params.rfpId;
          exportRfpPdf({
            id: rfpId,
            params: {
              timezone: (0, _timeFunctions.getLocalTimezone)(),
              skipAccountIdMatching: skipAccountIdMatching
            },
            success: function success(_ref2) {
              var url = _ref2.url,
                  fileName = _ref2.fileName;
              showModal('pdfViewerModal', {
                pdfKind: _constants.VIEW_PDF_KIND.FULL_RFP,
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
              setSnackbar({
                message: 'Something went wrong!',
                variant: 'error'
              });
              callback && callback(false);
            }
          });
        });

        _defineProperty(_assertThisInitialized(_this), "handleExportRfpSummary", function (rfpId, callback) {
          _this.props.exportRfpSummaryPdf({
            id: rfpId,
            success: function success(_ref5) {
              var url = _ref5.url,
                  fileName = _ref5.fileName;

              _this.props.showModal('pdfViewerModal', {
                pdfKind: _constants.VIEW_PDF_KIND.RFP_SUMMARY,
                source: url,
                type: 'rfpSummary',
                fileName: fileName,
                rfpId: rfpId
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

          var isExporting = exportStatus === _request.API_PENDING;
          return _react["default"].createElement(WrappedComponent, _extends({}, others, {
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
    }(_react.Component);

    var selector = (0, _reselect.createStructuredSelector)(Object.assign({}, {
      exportStatus: _selectors.exportStatusSelector
    }, timezoneSelector ? {
      timezone: timezoneSelector
    } : {}));
    var actions = {
      downloadRfpPdf: _pdf.downloadRfpPdf,
      exportRfpPdf: _pdf.exportRfpPdf,
      exportRfpSummaryPdf: _pdf.exportRfpSummaryPdf,
      downloadBidPdf: _pdf.downloadBidPdf,
      exportBidPdf: _pdf.exportBidPdf,
      setSnackbar: _globalStatus.setSnackbar,
      showModal: _reduxModal.show
    };
    return (0, _redux.compose)(_reactRouter.withRouter, (0, _reactRedux.connect)(selector, actions))(PDFExportWrapper);
  };
};

exports["default"] = _default;